import {
  IoArrowDown,
  IoArrowForward,
  IoArrowForwardOutline,
} from 'react-icons/io5'
import { useContext, useEffect, useRef, useState } from 'react'
import { ScrollContext } from '../scroll-observer'

interface P {
  scrollToSolution: () => void
}

export default function Hero({ scrollToSolution }: P) {
  const [width, setWidth] = useState('50%')

  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0
  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

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

  return (
    <>
      <div
        style={{ left: width }}
        className="absolute sm:hidden -translate-x-3 z-50 top-2/3"
      >
        <img
          width={25}
          src="https://global-uploads.webflow.com/625593a881b8ebd169835ca5/6272dd170459e2734bd53502_handlebar.svg"
          alt=""
        />
      </div>
      <div
        ref={refContainer}
        style={{ transform: `translateY(-${progress * 20}vh)` }}
        className={`${
          progress === 0 ? 'relative' : 'sticky -z-50'
        } top-0  overflow-hidden min-h-screen`}
      >
        <SVGBackground />
        {/* Scroll Button */}
        <div className="flex bg-[#282c34] flex-col items-center justify-center min-h-screen w-full absolute">
          <div className="flex z-20 w-10/12 md:w-9/12 gap-16 flex-1 flex-col items-center justify-center text-center text-white">
            <div className="grow"></div>
            <div className="grow">
              <h1 className="text-4xl sm:text-6xl md:text-7xl mb-10">
                Are you{' '}
                <span className="text font font-extrabold opacity-100">
                  struggling
                </span>{' '}
                to learn to code
              </h1>
              <h1 className="text-xl sm:text-4xl mb-10">
                Crawl out of the{' '}
                <span className="text font font-extrabold opacity-100">
                  Tutorial Hell
                </span>{' '}
                and,{' '}
                <h1 className="text-center gap-1 md:gap-2 mt-3 flex flex-row items-center justify-center w-full text-2xl lg:text-4xl font-bold">
                  Learn <IoArrowForward /> Build <IoArrowForward /> Discuss
                </h1>
              </h1>
            </div>
            <div className="grow-0 mb-10 md:mb-8 transition-all">
              <a
                onClick={() => scrollToSolution()}
                className="flex flex-col w-full cursor-pointer items-center justify-center text-xl font-bold gap-2 text-white hover:scale-110 active:scale-95 md:py-4 md:px-10 md:text-2xl transition-all"
              >
                <span className="transition-all">Learn How</span>
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
          className="flex bg-[#ef3054] items-center justify-center min-h-screen absolute"
        ></div>
      </div>
    </>
  )
}

export const SVGBackground = () => (
  <div className="relative mx-auto h-full z-10 max-w-7xl">
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
            className="text-gray-100/10"
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
            className="text-gray-100/10"
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
)
