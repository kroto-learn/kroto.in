import { IoArrowForward } from "react-icons/io5";

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
                  className="text-[#EF3054] text-opacity-40 brightness-125"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-[#EF3054] text-opacity-40 brightness-75"
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
                <div className="mb-10 pt-4 text-center text-xl text-white sm:text-2xl">
                  Crawl out of the{" "}
                  <span className="text font font-extrabold opacity-100">
                    Tutorial Hell
                  </span>{" "}
                  and,{" "}
                  <h1 className="mt-3 flex w-full flex-row items-center justify-center gap-1 text-center text-lg font-bold md:gap-2 lg:text-xl">
                    Learn <IoArrowForward /> Build <IoArrowForward /> Discuss
                  </h1>
                </div>
              </div>
              <form className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 opacity-90 shadow-sm transition-all hover:opacity-95 focus:border focus:border-[#EF3054] focus:opacity-100 focus:outline-none focus:ring-0"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button className="flex w-full items-center justify-center gap-1 rounded-md border border-transparent bg-[#Ef3054] px-5 py-3 text-base font-medium text-white shadow transition-all hover:scale-105 hover:brightness-105 active:scale-100 sm:px-10">
                    Sign Up <IoArrowForward />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
