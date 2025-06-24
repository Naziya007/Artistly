'use client';

import { useEffect, useState } from 'react';
import ArtistCard from '../../components/ArtistCard';

export default function DashboardPage() {
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    // Load artists from localStorage
    const stored = localStorage.getItem('artists');
    if (stored) {
      setArtists(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center">🎭 Manager Dashboard</h1>

        {artists.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No artists have been submitted yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <ArtistCard key={index} {...artist} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
