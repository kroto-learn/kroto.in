import { IoArrowForward } from 'react-icons/io5'

export default function Signup() {
  return (
    <div className="bg-[#21252C] py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-[#282c34]" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-100/20"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#EF3054] px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-[#EF3054] brightness-125 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-[#EF3054] brightness-75 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
                  Take charge of your learning
                </h2>
                <p className="text-xl text-center text-white pt-4 sm:text-2xl mb-10">
                  Crawl out of the{' '}
                  <span className="text font font-extrabold opacity-100">
                    Tutorial Hell
                  </span>{' '}
                  and,{' '}
                  <h1 className="text-center gap-0 md:gap-2 mt-3 flex flex-col md:flex-row items-center justify-center w-full text-xl lg:text-2xl font-bold">
                    Learn <IoArrowForward className="rotate-90 md:rotate-0" />{' '}
                    Build <IoArrowForward className="rotate-90 md:rotate-0" />{' '}
                    Discuss
                  </h1>
                </p>
              </div>
              <form className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block opacity-90 w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 focus:outline-none focus:ring-0 focus:border focus:border-[#EF3054] hover:opacity-95 focus:opacity-100 placeholder-gray-500 shadow-sm transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button className="w-full flex gap-1 items-center rounded-md border border-transparent bg-[#Ef3054] px-5 py-3 text-base font-medium text-white shadow hover:scale-105 active:scale-100 hover:brightness-105 sm:px-10 transition-all">
                    Sign Up <IoArrowForward />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
