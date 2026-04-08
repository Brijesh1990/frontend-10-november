import React from 'react'
import HeaderApp from '../HeaderApp'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'
import LoginApp from './LoginApp'
export default function RegisterApp() {
  return (
  <>
    <HeaderApp />
    <NavbarApp />
    <div className="sm:w-full md-w-full lg:w-1/3 p-15 mt-20 bg-white mx-auto rounded-4xl shadow-2xl mb-10">
  <h2 className="sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase animate-bounce">
    {" "}
    register here
  </h2>
  <div className="flex flex-col gap-y-2 mt-2">
    <label htmlFor="id" className="text-sm font-medium">
      Name *
    </label>
    <input
      type="text"
      placeholder="Name *"
      className="form-control p-2 bg-gray-400 rounded-xl"
    />
  </div>
  <div className="flex flex-col gap-y-2 mt-2">
    <label htmlFor="id" className="text-sm font-medium">
      Password *
    </label>
    <input
      type="password"
      placeholder="Password *"
      className="form-control p-2 bg-gray-400 rounded-xl"
    />
  </div>
  <div className="flex flex-col gap-y-2 mt-2">
    <label htmlFor="id" className="text-sm font-medium">
      Phone *
    </label>
    <input
      type="text"
      placeholder="Phone *"
      className="form-control p-2 bg-gray-400 rounded-xl"
    />
  </div>
  <div className="flex flex-col gap-y-2 mt-2">
    <label htmlFor="id" className="text-sm font-medium">
      Address *
    </label>
    <input
      type="text"
      placeholder="Address *"
      className="form-control p-2 bg-gray-400 rounded-xl"
    />
  </div>
  <div className="flex flex-col gap-y-2 mt-2">
    <button className="bg-blue-500 sm:ml-0 md:ml-40  lg:ml-40 mt-10 rounded-4xl p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
      Save Changes 👤
    </button>
  </div>
  <div className="flex flex-col gap-y-2 mt-2">
    <b>
      Already have an account{" "}
      <button type="button" command="show-modal" commandfor="dialog">
        Login here
      </button>
    </b>
  </div>
</div>
<FooterApp />
<LoginApp />
</>

  )
}
