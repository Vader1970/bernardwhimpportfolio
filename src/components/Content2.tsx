"use client";

import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Props = {
  heading: string;
  image: ImageProps;
  children: React.ReactNode;
};

export type Content2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content2 = (props: Content2Props) => {
  const { heading, children, image } = {
    ...Content2Defaults,
    ...props,
  };

  return (
    <section
      id="relume"
      className="bg-brand-lightBlack text-white border-b border-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-1 lg:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="order-1 md:order-1 lg:order-2">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose">{children}</div>
          </div>
          <div className="relative h-[400px] w-full lg:h-full lg:min-h-full order-2 md:order-2 lg:order-1">
            <Image
              src={image.src}
              alt={image.alt || ""}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover object-top rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content2Defaults: Props = {
  heading: 'Described by some as "the god of stocks."',
  children: (
    <div>
      <p className="text-lg">
        Bernard Whimp is a visionary and an entrepreneur, some would refer to
        him as{" "}
        <strong className="text-white">&apos;the god of stocks&apos;</strong>.
        As an experienced professional stock picker, he is passionate,
        relentless, and strategic when it comes to the Australian stock market.
      </p>
      <p>
        He has an aptitude for the area of the market known as deep value, the
        natural home of independent thinkers. Combing the market for companies
        which look like they have had a problem, assessing the dynamics at play
        across the whole economy. He understands the public consciousness and
        looks for situations where pessimism has driven the share price to
        ridiculously low levels and where it is likely to bounce back, these are
        referred to as high probability situations.
      </p>
      <p>
        Chance Voight was established in 2018 with the ambition to develop a
        profitable New Zealand hedge fund. Prior to his re-orientation towards
        the share market over a decade ago, Bernard accumulated extensive
        experience as a financier and investor in real estate transactions as
        well as building financial and investment-related businesses. Chance
        Voight was founded as a result of Bernard&apos;s cumulative experience
        and an intensive decade of experience as a full-time professional share
        investor in the Australian stock market (ASX).
      </p>
      <p>
        Currently several years into its development, Chance Voight has
        established itself as a trusted institution and has experienced a steep
        upward trajectory towards its billion-dollar investment business
        ambitions.
      </p>
      <p>
        In addition to the Chance Voight success, Bernard is also possibly one
        of the most explanatory speakers on the stock market in New Zealand
        today. Those that have heard him speak at one of his seminars have been
        fascinated by the way he thinks about the stock market and his deep
        value style.
      </p>
    </div>
  ),
  image: {
    src: "/images/bernard-god-stocks.webp",
    alt: "Placeholder image",
  },

};
