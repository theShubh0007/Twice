import {  useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };
  const navlinks = ["services", "references", "teams", "contact"];
  const navLink = () => {
    return (
      <>
        {navlinks.map((link) =>
          link === "contact" ? (
            <a
              key={link}
               href={`#${link}`}
              className="uppercase lg:bg-lime-400 lg:pt-2.75 lg:pb-3 lg:px-6 lg:rounded-full lg:font-semibold lg:flex lg:gap-14.25 border-t lg:border-0 w-full border-b pl-10 py-0.5 lg:w-auto lg:items-center hover:bg-lime-300"
            >
              {link}{" "}
              <span className="relative text-xl hidden lg:block">&gt;</span>
            </a>
          ) : (
            <a
              onClick={() => setMenu(false)}
              key={link}
              className="tracking-normal uppercase border-t lg:border-0 w-full py-0.5 pl-10 lg:pl-0 lg:w-auto"
              href={`#${link}`}
            >
              {link}
            </a>
          ),
        )}
      </>
    );
  };
  document.getElementById("teams")
document.getElementById("services")
  // useEffect(() => {
  //   document.body.style.overflow = menu ? "hidden" : "auto";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [menu]);
  return (
    <header className="fixed top-0 w-full transition-all duration-400 flex flex-col bg-transparent z-13">
      <div className="bg-purple-500 pt-2.75 pb-2.5 tracking-normal text-center flex justify-center items-center text-sm text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </div>
      <div className="bg-white relative z-20 shadow-md">
        <div className="h-22 container mx-auto py-5 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex justify-center">
              {/* <img src="" alt="" /> */}
              <p className="text-3xl tracking-normal">Twice</p>
            </div>
            <nav className="h-12 hidden lg:flex items-center gap-10 text-lg">
              {navLink()}
            </nav>
            <div className="lg:hidden cursor-pointer">
              <button
                onClick={handleMenuToggle}
                className="flex justify-center items-center"
              >
                <img
                  src={`${menu ? "/close.png" : "/menu.png"}`}
                  alt=""
                  className={`h-6 transition-all duration-300 ease-in-out ${
                    menu ? "rotate-90 scale-110" : "rotate-0 scale-100"
                  }`}
                />
              </button>
            </div>
            {menu && (
              <div className=" bg-white absolute top-full left-0 w-full h-[calc(100dvh-124px)]  lg:hidden z-12 flex flex-col items-center justify-center text-lg">
                {navLink()}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
