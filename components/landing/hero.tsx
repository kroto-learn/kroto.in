import { IoArrowForwardOutline } from 'react-icons/io5'
import Image from 'next/image'
import logo from '../../public/kroto-logo.png'

export default function Hero() {
  return (
    <div className="overflow-hidden bg-split-white-black">
      <SVGBackground />
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div
          className={`flex-grow-0  pt-10 transition-opacity drop-shadow-[0_3px_1px_rgba(0,0,0,0.2)]`}
        >
          <Image src={logo} width={512 / 9} height={512 / 9} alt="logo" />
        </div>
        <div className="flex w-8/12 gap-16 flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_3px_1px_rgba(0,0,0,0.2)]">
          <h1 className="text-6xl font-semibold">
            Are you <span className="text font font-extrabold">struggling</span>{' '}
            learn to code through video courses
          </h1>
          <h3 className="text-4xl font-bold ">I understand you pain.</h3>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#fact-section"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-2 text-base font-medium text-[#EF3054] hover:bg-gray-50 md:py-4 md:px-10 md:text-lg transition-all"
            >
              Here's the Solution
              <span className="pl-2 transition-all">
                <IoArrowForwardOutline />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SVGBackground = () => (
  <div className="relative h-full translate-y-80 max-w-sm md:max-w-lg -z-10 mx-auto">
    <svg
      className="absolute right-full transform translate-x-1/4 lg:translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
            className={'text-gray-200'}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={784}
        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
      />
    </svg>
    <svg
      className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
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
            className={'text-[#282c3440]'}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={784}
        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      />
    </svg>
  </div>
)
