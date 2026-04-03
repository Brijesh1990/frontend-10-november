import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
   <>
  <header className="flex items-center justify-between px-4 md:px-6 py-3 bg-black top-0 z-50 sticky">
    {/* LEFT */}
    <div className="flex items-center gap-4">
      {/* Logo */}
      <div className="text-xl font-bold">🎵</div>
      {/* Home Icon */}
      <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition">
        🏠
      </button>
    </div>
    {/* CENTER (Search) */}
    <div className="flex-1 mx-4 max-w-xl">
      <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 focus-within:ring-2 ring-white/20">
        <span className="text-gray-400 mr-2">🔍</span>
        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
        />
        <button className="ml-2 text-gray-400 hover:text-white hidden sm:block">
          📁
        </button>
      </div>
    </div>
    {/* RIGHT */}
    <div className="flex items-center gap-4">
      {/* Links */}
      <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
        <a href="#" className="hover:text-white">
          Premium
        </a>
        <a href="#" className="hover:text-white">
          Support
        </a>
       <div className="relative group">
  <a href="#" className="hover:text-white">
    Download
  </a>

  {/* Dropdown */}
  <div className="absolute top-full left-0 mt-2 w-48 bg-neutral-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 hover:text-white">
      Windows
    </a>

    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 hover:text-white">
      Mac
    </a>

    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 hover:text-white">
      Linux
    </a>

    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 hover:text-white">
      Mobile App
    </a>

  </div>
</div>
      </nav>
      {/* Divider */}
      <div className="hidden lg:block h-6 w-px bg-gray-600" />
      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
         <Link to="/create-account"><button className="text-sm text-gray-300 hover:text-white hidden sm:block">
          Sign up
        </button>
        </Link>
       <Link to="/login-with-us">
       <button className="bg-white text-black text-sm px-4 py-2 rounded-full font-semibold hover:scale-105 transition">
          Log in
        </button>
        </Link>
      </div>
    </div>
  </header>
</>

  )
}
