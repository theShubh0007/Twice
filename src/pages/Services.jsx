import { useState } from "react";
import Modal from "../components/Modal";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/data";

export default function Services() {
  function ServiceCard ({service, onClick}){
    return(
      <div onClick={onClick} className="aspect-square flex flex-col items-center justify-center bg-white">
        <img src={service.icon} alt="" className="w-1/3 object-contain" />
        <h3 className="font-semibold text-center text-2xl lg:text-3xl mt-6">
          {service.title}
        </h3>
      </div>
      )
    }
  const [selectedService, setSelectedService] = useState(null);
  // const [open, setOpen] = useState(false);
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
              <ServiceCard key={service.title} service={service}  onClick={() => { setSelectedService(service); }}/>
            ))}
          </div>
        </div>
      </div> 
      <Modal
        open={selectedService !== null}
        setOpen={(value) => !value && setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}
