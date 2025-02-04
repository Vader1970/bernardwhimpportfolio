"use client";

import Image from "next/image";
// import { Button } from "@relume_io/relume-ui";
// import type { ButtonProps } from "@relume_io/relume-ui";
// import { RxChevronRight } from "react-icons/rx";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Section = {
  title: string;
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;

  logos: ImageProps[];
  //   buttons: ButtonProps[];
  image: ImageProps;
  sections: Section[];
};

export type Layout600Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout600 = (props: Layout600Props) => {
  const { tagline, heading, image, sections } = {
    ...Layout13Defaults,
    ...props,
  };

  return (
    <section id='relume' className='border-b border-white bg-brand-darkGrey px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20'>
          <div>
            <p className='mb-3 font-semibold md:mb-4'>{tagline}</p>
            <h2 className='text-white rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>{heading}</h2>
            <p className='mb-5 md:mb-6 md:text-md'>
              Chance Voight Investment Corporation
              <br />
              Founder/ CEO/ CIO
            </p>

            {/* Banner Section */}
            <div className='py-4'>
              <section className='flex w-screen max-w-full justify-end overflow-hidden'>
                <div className='flex justify-end'>
                  {Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className='grid animate-marquee-right auto-cols-max grid-flow-col items-center justify-around py-4'
                      >
                        {sections.map((section, idx) => (
                          <React.Fragment key={idx}>
                            <div className='flex items-center justify-center whitespace-nowrap px-8 text-center lg:text-left'>
                              <h1 className='text-white text-2xl font-bold md:text-2xl lg:text-2xl'>{section.title}</h1>
                            </div>
                            <div className='flex items-center justify-center h-full w-full overflow-hidden'>
                              <Image
                                src={section.image.src}
                                alt={section.image.alt || "Section Image"}
                                width={20}
                                height={20}
                                className='aspect-square object-contain'
                              />
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                </div>
              </section>
            </div>

            {/* <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, idx) => (
                <Button key={idx} {...button}>
                  {button.title}
                </Button>
              ))}
            </div> */}
          </div>

          <div className='relative w-full overflow-hidden rounded'>
            <Image
              src={image.src}
              alt={image.alt || "Hero Image"}
              width={600}
              height={600}
              quality={90}
              priority
              className='object-cover object-top w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout13Defaults: Props = {
  tagline: "A Trailblazer in NZ Hedge Funds",
  heading: "Bernard Whimp",

  logos: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 2",
    },
  ],
  //   buttons: [
  //     { title: "Button", variant: "secondary" },
  //     {
  //       title: "Learn More",
  //       variant: "link",
  //       size: "link",
  //       iconRight: <RxChevronRight />,
  //     },
  //   ],
  image: {
    src: "/images/bernard-hero-resize.jpg",
    alt: "Bernard Whimp",
  },
  sections: [
    {
      title: "Visionary",
      image: {
        src: "/images/globe.png",
        alt: "Globe",
      },
    },
    {
      title: "Inspiring Speaker",
      image: {
        src: "/images/globe.png",
        alt: "Globe",
      },
    },
    {
      title: "Professional Stock Picker",
      image: {
        src: "/images/globe.png",
        alt: "Globe",
      },
    },
    {
      title: "Chance Voight CEO",
      image: {
        src: "/images/globe.png",
        alt: "Globe",
      },
    },
  ],
};
