import type { ButtonVariant, ButtonSize } from "@/components/Button";

export type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export type ImageProps = {
  src: string;
  alt?: string;
};

export type Header9Props = {
  heading: string;
  description: string;
  title: string;
  subTitle: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export const Header9Defaults: Header9Props = {
  heading: "Bernard Whimp",
  title: "Chance Voight Investment Partners",
  subTitle: "Founder / CEO/ CIO",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Learn more", variant: "outline", size: "md" },
    // { title: "Filled Button", variant: "filled", size: "lg" },
    // { title: "Dark Button", variant: "dark", size: "sm" },
  ],
  image: {
    src: "/images/bernard-hero-crop.jpg",
    alt: "placeholder image",
  },
};
