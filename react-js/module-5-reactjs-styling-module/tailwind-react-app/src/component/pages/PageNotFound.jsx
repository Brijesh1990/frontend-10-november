import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
   <>
<body class="bg-black text-white flex items-center justify-center min-h-screen px-4">

  <div className="w-full max-w-md text-center">
    {/* Logo */}
    <div className="mb-6">
      <div className="w-10 h-10 mx-auto rounded-full">
      <img src={logo} alt='logo' />
      </div>
    </div>
    {/* 404 Title */}
    <h1 className="text-6xl md:text-7xl font-bold mb-4">404</h1>
    {/* Message */}
    <h2 className="text-xl md:text-2xl font-semibold mb-2">Page not found</h2>
    <p className="text-gray-400 mb-6">
      Sorry, we can’t find the page you’re looking for.
    </p>
    {/* Buttons */}
    <div className="space-y-3">
      {/* Go Home */}
      <Link
        to="/"
        className="block w-full bg-green-500 hover:bg-green-600 transition rounded-full py-3 font-semibold text-black"
      >
        Go Home
      </Link>
      {/* Back Button */}
      <Link to="/"><button
        
        className="w-full border border-gray-600 hover:border-white rounded-full py-3"
      >
        Go Back
      </button>
      </Link>
    </div>
    {/* Divider */}
    <div className="my-6 border-t border-gray-800" />
    {/* Help Links */}
    <p className="text-gray-400 text-sm mb-2">Need help?</p>
    <div className="flex justify-center gap-4 text-sm">
      <a href="#" className="hover:underline">
        Support
      </a>
      <a href="#" className="hover:underline">
        Contact
      </a>
    </div>
    {/* Footer */}
    <p className="mt-6 text-xs text-gray-500">
      Error code: 404 — Page not found
    </p>
  </div>
  </body>
</>

  )
}
