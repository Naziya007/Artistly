'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['Hindi', 'English', 'Punjabi', 'Tamil'];
const feeRanges = ['₹1,000–5,000', '₹5,000–10,000', '₹10,000+'];

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee range is required'),
  image: yup.string().url('Enter a valid image URL').notRequired(),
  location: yup.string().required('Location is required'),
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const [submitted, setSubmitted] = useState(false);

const onSubmit = (data: any) => {
  const storedArtists = JSON.parse(localStorage.getItem('artists') || '[]');
  const updatedArtists = [...storedArtists, data];
  localStorage.setItem('artists', JSON.stringify(updatedArtists));

  reset();               // Step 1: Clear the form
  setSubmitted(true);    // Step 2: Show success message

  // Step 3: Hide after 3 seconds
  setTimeout(() => {
    setSubmitted(false);
  }, 3000);


};


  return (
    <main className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Onboard New Artist</h1>
     <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-2xl dark:shadow-md border border-gray-300 dark:border-gray-700 rounded-xl p-8">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              {...register('name')}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Bio */}
          <div>
            <label className="block mb-1 font-medium">Bio</label>
            <textarea
              {...register('bio')}
              rows={3}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            />
            {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            {categories.map((cat) => (
              <label key={cat} className="block text-sm">
                <input type="checkbox" value={cat} {...register('category')} className="mr-2" />
                {cat}
              </label>
            ))}
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>

          {/* Languages */}
          <div>
            <label className="block mb-1 font-medium">Languages Spoken</label>
            {languages.map((lang) => (
              <label key={lang} className="block text-sm">
                <input type="checkbox" value={lang} {...register('languages')} className="mr-2" />
                {lang}
              </label>
            ))}
            {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
          </div>

          {/* Fee Range */}
          <div>
            <label className="block mb-1 font-medium">Fee Range</label>
            <select
              {...register('fee')}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            >
              <option value="">Select Fee Range</option>
              {feeRanges.map((fee) => (
                <option key={fee} value={fee}>
                  {fee}
                </option>
              ))}
            </select>
            {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Profile Image URL</label>
            <input
              {...register('image')}
              placeholder="Optional"
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              {...register('location')}
              className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded"
          >
            Submit Artist
          </button>

          {submitted && <p className="text-green-500 text-center mt-4">Artist submitted successfully!</p>}
        </form>
        </div>
      </div>
    </main>
  );
}