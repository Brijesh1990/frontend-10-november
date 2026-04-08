import React from 'react'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
return (

<nav className="bg-blue-400 p-4 sticky top-0 z-50 w-full flex flex-wrap">
<div className="flex  items-center justify-between">
{/* Logo */}
<a
href="tel:(+91)-9998003879"
className="sm:text-sm md:text-sm lg:text-xl font-semibold text-white uppercase"
>
<span>📞Call Us:(+91)-9998003879</span>
</a>
{/* Hamburger Button */}
<button
onclick="toggleMenu()"
className="text-white text-3xl md:hidden ml-54"
>
☰
</button>
</div>
{/* Navigation Menu */}
<div className="ml-64">
<ul
id="mobileMenu"
className="fixed top-0 left-0  h-full w-64 bg-blue-500 text-white
transform -translate-x-full transition-transform duration-300
flex flex-col gap-6 p-6 text-lg font-mono
md:static md:translate-x-0 md:flex-row md:h-auto md:w-auto
md:bg-transparent md:p-0 md:gap-8 md:items-center"
>
{/* Close button (mobile only) */}
<li className="md:hidden">
<button onclick="toggleMenu()" className="text-2xl">
✕
</button>
</li>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/blogs">Blogs</Link>
</li>
<li>
<Link to="/download">Download</Link>
</li>
<li>
<Link to="/products">Products</Link>
</li>
<li>
<Link to="/gallery">Gallery</Link>
</li>
{/* Dropdown */}
<li className="relative group">
<Link to="/register" className="block">
My Account 👥
</Link>
{/* Desktop dropdown */}
<ul
className="hidden md:block md:absolute md:top-full md:left-0
md:bg-blue-400 md:p-3 md:rounded md:shadow-lg
md:opacity-0 md:invisible
md:group-hover:opacity-100 md:group-hover:visible
transition-all duration-300"
>
<li>
<Link to="/register" className="block py-1">
SignUp
</Link>
</li>
<li>
<Link to="/login" className="block py-1">
SignIn
</Link>
</li>
</ul>
</li>
<li>
<Link to="/contact">Contact</Link>
</li>
</ul>
</div>
</nav>

)
}
