import React from 'react'
import HeaderApp from '../HeaderApp'
import NavbarApp from '../NavbarApp'
export default function PageNotFound() {
  return (
    <div>
      <HeaderApp />
      <NavbarApp />
      <div className="text-center mt-20 p-15">
      <p className='text-center'>
        <img src='https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif' alt='404' className='w-80 h-80 mx-auto'/>
      </p>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {/* create button to go back to home page */}
      <button onClick={() => window.location.href = '/'} className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Back to Home
      </button>
      </div>
    </div>
  )
}
