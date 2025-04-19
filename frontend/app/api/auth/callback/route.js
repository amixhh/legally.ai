import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  console.log('Callback Route - Request URL:', request.url);
  console.log('Callback Route - Code:', code);
  console.log('Callback Route - Error:', error);

  if (error) {
    console.error('Callback Route - Google OAuth error:', error);
    return NextResponse.redirect(new URL(`/login?error=${error}`, request.url));
  }

  if (!code) {
    console.error('Callback Route - No code received from Google');
    return NextResponse.redirect(new URL('/login?error=no_code', request.url));
  }

  try {
    console.log('Callback Route - Starting token exchange...');
    const redirectUri = 'http://localhost:3000/api/auth/callback';
    console.log('Callback Route - Using redirect URI:', redirectUri);
    console.log('Callback Route - Client ID:', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
    console.log('Callback Route - Client Secret:', process.env.GOOGLE_CLIENT_SECRET ? 'Present' : 'Missing');
    
    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenResponse.json();
    console.log('Callback Route - Token response:', tokens);

    if (!tokenResponse.ok) {
      console.error('Callback Route - Token exchange failed:', tokens);
      throw new Error(`Failed to exchange code for tokens: ${tokens.error_description || tokens.error}`);
    }

    console.log('Callback Route - Fetching user info from Google...');
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    const userInfo = await userInfoResponse.json();
    console.log('Callback Route - User info:', userInfo);

    if (!userInfoResponse.ok) {
      console.error('Callback Route - Failed to get user info:', userInfo);
      throw new Error('Failed to get user information from Google');
    }

    console.log('Callback Route - Saving user info to backend...');
    const saveUserResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/save-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        name: userInfo.name
      }),
    });

    const userData = await saveUserResponse.json();
    console.log('Callback Route - Backend response:', userData);

    if (!saveUserResponse.ok) {
      console.error('Callback Route - Failed to save user info:', userData);
      throw new Error(`Failed to save user information: ${userData.message || 'Unknown error'}`);
    }

    // Redirect to Streamlit app with token
    const streamlitUrl = new URL('http://localhost:8501');
    streamlitUrl.searchParams.set('token', userData.token);
    
    return NextResponse.redirect(streamlitUrl);
  } catch (error) {
    console.error('Callback Route - Error:', error);
    return NextResponse.redirect(new URL(`/login?error=${encodeURIComponent(error.message)}`, request.url));
  }
} 