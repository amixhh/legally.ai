import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const session = await getServerSession();
  
  if (!session?.user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const streamlitUrl = new URL('http://localhost:8501');
  streamlitUrl.searchParams.set('user_email', encodeURIComponent(session.user.email));
  streamlitUrl.searchParams.set('name', encodeURIComponent(session.user.name || 'Guest'));

  return NextResponse.redirect(streamlitUrl);
} 