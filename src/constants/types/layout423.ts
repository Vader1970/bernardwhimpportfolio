export interface ImageProps {
    src: string;
    alt?: string;
    unoptimized?: boolean;
  }
  
  export interface FeatureProps {
   
    url: string;
    image: ImageProps;
    heading: string;
    description: string;
  }
  
  export interface Layout423Props extends React.ComponentPropsWithoutRef<"section"> {
   
    heading: string;
    description: string;
    features: FeatureProps[];
    blockquote: string;
  }
  
  export const Layout423Defaults: Layout423Props = {
   
    heading: "More About Bernard Whimp",
  description: `\"I would have to say that as you get to know him you realise he\'s the most complete individual imaginable, on every level.\"`,
  blockquote: "-Amanda Bowes-Durand-Journalist-",
  features: [
    {
      url: "#",
      heading: "Visionary.",
      description:
        "Bernard is building a billion-dollar business in the Australian stock market. New Zealand's first equities hedge fund.",
      image: {
        src: "/videos/bernard-whimp-chance-voight-helicopter.gif",
        alt: "Bernard Whimp in Helicopter",
        unoptimized: true,
      },
    },
    {
      url: "#",
      heading: "Inspiring Speaker.",
      description:
        "We will be trying to get many of our investment insights across to our shareholders.",
      image: {
        src: "/images/bernard-whimp-speaking.webp",
        alt: "Bernard Whimp Speaking",
      },
    },
    {
      url: "#",
      heading: "Professional Stock Picker.",
      description:
        "As a firm, we hunt for situations where we can obtain substantial value for nothing.",
      image: {
        src: "/images/stock-charts.webp",
        alt: "Stock market charts",
      },
    },
    {
      url: "#",
      heading: "Chance Voight, CEO",
      description:
        "Its about the sheer joy of doing what you love day and night.",
      image: {
        src: "/videos/bernard-whimp-black-suit.gif",
        alt: "Bernard Whimp speaking.",
        unoptimized: true,
      },
    },
  ],
};