import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const testimonialsData = [
  {
    name: 'Michelle Sidgwick',
    text: 'My daughter loves dancing at this dance school. Within a year my extremely shy daughter had become confident and outgoing. She has learnt a lot of life skills about team work, dedication and has made so many new friends. This school feels like a family as everyone looks after each other. The principal is extremely good at getting the best out of everyone and sets a good example to her pupils.',
  },
  {
    name: 'Julia Dark',
    text: 'Outstanding dance school. Brilliant pupils, lovely parents and fantastic teachers.',
  },
  {
    name: 'Hayley Parsons',
    text: 'I joined over 20 years ago, was not the best dancer but Claire always made me believe that I could be the best and to always give it a go. Many years later my children joined, my eldest was there for 11 ish years and she loved it. Then my youngest joined. Claire (the teacher) is very patient and caring to the kids but can be firm when needed. She has guided my children along their journey within their experience at the dance school and beyond. Would highly recommend.',
  },
  {
    name: 'Caitlin Bailey',
    text: 'I danced here for a number of years, lovely people to dance with all very friendly and Claire is very friendly and a wonderful dance teacher.',
  },
  {
    name: 'Sian Mckee',
    text: 'Amber loved her first lesson today. Such a friendly environment, she can not wait until next week!',
  },
  {
    name: 'Joanne McDonald',
    text: 'My little princess attends here and loves every lesson! Her dancing is improving and her confidence has grown massively! Would definitely recommend this dance school.',
  },
  {
    name: 'Laura Jayne',
    text: "My little boy Ryleigh has gained so much confidence since starting at Chorley. There is such a lovely atmosphere within the dance school, I wouldn't take him anywhere else. Big thanks to Claire for bringing Ryleigh out of his shell he looks forward to coming every week.",
  },
  {
    name: 'Rachael Bradbury',
    text: 'My daughter had her first ever dance class today. The children really helped her feel like she was one of the family. Claire is lovely and makes the lesson fun.',
  },
  {
    name: 'Carly Mckay',
    text: 'My daughter has been dancing here for over 7 years now and loves it. The confidence she has gained over the years is amazing. Claire is a great teacher and puts her all into her students and it shows. I would highly recommend the Chorley school of dance to anyone that enjoys dancing.',
  },
  {
    name: 'Paul Booth',
    text: 'Our daughter started with Claire just over a year ago and since starting we have seen Eloisa grow in confidence and the amount she has improved over the year has surprised and excited us. Her tricks in acro and her ballet and modern dancing are incredible, we can only thank Claire for all she has done for her and the belief she has in Eloisa. Many thanks.',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-theme-grey h-[420px] p-4 md:p-8 rounded-md mb-16 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">{testimonial.name}</h1>
      <div className="mb-4">
        <i className="icon-star text-theme-yellow" />
        <i className="icon-star text-theme-yellow" />
        <i className="icon-star text-theme-yellow" />
        <i className="icon-star text-theme-yellow" />
        <i className="icon-star text-theme-yellow" />
      </div>
      <p className="text-sm text-center">{testimonial.text}</p>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div id="testimonials">
      <div className="pt-16 pb-8 px-4 sm:px-24 hidden md:block">
        <h1 className="text-center text-5xl font-medium mb-16">Testimonials</h1>
        <div className="px-6">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
          >
            {testimonialsData.map((testimonial) => {
              return (
                <SwiperSlide key={testimonial.name}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div id="testimonials" className="pt-8 pb-8 px-8 sm:px-24 md:hidden">
        <h1 className="text-center text-5xl font-medium mb-16">Testimonials</h1>
        <div className="px-6">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
          >
            {testimonialsData.map((testimonial) => {
              return (
                <SwiperSlide key={testimonial.name}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
