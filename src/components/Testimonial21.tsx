"use client";

type Testimonial = {
  quote: string;
};

type Props = {
  heading: string;

  testimonials: Testimonial[];
};

export type Testimonial21Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial21 = (props: Testimonial21Props) => {
  const {
    heading,

    testimonials,
  } = {
    ...Testimonial21Defaults,
    ...props,
  };

  return (
    <section
      id='relume'
      className='bg-brand-darkGrey text-white border-b border-white overflow-hidden py-16 md:py-24 lg:py-28'
    >
      <div className='container mb-12 px-[5%] text-center md:mb-18 lg:mb-20'>
        <h1 className='text-5xl font-bold  md:text-7xl lg:text-8xl'>{heading}</h1>
        {/* <p className="md:text-md">{description}</p> */}
      </div>
      <div className='flex animate-loop-testimonials'>
        {Array.from({ length: 2 }).map((_, arrayIndex) => (
          <div key={arrayIndex} className='flex'>
            {testimonials.map((testimonial, index) => (
              <div
                key={`${arrayIndex}-${index}`}
                className='mr-8 flex w-[25rem] min-w-[25rem] flex-col items-start justify-between p-6 md:p-8'
              >
                <blockquote className='md:text-md'>{testimonial.quote}</blockquote>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Testimonial21Defaults: Props = {
  heading: `Bernard Whimp\’s Investment Philosophies`,
  testimonials: [
    {
      quote: '"A proper investor has unhooked their thinking about share prices from what the quoted market price is."',
    },
    {
      quote:
        "\"After several years of intense effort, we're highly confident that we are 'cooking with gas' on a large scale internationally orientated business.\"",
    },
    {
      quote:
        '"Chance Voight aims to be the greatest share market wealth creation machine ever assembled in New Zealand."',
    },
    {
      quote:
        '"Once you enter the church of deep value investing, everything you do in the stock market will be about buying assets at cents in the dollar."',
    },
    {
      quote:
        '"Our aim is to make Chance Voight one of New Zealand\'s best businesses, a business that is rewarding for investors, a business that is exciting for shareholders, a business that both investors and shareholders can be truly proud of."',
    },
    {
      quote: '"The best thing you can do for yourself is find a good hedge fund and stick with it."',
    },
    {
      quote:
        '"You cannot do what everyone else does and achieve better than average results. To be a good investor, to generate the highest returns, you must go against the consensus thinking."',
    },
  ],
};
