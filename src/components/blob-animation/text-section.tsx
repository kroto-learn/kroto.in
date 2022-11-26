import styled from "styled-components";

export default function TextSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-6xl">
        Learn to code properly
      </h1>
      <h2 className="text-base text-white sm:text-lg">
        Crawl out of the tutorial hell to learn to code the right way, by
        learning, building, and discussing.
      </h2>
    </div>
  );
}
