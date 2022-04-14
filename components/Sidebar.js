import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const topLink = [
    { link: '/home', label: 'Home' },
    { link: '/dashboard', label: 'Dashboard' },
  ]
  const sideLink = [
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' },
  ]
  return (
    <>
      <div
        className={`min-h-screen  flex flex-col flex-auto flex-shrink-0 antialiased bg-white`}
      >
        <div className="">
          <div className="bg-[#040404E0] flex items-center justify-end  py-6 px-8 space-x-6">
            <div className="text-white font-bold mr-auto text-xl">
              Optcoder
            </div>
            {topLink.map((e) => (
              <div className="font-bold text-white">
                <Link href={e.link} passHref>
                  {e.label}
                </Link>
              </div>
            ))}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden inline-flex items-center justify-center text-white"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <div className="bg-[#040404E0] hidden md:fixed md:flex md:flex-col w-64 md:h-full">
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <ul className="flex flex-col  space-y-1">
                {sideLink.map((e) => (
                  <li>
                    <div className="px-2">
                      <span className="text-md tracking-wide text-center">
                        <Link href={e.link}>
                          <a
                            className={
                              router.pathname == `${e.link}`
                                ? 'transition duration-400 ease-in bg-white text-[#040404E0] rounded-md relative flex flex-row items-center justify-center h-11 focus:outline-none font-bold'
                                : 'transition duration-400 ease-in text-white hover:bg-white hover:text-[#040404E0] rounded-md relative flex flex-row items-center justify-center h-11 focus:outline-none font-bold'
                            }
                          >
                            {e.label}
                          </a>
                        </Link>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {/* place here */}
        {/* mobile menu */}
        <div className="mt-1">
          <div className="m-1 md:pl-64 ">{children}</div>
        </div>
      </div>
    </>
  )
}