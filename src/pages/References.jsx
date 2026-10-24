
import SlickModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slick.css";
import SectionHeading from "../components/SectionHeading";
import { logos } from "../data/data";
export default function References() {
  const Slider = SlickModule.default ?? SlickModule;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <button type="button" className="custom-prev">
        <img src="/prev-arrow.svg" alt="Previous" />
      </button>
    ),

    nextArrow: (
      <button type="button" className="custom-next">
        <img src="/next-arrow.svg" alt="Next" />
      </button>
    ),
  };

  return (
    <section id="references" className="pt-16 pb-16 bg-[#f4f4f4]">
      <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <SectionHeading title="references" className="" />
        </div>
        <div className="slider-container my-10">
          <Slider {...settings} className="">
            {logos.map((e) => (
              <div key={e.id} className="px-6">
                <div className="flex justify-center md:block">
                  <div className=" p-6 h-29 bg-white flex justify-center items-center">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
