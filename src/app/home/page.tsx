'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categories = [
  { title: 'Singers', desc: 'Hire top vocalists for live shows & events' },
  { title: 'Dancers', desc: 'Energetic performers for weddings & parties' },
  { title: 'Speakers', desc: 'Inspirational & motivational public speakers' },
  { title: 'DJs', desc: 'Create vibes with experienced DJs for any crowd' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="text-center px-4 md:px-10 py-24 bg-orange-700 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Book Performing Artists for Any Event
        </h1>
        <p className="max-w-xl mx-auto text-white dark:text-gray-400 text-base md:text-lg mb-6">
          From soulful singers to electrifying dancers — Artistly connects you with the best.
        </p>
        <Link href="/artists">
          <Button className="bg-white hover:bg-white text-black font-semibold px-6 py-3 text-base transition  dark:bg-orange-700  dark:text-white">
            Explore Artists
          </Button>
        </Link>
      </section>

      {/* Category Cards */}
      <section className="px-6 md:px-10 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Artist Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-orange-700 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{cat.title}</h3>
              <p className="text-sm text-white dark:text-gray-400">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}






