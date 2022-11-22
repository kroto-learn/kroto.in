import React, { useContext, useRef } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { ScrollContext } from '../scroll-observer'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const NUM_OF_PAGES = 5

const Stats: React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  let progress = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2

    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight
    progress = Math.min(
      NUM_OF_PAGES - 0.5,
      Math.max(0.5, percentY * NUM_OF_PAGES)
    )
  }

  return (
    <div
      ref={refContainer}
      id="solution-section"
      className="bg-[#21252C] text-white"
    >
      <div className="mx-auto text-center sm:text-left flex min-h-screen max-w-7xl flex-col items-start justify-center px-10 py-24 font-thin text-5xl md:py-28 md:text-5xl lg:py-36 lg:text-8xl">
        <div className="flex flex-col gap-10">
          <span
            style={{ opacity: opacityForBlock(progress, 0) }}
            className="transition-opacity"
          >
            <h1>
              It&apos;s about{' '}
              <span className="uppercase font-semibold">You </span>
              learning and not me teaching
            </h1>
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 1) }}
            className="transition-opacity"
          >
            <h1>
              <span className="font-bold">Building </span>
              something interactively, 1-1 with the mentor makes you{' '}
              <span className="font-semibold">really write code</span>
            </h1>
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 2) }}
            className="transition-opacity"
          >
            <h1>
              <span className="font-bold">Assignments</span> help you solidify
              the knowledge that you gained and{' '}
              <span className="font-semibold"> improves problem solving</span>{' '}
              ability
            </h1>
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 3) }}
            className="transition-opacity"
          >
            <h1>
              <span className="font-bold">Having Problems? </span>
              get your doubts cleared <span className="font-semibold">
                1-1
              </span>{' '}
              with our{' '}
              <span className="font-semibold">doubt clearing team</span>
            </h1>
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 4) }}
            className="transition-opacity"
          >
            <h1>
              <span className="font-bold">Disucssions</span> in the community
              makes you think in ways that you{' '}
              <span className="font-semibold">
                haven&apos;t imagined before
              </span>
            </h1>
          </span>
          {/* <span
            style={{ opacity: opacityForBlock(progress, 4) }}
            className="transition-opacity"
          >
            <h1 className="text-center gap-10 flex flex-col md:flex-row items-center justify-center w-full text-6xl lg:text-7xl font-bold my-20">
              Learn <IoArrowForward className="rotate-90 sm:rotate-0" /> Build{' '}
              <IoArrowForward className="rotate-90 sm:rotate-0" /> Discuss
            </h1>
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default Stats
