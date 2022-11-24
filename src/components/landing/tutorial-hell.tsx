import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { SVGBackground } from "./hero";

interface P {
  scrollToSolution: () => void;
}

export default function TutorialHell({ scrollToSolution }: P) {
  return (
    <div className="relative min-h-screen bg-[#21252C] py-16">
      <div
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-[#21252C] lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl bg-[#21252C] lg:bg-transparent lg:px-0">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div
              className="absolute inset-x-0 h-1/2 bg-[#282c34] lg:hidden"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="rounded-3xl object-cover object-center shadow-md"
                  src="https://user-images.githubusercontent.com/69139607/200502628-e73df4ff-7539-4760-b3b2-d7f419604ef7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-[#282c34] shadow-lg lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
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
                  So, What is a{" "}
                  <span className="font-extrabold">Tutorial Hell?</span>
                </h2>
                <blockquote className="flex flex-col gap-1 rounded-md border-l-4 border-white px-4 text-lg text-white">
                  <div>
                    You <span className="font-bold uppercase">can&apos;t</span>{" "}
                    learn to code by watching videos
                  </div>
                  <span className="font-bold">Fireship.io</span>
                </blockquote>
                <p className="text-2xl text-white">
                  When learning by watching videos, we end up{" "}
                  <span className="font-extrabold">copy-pasting the code</span>{" "}
                  from the video.
                </p>
                <p className="text-2xl text-white">
                  This copy-pasting is done by actively{" "}
                  <span className="font-extrabold">
                    typing out charachter to charachter, making us believe that
                    we&apos;re actually coding
                  </span>
                </p>
                <a
                  className="z-40 -mx-10 flex max-w-xs cursor-pointer flex-row items-center justify-center gap-2 text-xl font-bold text-white transition-all hover:scale-110 active:scale-95 md:text-2xl"
                  onClick={() => scrollToSolution()}
                >
                  Here&apos;s the Solution
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
  );
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const DetailLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <div>
      <Link legacyBehavior href={href}>
        <a
          className="text-black underline decoration-1 underline-offset-8"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </Link>
    </div>
  );
};
