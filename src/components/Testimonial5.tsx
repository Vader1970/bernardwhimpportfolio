type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  logo: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial5 = (props: Testimonial5Props) => {
  const { testimonials } = {
    ...Testimonial5Defaults,
    ...props,
  };
  return (
    <section className="bg-brand-darkGrey border-b border-white px-4 py-16 text-white md:px-8 md:py-24 lg:py-32">
      <div className="container">
        <div className="relative grid md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Vertical divider for large screens */}
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-white lg:block" />

          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Testimonial testimonial={testimonial} />
              {/* Horizontal divider for small screens only */}
              {index === 0 && (
                <div className="my-8 h-px w-full bg-white md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex flex-col sm:h-full sm:justify-between space-y-6">
    <blockquote className="text-lg font-medium leading-relaxed text-white md:text-lg lg:text-2xl">
      {testimonial.quote}
    </blockquote>
    <div className="flex flex-col space-y-2">
      <p className="font-medium text-white">{testimonial.name}</p>
      <div className="flex flex-col">
        <p>{testimonial.position}</p>
      </div>
    </div>
  </div>
);

export const Testimonial5Defaults: Props = {
  heading: "",
  description: "",
  testimonials: [
    {
      numberOfStars: 0,
      quote:
        "\"I am looking to build on the knowledge and experience I have accumulated to create life changing wealth for investors.\"",
      avatar: {
        src: "",
        alt: "",
      },
      name: "Bernard Whimp",
      position: "Chance Voight Investment Corporation\nFounder and CEO/CIO",
      logo: {
        src: "",
        alt: "",
      },
    },
    {
      numberOfStars: 0,
      quote:
        "\"For us stock picking can give us such massive returns we find it hard to imagine why you'd do anything else.\"",
      avatar: {
        src: "",
        alt: "",
      },

      name: "Bernard Whimp",
      position: "Chance Voight Investment Corporation\nFounder and CEO/CIO",
      logo: {
        src: "",
        alt: "",
      },
    },
  ],
};
