import { IoArrowDown, IoArrowForwardOutline } from 'react-icons/io5'
import Image from 'next/image'
import logo from '../../public/kroto-logo.png'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [width, setWidth] = useState('50%')

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const width = `${(e.clientX / window.innerWidth) * 100}%`
      setWidth(width)
    }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', (e: any) =>
      handleMouseMove(e.touches[0])
    )

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  console.log(width)

  return (
    <>
      <div className="flex bg-[#EF3054] flex-col items-center justify-center min-h-screen w-full  absolute">
        <div className="flex-grow-0 z-10 pt-5 transition-opacity ">
          <Image src={logo} width={512 / 9} height={512 / 9} alt="logo" />
        </div>
        <div className="flex z-10 w-full md:w-8/12 gap-16 flex-1 flex-col items-center justify-center text-center text-white">
          <div className="">
            <h1 className="text-4xl sm:text-6xl md:text-8xl mb-10 -mt-10">
              Are you{' '}
              <span className="text font font-extrabold">struggling</span> to
              learn to code
            </h1>
          </div>
          <div className="transition-all">
            <a
              href="mailto:kamal@kroto.in"
              className="flex flex-col w-full items-center justify-center text-2xl font-bold gap-2 text-white hover:scale-110 active:scale-95 md:py-4 md:px-10 md:text-4xl transition-all"
            >
              <span className="transition-all">Here&apos;s the Solution</span>
              <span className="transition-all animate-bounce">
                <IoArrowDown />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Extra Background */}
      <div
        style={{ width: width }}
        className="flex bg-[#086788] items-center justify-center min-h-screen absolute "
      ></div>
    </>
  )
}

export const SVGBackground = () => (
  //   <div
  //     className="hidden overflow-hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
  //     aria-hidden="true"
  //   >
  <div className="relative mx-auto h-full max-w-7xl">
    <svg
      className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
      width="404"
      height="784"
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-gray-200/20"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width="404"
        height="784"
        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
      />
    </svg>
    <svg
      className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
      width="404"
      height="784"
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-gray-200/20"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width="404"
        height="784"
        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      />
    </svg>
  </div>
  //   </div>
)
