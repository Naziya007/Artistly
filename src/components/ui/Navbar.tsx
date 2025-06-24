'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-white dark:bg-black shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-orange-600 dark:text-purple-400">
          Artistly
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/home" className="hover:text-purple-600 dark:text-gray-200">
            Home
          </Link>
          <Link href="/artists" className="hover:text-purple-600 dark:text-gray-200">
            Artists
          </Link>
          <Link href="/onboard" className="hover:text-purple-600 dark:text-gray-200">
            Onboard
          </Link>
          <Link href="/dashboard" className="hover:text-purple-600 dark:text-gray-200">
            Dashboard
          </Link>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-center">
          <Link href="/home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/artists" onClick={() => setIsOpen(false)}>
            Artists
          </Link>
          <Link href="/onboard" onClick={() => setIsOpen(false)}>
            Onboard
          </Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>

          {mounted && (
            <button
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
                setIsOpen(false)
              }}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}
        </div>
      )}
    </nav>
  )
}



