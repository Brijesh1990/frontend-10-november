import React from 'react'

export default function Sidebar() {
  return (
   <aside className="w-[280px] md:w-[300px] h-screen bg-black p-3 flex flex-col justify-between fixed">
  {/* TOP */}
  <div>
    {/* Library Header */}
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-semibold text-gray-300">Your Library</h2>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-neutral-800 transition">
        +
      </button>
    </div>
    {/* Playlist Card */}
    <div className="bg-neutral-900 rounded-lg p-4 mb-4">
      <h3 className="font-semibold mb-1 text-white">Create your first playlist</h3>
      <p className="text-sm text-gray-400 mb-3">It’s easy, we’ll help you</p>
      <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:scale-105 transition">
        Create playlist
      </button>
    </div>


       <div className="bg-neutral-900 rounded-lg p-4 mb-4">
      <h3 className="font-semibold mb-1 text-white">Create your first playlist</h3>
      <p className="text-sm text-gray-400 mb-3">It’s easy, we’ll help you</p>
      <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:scale-105 transition">
        Browse podcast
      </button>
    </div>

       <div className="bg-neutral-900 rounded-lg p-4 mb-4">
      <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:scale-105 transition">
      <span className='animate-pulse'> 🟤 </span> English
      </button>
    </div>


    
  </div>
  {/* BOTTOM */}
  <div className="space-y-4">
    {/* Links */}
    <div className="text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-2">
      <a href="#" className="hover:underline">
        Legal
      </a>
      <a href="#" className="hover:underline">
        Safety &amp; Privacy Center
      </a>
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>
      <a href="#" className="hover:underline">
        Cookies
      </a>
      <a href="#" className="hover:underline">
        About Ads
      </a>
      <a href="#" className="hover:underline">
        Accessibility
      </a>
    </div>
    {/* Cookies Link */}
    <div>
      <a href="#" className="text-sm text-white hover:underline">
        Cookies
      </a>
    </div>
    {/* Language Button */}
    <button className="flex items-center gap-2 border border-gray-600 px-3 py-1.5 rounded-full text-sm hover:border-white transition">
      🌐 English
    </button>
  </div>
</aside>

  )
}
