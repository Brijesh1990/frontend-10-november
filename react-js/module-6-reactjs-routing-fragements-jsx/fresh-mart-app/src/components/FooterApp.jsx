import React from 'react'
import { Link } from 'react-router-dom'
export default function FooterApp() {
return (
<footer className="bg-gray-900 text-gray-300">
<div className="max-w-7xl mx-auto px-4 py-14">
{/* Top Footer */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
{/* Brand */}
<div className="lg:col-span-2">
<h2 className="text-2xl font-bold text-white">Fresh Mart</h2>
<p className="mt-4 text-sm text-gray-400">
Fresh Mart delivers farm-fresh groceries, fruits, vegetables, and
daily essentials straight to your doorstep.
</p>
{/* Social Icons */}
<div className="flex gap-4 mt-6">
<a href="#" className="hover:text-white transition">
{/* Facebook */}
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path
d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7
1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.6v7A10 10 0 0022 12z"
/>
</svg>
</a>
{/* Instagram */}
<a href="#" className="hover:text-white transition">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path
d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2
5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10z"
/>
</svg>
</a>
{/* Twitter */}
<a href="#" className="hover:text-white transition">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path
d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37
8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0
013 4.8a4.28 4.28 0 001.33 5.71 4.2 4.2 0 01-1.94-.54v.05a4.28
4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004
2.98A8.6 8.6 0 012 19.54 12.14 12.14 0 008.29 21c7.55 0
11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.3 8.3 0
0022.46 6z"
/>
</svg>
</a>
</div>
</div>
{/* Page Links */}
<div>
<h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
<ul className="space-y-2 text-sm">
<li>
<Link to="/" className="hover:text-white">
Home
</Link>
</li>
<li>
<Link to="/shop" className="hover:text-white">
Shop
</Link>
</li>
<li>
<a href="category.html" className="hover:text-white">
Categories
</a>
</li>
<li>
<a href="offers.html" className="hover:text-white">
Offers
</a>
</li>
<li>
<a href="contact.html" className="hover:text-white">
Contact
</a>
</li>
</ul>
</div>
{/* Address */}
<div>
<h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
<ul className="space-y-2 text-sm">
<li>📍 123 Fresh Street, New York</li>
<li>📞 +1 234 567 890</li>
<li>✉ support@freshmart.com</li>
<li>⏰ Mon – Sun: 8am – 10pm</li>
</ul>
</div>
{/* Newsletter */}
<div>
<h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
<p className="text-sm text-gray-400 mb-4">
Subscribe to get special offers &amp; updates.
</p>
<form className="flex">
<input
type="email"
placeholder="Your email"
className="w-full px-4 py-2 rounded-l-lg text-black bg-white focus:outline-none"
/>
<button className="bg-green-600 px-4 py-2 rounded-r-lg text-white hover:bg-green-700 transition">
Subscribe
</button>
</form>
</div>
</div>
{/* Divider */}
<div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
© 2026 Fresh Mart. All rights reserved.
</div>
</div>
</footer>

)
}
