import type { Header9Props } from "@/constants/types/header9";
import { Header9Defaults } from "@/constants/types/header9";
import Image from "next/image";

interface MarqueeProps {
  headings: string[];
}

const MarqueeBanner = ({ headings }: MarqueeProps) => (
  <div className="relative flex w-full overflow-hidden">
    {[...Array(2)].map((_, i) => (
      <div
        key={i}
        className="animate-marquee-left flex w-max shrink-0 items-center gap-6 whitespace-nowrap"
        aria-hidden={i === 1 ? "true" : undefined}
      >
        {headings.map((heading, headingIndex) => (
          <div key={headingIndex} className="flex items-center">
            <p className="text-md font-bold text-white md:text-3xl">
              {heading}
            </p>

            {/* Add circle after EVERY heading */}
            <div className="mr-3 ml-10 h-2 w-2 rounded-full bg-white md:h-3 md:w-3"></div>
          </div>
        ))}

        {/* Spacer to prevent overlap between marquee loops */}
        <div className="w-2" aria-hidden="true"></div>
      </div>
    ))}
  </div>
);

export const Header9 = (props: Partial<Header9Props>) => {
  const { heading, image, title, subTitle } = {
    ...Header9Defaults,
    ...props,
  };

  const marqueeHeadings = [
    "Visionary",
    "Inspiring Speaker",
    "Professional Stock Picker",
    "Chance Voight, CEO",
  ];

  return (
    <section
      id="relume"
      className="flex h-svh min-h-svh flex-col border-b border-white"
    >
      <div className="relative flex-1 border-b border-white">
        <Image
          src={image.src}
          alt={image.alt || "image"}
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="bg-brand-darkGrey px-[5%]">
        <div className="container">
          <div className="grid grid-rows-1 items-center gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-6xl font-bold text-white md:text-9xl lg:text-10xl">
                {heading}
              </h1>
              <h2 className="text-white">
                {title}
                <br />
                {subTitle}
              </h2>
            </div>
            <div className="flex w-full justify-end overflow-hidden">
              <MarqueeBanner headings={marqueeHeadings} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
