import React from 'react'
import HeaderApp from '../HeaderApp'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'
export default function ContactApp() {
  return (
   <>
      <HeaderApp />
      <NavbarApp />
      <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    {/* Section Header */}
    <div className="mb-14 text-center">
      <h2 className="text-5xl font-bold text-gray-800 animate-bounce">
        Contact With Us!
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        We’d love to hear from you. Please reach out with any questions.
      </p>
    </div>
    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Office Info + Map */}
      <div className="space-y-6">
        {/* Office Info */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Office
          </h3>
          <p className="text-gray-600">
            3rd Floor, Tech Park,
            <br />
            SG Highway, Ahmedabad,
            <br />
            Gujarat, India
          </p>
          <p className="mt-4 text-gray-600">
            📞 <strong>Phone:</strong> +91 98765 43210
            <br />
            📧 <strong>Email:</strong> info@example.com
          </p>
        </div>
        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-72"
            src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Send Us a Message
        </h3>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
<FooterApp />
</>

  )
}
