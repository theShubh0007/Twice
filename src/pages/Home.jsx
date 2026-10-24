// import Slider from "react-slick";
import Button from "../components/Button";
import { newsData } from "../data/data";
import SlickModule from "react-slick";

function NewsCard({ news }) {
  return (
    <div key={news.id} className="px-2">
      <div className="bg-zinc-300 rounded-xl p-4">
        <img
          src={news.image}
          alt=""
          className=" aspect-[361/296] object-cover rounded-xl"
        />

        <div className="flex justify-between my-1">
          <p className="text-sm">{news.category}</p>
          <p className="text-sm">{news.date}</p>
        </div>

        <p className="text-md leading-4 font-medium truncate mt-4">
          {news.title}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const Slider = SlickModule.default ?? SlickModule;
  const sliderSettings = {
    dragble: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section id="home" className="relative pt-16 pb-16  bg-purple-500 ">
      <div className="max-w-8xl container mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className=" grid lg:grid-cols-12 grid-cols-1 gap-y-10">
          <div className="md:col-span-8 col-span-1 flex items-center justify-center lg:justify-start">
            <div className="text-white">
              <h1 className="text-6xl leading-16 text-center  font-bold">
                Why Choose TWICE?
              </h1>
              <p className="text-lg text-center pt-3 pb-12.75">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amet.
                <br />– Fast, Dependable, and Effective!
              </p>

              <div className="flex justify-center">
                <Button className="pt-2.75 pb-3 px-6 flex justify-between gap-4.25  text-lg font-semibold ">
                  <span>Learn More</span> <span>&gt;</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 min-w-0 w-full  ">
            <div className="slider-container w-full max-w-full">
              <Slider {...sliderSettings}>
                {newsData.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
