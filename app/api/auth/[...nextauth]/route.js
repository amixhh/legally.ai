import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // If the user is signing in, redirect to Streamlit with user info
      if (url.startsWith('/api/auth/signin')) {
        return `${baseUrl}/api/auth/streamlit-redirect`;
      }
      return url;
    }
  },
  pages: {
    signIn: '/',
  },
});

export { handler as GET, handler as POST }; 