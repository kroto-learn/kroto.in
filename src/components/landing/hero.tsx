import { IoArrowDown, IoArrowForward } from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../scroll-observer";
import styled from "styled-components";
import Background from "../blob-animation/background";
import Wave from "../blob-animation/wave";
import BlobAnimation from "../blob-animation/blob-animation";
import TextSection from "../blob-animation/text-section";
import Card from "../blob-animation/card";

interface P {
  scrollToSolution: any;
}

export default function Hero() {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <>
      <div
        ref={refContainer}
        style={{ transform: `translateY(-${progress * 20}vh)` }}
        className={`${
          progress === 0 ? "relative" : "sticky -z-50"
        } top-0  min-h-screen overflow-hidden`}
      >
        {/* <BlobAnimated /> */}
        <NewHero />

        <div className="flex items-center justify-center">
          <div className="absolute bottom-14 transition-all">
            <a
              // onClick={() => scrollToSolution()}
              className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 text-xl font-bold text-white transition-all hover:scale-110 active:scale-95 md:py-4 md:px-10 md:text-2xl"
            >
              <span className="transition-all">Learn How</span>
              <span className="animate-bounce transition-all">
                <IoArrowDown />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const BlobAnimated = () => {
  return (
    <Wrapper className="flex h-screen w-full flex-col items-center justify-evenly gap-8 p-4">
      <Background />
      <WaveWrapper>
        <Wave />
        <BlobAnimation />
      </WaveWrapper>
      <TextSection />
      <Card />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const WaveWrapper = styled.div`
  position: relative;
  top: 200px;
`;

export function OldHero({ scrollToSolution }: P) {
  const [width, setWidth] = useState("50%");

  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const width = `${(e.clientX / window.innerWidth) * 100}%`;
      setWidth(width);
    };

    if (!(refContainer && refContainer.current)) return;

    refContainer.current.addEventListener("mousemove", handleMouseMove);
    refContainer.current.addEventListener("touchmove", (e: any) =>
      handleMouseMove(e.touches[0])
    );

    return () => {
      if (!(refContainer && refContainer.current)) return;

      refContainer.current.removeEventListener("mousemove", handleMouseMove);
      refContainer.current.removeEventListener("touchmove", (e: any) =>
        handleMouseMove(e.touches[0])
      );
    };
  }, []);

  return (
    <>
      <div
        ref={refContainer}
        style={{ transform: `translateY(-${progress * 20}vh)` }}
        className={`${
          progress === 0 ? "relative" : "sticky -z-50"
        } top-0  min-h-screen overflow-hidden`}
      >
        <div
          style={{ left: width, transition: "width 0.1s ease" }}
          className="absolute top-2/3 z-30 h-full -translate-x-3 sm:hidden"
        >
          <img
            width={25}
            src="https://global-uploads.webflow.com/625593a881b8ebd169835ca5/6272dd170459e2734bd53502_handlebar.svg"
            alt=""
          />
        </div>
        <SVGBackground />
        <div className="absolute flex min-h-screen w-full flex-col items-center justify-center bg-[#282c34]">
          <div className="z-20 flex w-10/12 flex-1 flex-col items-center justify-center gap-16 text-center text-white md:w-9/12">
            <div className="grow"></div>
            <div className="grow">
              <h1 className="mb-10 text-4xl sm:text-6xl md:text-7xl">
                Are you{" "}
                <span className="text font font-extrabold opacity-100">
                  struggling
                </span>{" "}
                to learn to code
              </h1>
              <h1 className="mb-10 text-xl sm:text-4xl">
                Crawl out of the{" "}
                <span className="text font font-extrabold opacity-100">
                  Tutorial Hell
                </span>{" "}
                and,{" "}
                <h1 className="mt-3 flex w-full flex-row items-center justify-center gap-1 text-center text-2xl font-bold md:gap-2 lg:text-4xl">
                  Learn <IoArrowForward /> Build <IoArrowForward /> Discuss
                </h1>
              </h1>
            </div>
            <div className="mb-10 grow-0 transition-all md:mb-8">
              <a
                onClick={() => scrollToSolution()}
                className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 text-xl font-bold text-white transition-all hover:scale-110 active:scale-95 md:py-4 md:px-10 md:text-2xl"
              >
                <span className="transition-all">Learn How</span>
                <span className="animate-bounce transition-all">
                  <IoArrowDown />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Extra Background */}
        <div
          style={{ width: width, transition: "width 0.1s ease" }}
          className="absolute h-full bg-[#ef3054]"
        ></div>
      </div>
    </>
  );
}

export function NewHero() {
  return (
    <div className="isolate">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 hidden transform-gpu animate-blob overflow-hidden blur-3xl sm:top-[-30rem]">
        <svg
          className="relative left-[calc(50%-8rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex w-full translate-y-24 rotate-90 items-center justify-center gap-5 sm:translate-y-56 sm:rotate-0">
        <div className="absolute left-96 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-50 mix-blend-multiply blur-3xl filter"></div>
        <div className="top-42 blur-3l absolute right-80 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-50 mix-blend-multiply blur-3xl filter"></div>
        <div className="absoulte top-64 m-10 h-72 w-72 translate-x-10 space-y-4 rounded-full bg-[#4C496C]  mix-blend-multiply blur-3xl filter"></div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-white/20 transition-all hover:ring-white/50">
                  <span className="text-white">
                    Title of the latest event goes here{" "}
                    <a href="#" className="font-semibold text-[#ef3054]">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="mt-10 text-5xl font-bold tracking-tight sm:mt-0 sm:text-center sm:text-7xl">
                  This is the right way to <br />
                  <span className="text-[#ef3054]">learn to code</span>
                </h1>
                {/* <p className="mt-6 text-lg leading-8 text-white/80 sm:text-center">
                  Crawl out of the tutorial hell to learn to code the right way,
                  by learning, building, and discussing.
                </p> */}
                <div className="flex items-center justify-center">
                  <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                    {/* <p className="text-base font-medium text-gray-900">
                      Sign up to get notified when it’s ready.
                    </p> */}
                    <form className="mt-8 sm:mx-auto sm:flex sm:max-w-xl">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="cta-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="cta-email"
                          type="email"
                          className="block w-full rounded-md border border-transparent px-5 py-2 text-base text-gray-900 placeholder-gray-500 opacity-90 shadow-sm transition-all hover:opacity-95 focus:border focus:border-[#EF3054] focus:opacity-100 focus:outline-none focus:ring-0"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button className="flex w-full items-center justify-center gap-1 rounded-md border border-transparent bg-[#Ef3054] px-2 py-2 text-base font-medium text-white shadow transition-all hover:scale-105 hover:brightness-105 active:scale-100 sm:px-10">
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <p className="mt-3 text-sm text-white/50">
                      We care about the protection of your data. Read our{" "}
                      <a
                        href="#"
                        className="font-medium text-[#ef3054] underline"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 hidden transform-gpu animate-blob overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const SVGBackground = () => (
  <div className="relative z-10 mx-auto h-full max-w-7xl">
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
);
