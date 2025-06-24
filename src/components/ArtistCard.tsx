'use client';

interface Artist {
  name: string;
  category: string;
  bio: string;
  image: string;
}

export default function ArtistCard({ name, category, bio, image }: Artist) {
  return (
    <div className="w-full aspect-square bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-md transition">
      <div className="w-full h-2/3 relative">
    <img
  src={image?.trim() ? image : "/fallback.jpg"}
  alt={name}
  className="w-full h-56 object-cover rounded-t-xl"
  onError={(e) => {
    if (e.currentTarget.src !== location.origin + '/fallback.jpg') {
      e.currentTarget.src = '/fallback.jpg';
    }
  }}
/>

      </div>
      <div className="h-1/3 p-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-violet-600 dark:text-violet-400">{category}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{bio}</p>
      </div>
    </div>
  );
}

