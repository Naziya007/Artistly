'use client';

import ArtistCard from '../../components/ArtistCard';
import artistsData from '../../../data/artists.json';

import { useState } from 'react';


const categories = ['All', 'Singer', 'DJ', 'Dancer', 'Speaker'];

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArtists =
    selectedCategory === 'All'
      ? artistsData
      : artistsData.filter((artist) => artist.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 transition-colors">
      <h1 className="text-4xl font-bold text-center mb-10">Our Performing Artists</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? 'bg-orange-700 text-white border-orange-600'
                : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
            } transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No artists found.</p>
        )}
      </div>
    </main>
  );
}

