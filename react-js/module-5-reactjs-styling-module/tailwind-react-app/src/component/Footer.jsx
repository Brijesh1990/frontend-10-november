import React from 'react'

export default function Footer() {
  return (
    <>
  {/* FOOTER */}
  <footer className="bg-black text-white border-t border-gray-800 mt-10 px-6 py-10 text-sm">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h4 className="text-white font-semibold mb-3">Company</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              For the Record
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3">Communities</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-white">
              For Artists
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Developers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Advertising
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3">Useful links</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Free Mobile App
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3">Spotify Plans</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-white">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Free
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Social */}
    <div className="flex justify-between items-center flex-col md:flex-row gap-4">
      <p className="text-xs">© 2026 Spotify AB</p>
      <div className="flex gap-4">
        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700">
          📷
        </div>
        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700">
          🐦
        </div>
        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700">
          📘
        </div>
      </div>
    </div>
  </footer>
</>

  )
}
