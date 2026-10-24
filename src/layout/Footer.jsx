import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { icons } from "../data/data";

function BottomFooter() {
  const footerLinks = ["imprint", "Data protection"];
  return (
    <div className=" bg-purple-500 py-7">
      <div className="container  mx-auto  px-4 md:px-6 lg:px-8 ">
        <div className="bottomBar text-white ">
          <div className="container flex items-center justify-end">
            <p>
              {footerLinks.map((link, index) => (
                <a
                  className={`text-sm uppercase ${index === 0 ? "mr-16" : ""}`}
                >
                  {link}
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="pt-16 pb-16 ">
          <div className="container mx-auto py-5 px-4 md:px-6 lg:px-8 ">
            <div className="mb-6 md:mb-13">
              <SectionHeading title="Contact" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 relative ">
              <div className="col-span-1 mb-6 md:mb-0">
                <div>
                  <h2 className="text-3xl font-bold mb-2 md:mb-6">
                    Twice Studio
                  </h2>
                  <h3 className="text-xl text-zinc-600 mb-2 font-bold">
                    Rani Singh
                  </h3>
                  <h3 className="text-xl text-zinc-600 font-bold">
                    Salman Khan
                  </h3>
                </div>
              </div>
              <div className="w-40 h-px md:block md:w-px md:h-20 bg-zinc-300 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2" />
              <div className="col-span-1 mt-4 md:mt-0">
                <div className="flex md:justify-end">
                  <div className="flex flex-col items-start gap-6.5">
                    <div className="flex items-center gap-2">
                      <img src="/Location.svg" alt="" className="h-6 w-6" />
                      <p>Jamshedpur, Jharkhand, India</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src="/Message.svg" alt="" className="h-6 w-6" />
                      <p>hello@twicestudio.com</p>
                    </div>

                    <div className="flex gap-2">
                      {icons.map((i) => (
                        <Button
                          key={i.id}
                          className="flex justify-center items-center h-10 w-10"
                        >
                          <img src={i.src} alt="" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BottomFooter />
    </>
  );
}
