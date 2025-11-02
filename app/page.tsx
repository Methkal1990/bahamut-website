import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-gray-100 font-sans p-6 h-full">
      <main className="relative flex h-full w-full max-w-full rounded-2xl bg-white shadow-lg flex-col items-center justify-between px-3 py-6">
        {/* Top section with logo and heading */}
        <div className="flex flex-col items-center justify-start flex-1 min-h-0 w-full">
          {/* Logo */}
          <div className="mb-6 shrink-0 border border-gray-200 rounded-lg p-0 sm:p-0.5 md:p-1">
            <Image
              src="/logo.png"
              alt="Bahamut Logo"
              width={64}
              height={64}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-center font-extrabold leading-tight tracking-[-0.02em] text-black shrink-0 text-4xl xl:text-5xl px-2">
            We build AI native software,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            agents and workflows
          </h1>

          {/* Call-to-Action Links */}
          <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 flex flex-row items-center justify-center gap-3 shrink-0">
            <a
              href="https://cal.com/bahamut/20-minutes-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 rounded-full bg-black px-8 text-lg font-medium text-white transition-colors hover:bg-gray-900 whitespace-nowrap inline-flex items-center justify-center"
            >
              Book an Intro
            </a>
            <a
              href="/work"
              className="flex h-12 items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-gray-300 bg-white px-3 sm:px-6 md:px-8 text-lg font-medium text-black transition-colors hover:bg-gray-50 whitespace-nowrap"
            >
              View Work
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        <div className="pb-3">
          <p className="text-center text-base font-extrabold text-gray-800">
            Trusted by startups and industry leaders.
          </p>
        </div>
      </main>
    </div>
  );
}
