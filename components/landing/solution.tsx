import React, { useContext, useRef } from 'react'
import { ScrollContext } from '../scroll-observer'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Stats: React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 4
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
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div
      ref={refContainer}
      id="solution-section"
      className="bg-[#282c34] text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-10 py-24  text-4xl font-semibold md:py-28 md:text-6xl lg:px-20 lg:py-36 lg:text-7xl">
        <div className="mb-20 text-left text-5xl lg:text-8xl">The Solution</div>
        <div className="flex flex-col gap-10">
          <span style={{ opacity: opacityForBlock(progress, 0) }}>
            <h1 className=" font-medium">{`It's about "You" learning and not "Me" teaching.`}</h1>
          </span>
          <span style={{ opacity: opacityForBlock(progress, 1) }}>
            <h1 className=" font-medium">{`It is all about learning the cocepts by building something interactively, 1-1 with the mentor`}</h1>
          </span>
          <span style={{ opacity: opacityForBlock(progress, 2) }}>
            <h1 className=" font-medium">{`Assignments help you solidify the knowledge that you gained and improves your problem solving ability`}</h1>
          </span>
          <span style={{ opacity: opacityForBlock(progress, 3) }}>
            <h1 className=" font-medium">{`Discussing these assignments in the community helps you think in ways that you haven't imagined before`}</h1>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Stats
