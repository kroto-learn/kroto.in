import {
  IoArrowDown,
  IoArrowForward,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../scroll-observer";

interface P {
  scrollToSolution: () => void;
}

export default function Hero({ scrollToSolution }: P) {
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
