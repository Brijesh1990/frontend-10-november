import React from 'react'
export default function HeaderApp() {
return (
<header className="bg-white text-dark p-5">
<div className="max-w-7xl mx-auto px-4 py-3">
<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
{/* Logo + Call Us */}
<div className="flex items-center justify-between md:justify-start gap-6">
<h1 className="text-4xl text-green-600 font-bold">FreshMart</h1>
</div>
{/* Search Box */}
<div className="w-full md:w-1/2">
<div className="relative">
<input
type="text"
placeholder="Search for fruits, vegetables..."
className="w-full rounded-full bg-gray-300 px-4 py-2 text-gray-700 focus:outline-none"
/>
<button className="absolute right-1 top-1 bottom-1 bg-green-700 px-4 rounded-full text-sm">
Search
</button>
</div>
</div>
{/* Social Icons */}
<div className="flex justify-center md:justify-end gap-4">
{/* add cart */}
<button type="button" className="rounded-2xl">
{" "}
🛒 Cart(0)
</button>
{/* Facebook */}
<a href="#" className="hover:text-gray-200">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path
d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7
1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.6v7A10
10 0 0022 12z"
/>
</svg>
</a>
{/* Instagram */}
<a href="#" className="hover:text-gray-200">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path
d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2
5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0
01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5
3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012
7.5zm0 7.4a2.9 2.9 0 112.9-2.9A2.9
2.9 0 0112 14.9zm4.8-7.9a1.1
1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"
/>
</svg>
</a>
{/* Twitter */}
<a href="#" className="hover:text-gray-200">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path
d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3
0 001.88-2.37 8.6 8.6 0
01-2.72 1.04 4.28 4.28
0 00-7.29 3.9A12.14
12.14 0 013 4.8a4.28
4.28 0 001.33 5.71 4.2
4.2 0 01-1.94-.54v.05a4.28
4.28 0 003.44 4.19 4.3
4.3 0 01-1.93.07 4.28
4.28 0 004 2.98A8.6
8.6 0 012 19.54 12.14
12.14 0 008.29 21c7.55
0 11.68-6.26 11.68-11.68
0-.18 0-.35-.01-.53A8.3
8.3 0 0022.46 6z"
/>
</svg>
</a>
</div>
</div>
</div>
</header>

)
}
