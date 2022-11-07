import Link from 'next/link'

export default function TutorialHell() {
  return (
    <section
      id="solution-section"
      className="bg-white text-[#EF3054] py-20 text-3xl md:text-4xl"
    >
      <div className="container mx-auto px-11">
        <h2 className="mx-auto mb-6 max-w-5xl text-6xl font-semibold xl:text-7xl">
          So, What Is a <span className="font-bold">Tutorial Hell?</span>
        </h2>
        <p className="mx-auto my-10 max-w-5xl text-3xl">
          <blockquote className="border-l-4 rounded-md border-[#EF3054] p-4">
            You can't learn to code by watching videos.
          </blockquote>
        </p>
      </div>
    </section>
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
