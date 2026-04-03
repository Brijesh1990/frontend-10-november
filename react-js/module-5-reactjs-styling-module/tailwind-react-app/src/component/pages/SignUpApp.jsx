import React from 'react'
import logo from '../../logo.png'
export default function SignUpApp() {
return (
<>
<body class="bg-black text-white flex items-center justify-center min-h-screen px-4">

<div className="w-full max-w-md text-center">
{/* Logo */}
<div className="mb-16">
<div className="w-10 h-10 mx-auto rounded-full mt-15">
<img src={logo} alt='logo' />
</div>
</div>
{/* Heading */}
<h1 className="text-3xl md:text-4xl font-bold mb-6">Sign up to start listening</h1>
{/* Email Input */}
<div className="text-left mb-4">
<label className="text-sm text-gray-300">Email</label>
<input
type="email"
placeholder=""
className="w-full mt-1 p-3 rounded-md bg-black border border-gray-700 focus:border-green-500 focus:outline-none"
/>
</div>
{/* Continue Button */}
<button className="w-full bg-green-500 hover:bg-green-600 transition rounded-full py-3 font-semibold text-black">
Next
</button>
{/* Divider */}
<div className="my-5 text-gray-400 text-sm">or</div>
{/* Social Buttons */}
<div className="space-y-3">
<button className="w-full border border-gray-600 hover:border-white rounded-full py-3 flex items-center justify-center gap-3">
📱 Continue with phone number
</button>
<button className="w-full border border-gray-600 hover:border-white rounded-full py-3 flex items-center justify-center gap-3">
🔵 Continue with Google
</button>
<button className="w-full border border-gray-600 hover:border-white rounded-full py-3 flex items-center justify-center gap-3">
🔷 Continue with Facebook
</button>
<button className="w-full border border-gray-600 hover:border-white rounded-full py-3 flex items-center justify-center gap-3">
🍎 Continue with Apple
</button>
</div>
{/* Signup */}
<p className="mt-8 text-gray-400 text-sm">Already have an Account ?</p>
<a href="/login-with-us" className="font-semibold hover:underline">
Login here
</a>

</div>
</body>
</>


)
}
