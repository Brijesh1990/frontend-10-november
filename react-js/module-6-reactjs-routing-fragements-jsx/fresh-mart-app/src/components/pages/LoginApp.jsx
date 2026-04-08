import React from 'react'

export default function LoginApp() {
  return (
    <el-dialog>
  <dialog
    id="dialog"
    aria-labelledby="dialog-title"
    className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
  >
    <el-dialog-backdrop className="fixed inset-0 bg-gray-950/100 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
    <div
      tabIndex={0}
      className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0 sm:-mt-48 md:-mt-36 lg:-mt-24"
    >
      <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
        <div className="px-4 pt-0 pb-2 sm:p-6 sm:pb-4  bg-white">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h2 className="sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase animate-bounce">
                {" "}
                Login here
              </h2>
              <div className="flex flex-col gap-y-2 mt-2">
                <label htmlFor="id" className="text-sm font-medium">
                  Email *
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
                <button className="bg-blue-500 sm:ml-0 md:ml-40  lg:ml-40 mt-10 rounded-4xl p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                  Save Changes 👤
                </button>
              </div>
              <div className="flex flex-col gap-y-2 mt-2">
                <b>
                  Don't have an account{" "}
                  <button
                    type="button"
                    command="show-modal"
                    commandfor="dialog"
                  >
                    Create Account
                  </button>
                </b>
              </div>
            </div>
          </div>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>

  )
}
