import { newsData } from "../data/data";
import SlickModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slick.css";
import { useRef } from "react";
import Button from "./Button";

function NextArrow({ sliderRef }) {
  return (
    <button
      type="button"
      onClick={() => sliderRef.current?.slickNext()}
      className="news-custom-prev  h-6 w-6 flex items-center justify-center "
    >
      <img
        src="/next-arrow.svg"
        alt="Next"
        className="h-full w-full object-contain brightness-0 invert"
      />
    </button>
  );
}

function PrevArrow({ sliderRef }) {
  return (
    <button
      type="button"
      onClick={() => sliderRef.current?.slickPrev()}
      className="news-custom-next h-6 w-6 flex items-center justify-center"
    >
      <img
        src="/prev-arrow.svg"
        alt="Previous"
        className="h-full w-full object-contain brightness-0 invert "
      />
    </button>
  );
}

function NewsCard({ news }) {
  return (
    <div key={news.id} className="px-2">
      <div className="bg-zinc-300 rounded-xl">
        <img
          src={news.image}
          alt=""
          className="w-full aspect-[4/3] object-cover rounded-xl px-5 pt-5"
        />
        <div className="px-5 pt-1.5 flex flex-col ">
          <div className="flex justify-between  my-1">
            <p className="text-sm">{news.category}</p>
            <p className="text-sm">{news.date}</p>
          </div>
          <p className="text-md leading-4 font-medium  mt-4 line-clamp-2 w-[70%] pb-6">
            {news.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const sliderRef = useRef(null);

  const Slider = SlickModule.default ?? SlickModule;

  const sliderSettings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
  };
  return (
    <>
      <div  className="slider-container news-slider mt-14 ">
        <Slider ref={sliderRef} {...sliderSettings}
         key={window.innerWidth <= 600 ? 1 : window.innerWidth <= 1024 ? 2 : 3}
        >
          {newsData.map((news) => (
            <NewsCard news={news} />
          ))}
        </Slider>
      </div>
          <div className="news-arrow flex justify-center items-center gap-10 md:gap-12 lg:gap-15 my-8">
            <PrevArrow sliderRef={sliderRef} />
            <NextArrow sliderRef={sliderRef} />
          </div>
          <div className="archive  flex items-center justify-center ">
            <Button label="archive" className="px-17.25 py-2.5 text-white font-semibold text-lg" />
          </div>
    </>
  );
}
