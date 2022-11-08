import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useContext } from 'react'
import Image from 'next/image'
import logo from '../../public/kroto-logo.png'
import { SiBookstack, SiGoogleclassroom } from 'react-icons/si'
import { AiOutlineQuestion } from 'react-icons/ai'
import { ScrollContext } from '../scroll-observer'

const solutions = [
  {
    name: 'Go to Classroom',
    description:
      'From basics of React to building production apps with Next.js using TypeScript',
    href: '##',
    icon: SiGoogleclassroom,
  },
  {
    name: 'Courses',
    description: 'Create your own targeted content',
    href: '##',
    icon: SiBookstack,
  },
  {
    name: 'About Us',
    description: 'Keep track of your growth',
    href: '##',
    icon: AiOutlineQuestion,
  },
]

export function KrotoLogo() {
  return (
    <div className="flex">
      <div>
        <Image src={logo} width={512 / 13} height={512 / 13} alt="logo" />
      </div>
      <h2 className="text-3xl text-white font-bold -translate-x-1">roto</h2>
    </div>
  )
}

export default function Navbar() {
  const { scrollY } = useContext(ScrollContext)

  return (
    <div
      className={`fixed ${
        scrollY < 200
          ? 'top-0 right-0 left-0 my-2 mx-2 md:mx-10'
          : 'top-5 left-2 bg-[#21252C]/50 backdrop-blur-lg   rounded-lg right-2 sm:left-5 sm:right-5 md:left-10 md:right-10'
      }  z-50 p-2 transition-all`}
    >
      {/* Left Side */}
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex justify-between sm:justify-start items-center">
          <div className="">
            <KrotoLogo />
          </div>
          <div className="order-last px-5">
            <Menu />
          </div>
        </div>
        <div className="hidden sm:block order-last">
          <a href="#sign-up">
            <button className="group inline-flex items-center rounded-md bg-[#282c34]/50 backdrop-blur-sm  px-3 py-2 text-base text-white hover:scale-105 active:scale-100 font-bold hover:text-opacity-100 transition-all">
              Signup Now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export function Menu() {
  return (
    <div className="z-40 top-16 w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex hover:scale-105 active:scale-100 items-center rounded-md bg-[#282c34]/50 backdrop-blur-sm  px-3 py-2 text-base font-medium text-white text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Menu</span>
              <ChevronDownIcon
                className={`${open ? 'rotate-180' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[300px] -translate-x-52 sm:-translate-x-16 transform px-4">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-3 bg-[#21252C] p-5 pb-2 ">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 -my-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-[#282c34] focus:outline-none focus-visible:ring focus-visible:ring-[#EF3054] focus-visible:ring-opacity-50"
                      >
                        <div className="flex rounded-md h-10 w-10 bg-[#282c34] shrink-0 items-center justify-center text-white">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-white">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-[#21252C] p-2">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-[#282c34] focus:outline-none focus-visible:ring focus-visible:ring-[#EF3054] focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-lg font-bold text-white">
                          Signup Now
                        </span>
                      </span>
                      <span className="block text-sm text-gray-200">
                        Take control of your learning!
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
