import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'
import { SVGBackground } from './hero'

export default function TutorialHell() {
  return (
    <div className="relative min-h-screen bg-[#282c34] lg:bg-white py-16">
      <div
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl bg-[#282c34] lg:bg-transparent lg:px-0">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div
              className="absolute inset-x-0 h-1/2 bg-[#282c34] lg:hidden"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="rounded-3xl object-cover object-center shadow-2xl"
                  src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-[#282c34] lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <SVGBackground />
            </div>
            <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-2xl sm:py-16 sm:px-4 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <div className="m-10 flex flex-col gap-10">
                <h2
                  className="text-4xl tracking-tight text-white"
                  id="join-heading"
                >
                  So, What is a{' '}
                  <span className="font-extrabold">Tutorial Hell?</span>
                </h2>
                <blockquote className="flex gap-1 flex-col border-l-4 px-4 rounded-md border-white text-lg text-white">
                  <div>
                    You <span className="uppercase font-bold">can't</span> learn
                    to code by watching videos
                  </div>
                  <span className="font-bold">Fireship.io</span>
                </blockquote>
                <p className="text-2xl text-white">
                  When learning by watching videos, we end up{' '}
                  <span className="font-extrabold">copy-pasting the code</span>{' '}
                  from the video.
                </p>
                <p className="text-2xl text-white">
                  This copy-pasting is done by actively{' '}
                  <span className="font-extrabold">
                    typing out charachter to charachter, making us believe that
                    we're actually coding
                  </span>
                </p>
                <a
                  className="flex flex-row max-w-xs -mx-10 z-40 items-center justify-center text-xl font-bold gap-2 text-white hover:scale-110 active:scale-95 md:text-2xl transition-all"
                  href="#solution-section"
                >
                  Here's the Solution
                  <span>
                    <IoArrowForward />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface LinkProps {
  href: string
  children: React.ReactNode
}

export const DetailLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link legacyBehavior href={href}>
      <a
        className="text-black underline decoration-1 underline-offset-8"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </Link>
  )
}
