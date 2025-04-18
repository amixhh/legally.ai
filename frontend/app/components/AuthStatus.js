'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthStatus() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout', { method: 'POST' });
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="px-4 py-2 rounded-md text-sm font-medium text-gray-700">
        Loading...
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {user.picture && (
            <img
              src={user.picture}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="text-sm text-gray-700">Welcome, {user.name}</span>
        </div>
        <button
          onClick={handleSignOut}
          className="px-3 py-1 text-sm text-white bg-gradient-to-r from-[#FFE44D] via-[#FFD700] to-[#DAA520] rounded-md hover:shadow-lg transition-all duration-300"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <a
      href="/login"
      className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-[#FFE44D] via-[#FFD700] to-[#DAA520] bg-[length:200%_100%] hover:bg-[position:100%_0%] transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(218,165,32,0.4)]"
    >
      Login
    </a>
  );
} 