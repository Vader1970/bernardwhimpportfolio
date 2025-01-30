import type { Header9Props } from "@/constants/types/header9";
import { Header9Defaults } from "@/constants/types/header9";
import Image from "next/image";

export const Header9 = (props: Partial<Header9Props>) => {
  const { heading, image, title, subTitle } = {
    ...Header9Defaults,
    ...props,
  };

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
          sizes="100vw"
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
            <div>
              <p className="text-left text-xl text-white sm:text-right">
                Visionary
                <br />
                Inspiring Speaker
                <br />
                Professinal Stock Picker
                <br />
                Chance Voight CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
