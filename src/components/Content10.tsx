"use client";

import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image?: ImageProps;
  video?: string;
};

export const Content10 = ({
  image = Content10Defaults.image,
  video = Content10Defaults.video,
}: Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);

  return (
    <section
      id="relume"
      className="bg-brand-lightBlack border-b border-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative flex w-full items-center justify-center">
              {image?.src && (
                <Image
                  src={image.src}
                  alt={image.alt || "Video thumbnail"}
                  width={800}
                  height={450}
                  className="aspect-video size-full object-cover rounded"
                  quality={90}
                />
              )}
              <span className="absolute inset-0 z-10" />
              <FaCirclePlay className="absolute z-20 size-16 text-black" />
            </button>
          </DialogTrigger>
          <DialogContent>
            {/* ✅ Added DialogTitle for accessibility */}
            <DialogTitle className="sr-only">Video Player</DialogTitle>

            {!isIframeLoaded && (
              <CgSpinner className="mx-auto size-16 animate-spin text-white" />
            )}
            {video && (
              <iframe
                className={clsx(
                  "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                  {
                    visible: isIframeLoaded,
                    hidden: !isIframeLoaded,
                  }
                )}
                src={video}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsIframeLoaded(true)}
              ></iframe>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// Default props
export const Content10Defaults: Props = {
  video:
    "https://player.vimeo.com/video/814469584?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  image: {
    src: "/images/bw-doco.jpg",
    alt: "Video thumbnail",
  },
};
