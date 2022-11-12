import {
  IoArrowForward,
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoReact,
} from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { GiCheckboxTree, GiWireframeGlobe } from 'react-icons/gi'
import { AiOutlineFileSync } from 'react-icons/ai'
import Link from 'next/link'

const reactFeatures = [
  {
    id: 1,
    name: 'Fundamentals of React',
    description:
      'From what virtual DOM is, to making full scale reactive application',
    icon: IoLogoReact,
  },
  {
    id: 2,
    name: 'From Firebase to Firestore, the whole thing',
    description:
      'React? well, after learning Firebase you will be able to build full-stack application on the frontend',
    icon: IoLogoFirebase,
  },
  {
    id: 3,
    name: 'Building Production Applications with Next.js',
    description:
      'Next.js will allow us to build full-scale production level application with SSR, SSG and more',
    icon: TbBrandNextjs,
  },
]

const introWebFeatures = [
  {
    id: 1,
    name: 'Introduction & What HTML is',
    description:
      'Understand how the internet works, and why HTML is the base of the internet',
    icon: GiWireframeGlobe,
  },
  {
    id: 2,
    name: 'CSS huh?',
    description:
      'From background-color to grids and mixins, learn Cascading Style Sheets',
    icon: IoLogoCss3,
  },
  {
    id: 3,
    name: 'Building a quick notes app',
    description:
      'Learn the basics of JavaScript by integrating it in a quick notes website',
    icon: IoLogoJavascript,
  },
]

const jsDomFeatures = [
  {
    id: 1,
    name: 'The Document Object Model',
    description: 'Understanding the layer between HTML and JavaScript',
    icon: GiCheckboxTree,
  },
  {
    id: 2,
    name: 'How JavaScript works',
    description:
      'From hoisting to the callback functions, understand how JavaScript works',
    icon: IoLogoJavascript,
  },
  {
    id: 3,
    name: 'Asynchronous JavaScript',
    description:
      'I am returning a promise, that you will be able to resolve the try',
    icon: AiOutlineFileSync,
  },
]

export default function Courses() {
  return (
    <div className="overflow-hidden bg-[#21252c] py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-6xl">
            Courses we offer
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              React and Beyond
            </h3>
            {/* <p className="mt-3 text-lg text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p> */}

            <dl className="mt-10 space-y-10">
              {reactFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#ef3054] text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-white">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white/80">
                    {item.description}
                  </dd>
                </div>
              ))}

              <div className="flex w-full items-center">
                <a href="#sign-up">
                  <button className="group text-sm inline-flex gap-1justify-center items-center rounded-md bg-[#EF3054] backdrop-blur-sm shadow px-8 py-2 sm:text-xl text-white font-medium hover:scale-105 active:scale-100 hover:text-opacity-100 transition-all">
                    Signup Now <IoArrowForward />
                  </button>
                </a>
                <Link href="/courses/react-and-beyond">
                  <button className="group text-sm underline underline-offset-4 inline-flex gap-1 justify-center items-center rounded-md text-[#EF3054] px-8 py-2 sm:text-2xl font-medium hover:scale-105 active:scale-100 hover:text-opacity-100 transition-all">
                    Learn More
                  </button>
                </Link>
              </div>
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src="https://user-images.githubusercontent.com/69139607/200847803-126df1c8-ce9f-4808-938a-c89caebf1e1d.png"
              alt=""
            />
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            height={584}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Advanced JavaScript and DOM
              </h3>
              {/* <p className="mt-3 text-lg text-white/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p> */}

              <dl className="mt-10 space-y-10">
                {jsDomFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#ef3054] text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-white">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-white/80">
                      {item.description}
                    </dd>
                  </div>
                ))}

                <div className="flex w-full items-center">
                  <a href="#sign-up">
                    <button className="group text-sm inline-flex gap-1justify-center items-center rounded-md bg-[#EF3054] backdrop-blur-sm shadow px-8 py-2 sm:text-xl text-white font-medium hover:scale-105 active:scale-100 hover:text-opacity-100 transition-all">
                      Signup Now <IoArrowForward />
                    </button>
                  </a>
                  <Link href="/courses/async-js-dom">
                    <button className="group text-sm underline underline-offset-4 inline-flex gap-1 justify-center items-center rounded-md text-[#EF3054] px-8 py-2 sm:text-2xl font-medium hover:scale-105 active:scale-100 hover:text-opacity-100 transition-all">
                      Learn More
                    </button>
                  </Link>
                </div>
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={400}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                      className="text-gray-100/50"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={400}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src="https://user-images.githubusercontent.com/69139607/200853337-9e284982-7395-4305-adb8-3dec1b220d51.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <svg
            className="absolute left-full hidden -translate-x-1/2 translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>
        </div>

        <div className="relative mt-12 lg:mt-40 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Introduciton to Web Development
            </h3>
            <dl className="mt-10 space-y-10">
              {introWebFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#ef3054] text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-white">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white/80">
                    {item.description}
                  </dd>
                </div>
              ))}

              <div className="flex w-full items-center">
                <a href="#sign-up">
                  <button className="group text-sm inline-flex gap-1justify-center items-center rounded-md bg-[#EF3054] backdrop-blur-sm shadow px-8 py-2 sm:text-xl text-white font-medium hover:scale-105 active:scale-100 hover:text-opacity-100 transition-all">
                    Signup Now <IoArrowForward />
                  </button>
                </a>
                <Link href="/courses/intro-web-dev">
                  <button className="group text-sm underline underline-offset-4 inline-flex gap-1 justify-center items-center rounded-md text-[#EF3054] px-8 py-2 sm:text-2xl font-medium hover:scale-105 active:scale-100 hover:text-opacity-100 transition-all">
                    Learn More
                  </button>
                </Link>
              </div>
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src="https://user-images.githubusercontent.com/69139607/200854685-cc40f13b-23ae-46ec-a2b8-8ee503039293.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
