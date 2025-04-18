'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const saveUserInfo = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/save-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to save user information');
      }

      const data = await response.json();
      console.log('User information saved:', data);
    } catch (error) {
      console.error('Error saving user information:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      const redirectUri = 'http://localhost:3000/api/auth/callback';
      console.log('Login Page - Client ID:', clientId);
      console.log('Login Page - Redirect URI:', redirectUri);
      
      const scope = 'email profile openid';
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
      console.log('Login Page - Auth URL:', authUrl);
      
      window.location.href = authUrl;
    } catch (error) {
      console.error('Login Page - Error:', error);
    }
  };

  useEffect(() => {
    // Check if we're returning from Google OAuth
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // Exchange code for tokens and get user info
      fetch(`/api/auth/callback?code=${code}`)
        .then(response => response.json())
        .then(data => {
          if (data.user) {
            // Save user information to MongoDB
            saveUserInfo({
              user_id: data.user.sub,
              email: data.user.email,
              name: data.user.name
            });
            
            // Redirect to dashboard or home page
            router.push('/dashboard');
          }
        })
        .catch(error => {
          console.error('Error handling OAuth callback:', error);
        });
    }
  }, []);

  // Get error message from URL
  const error = new URLSearchParams(window.location.search).get('error');
  if (error) {
    console.error('Login Page - Error from URL:', error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#accbee] to-[#e7f0fd] flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#accbee_0%,_#e7f0fd_50%,_#accbee_100%)] animate-gradient-shift"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#accbee]/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e7f0fd]/30 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#accbee]/20 rounded-full blur-3xl animate-float-fast"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-4xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text hover:scale-105 transition-all duration-300">Legally AI</span>
          <p className="mt-2 text-gray-600">Sign in to access your account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{decodeURIComponent(error)}</p>
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
        >
          <img
            src="/google.svg"
            alt="Google logo"
            width={20}
            height={20}
          />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </button>
      </div>
    </div>
  );
} 