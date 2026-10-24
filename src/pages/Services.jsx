import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/data";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#f4f4f4]  pb-16">
      <div className=" absolute inset-x-0 top-0 bg-purple-500 h-112.5" />
      <div className=" relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 gap-4 lg:gap-17 lg:grid-cols-[220px_1fr]">
          <div>
            <SectionHeading title="services" textColor="white" />
          </div>
          <p className="text-lg leading-relaxed text-white md:pt-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* </div> */}
        <div className=" md:mt-16 md:-mb-14 pb-16">
          {/* <div className="container mx-auto relative px-4    -mt-14"> */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div> 
    </section>
  );
}
