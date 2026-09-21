import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
   <>
   
   
<header class=" sticky w-full z-20 top-0 start-0 text-white">
  <nav class="bg-blue-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
              <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
              <Link to={"/signup"} class="text-sm  text-body hover:underline">Signup</Link>
              <Link to={"/login"} class="text-sm font-medium text-fg-brand hover:underline">Login</Link>
          </div>
      </div>
  </nav>
  <nav class="bg-blue-900 border-y border-default border-default text-white">
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
              <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  <li>
                      <a href="#" class="text-heading hover:underline" aria-current="page">Home</a>
                  </li>
                  <li>
                      <a href="#" class="text-heading hover:underline">Company</a>
                  </li>
                  <li>
                      <a href="#" class="text-heading hover:underline">Team</a>
                  </li>
                  <li>
                      <a href="#" class="text-heading hover:underline">Features</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</header>

   </>
  )
}
