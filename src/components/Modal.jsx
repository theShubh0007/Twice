import { icons } from "../data/data";
import Bar from "./Bar";
import Button from "./Button";
export default function Modal({ open, setOpen, member, service }) {
  if (!open) return null;

  const button = () => (
    <button className="float-right mt-6">
      <img
        src="/close.png"
        alt=""
        className="h-6 w-6 text-zinc-300"
        onClick={() => setOpen(false)}
      />
    </button>
  );

  const text = () => (
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );

  return (
    <div className="w-full  fixed inset-0 bg-zinc-100/80 flex items-center justify-center z-50">
      <div
        className="bg-white px-11.5 rounded-2xl w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {button()}
        {member && (
          <div>
            <h2 className="text-xl font-bold mt-17.25 text-center">
              {member.name}
            </h2>
            <p className="text-zinc-600 text-center mb-5.5 max-w-2xl">
              {member.role}
            </p>
            {text()}
            <hr className="mt-4 mb-4 text-zinc-300 " />
            <div className="mb-4 flex justify-center gap-3">
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
        )}

        {service && (
          <div>
            <div className="flex items-center justify-center">
              <img
                src={service.icon}
                alt={service.title}
                className="h-15 w-15 sm:h-18 sm:w-18 md:h-22 md:w-22 lg:h-25 lg:w-25"
              />
            </div>
            <h4 className="mt-4 sm:text-xl  lg:text-2xl text-center mb-2">
              {service.title}
            </h4>
            <div className="flex justify-center  text-center items-center">
              <Bar />
            </div>
            {text()}
          </div>
        )}
      </div>
    </div>
  );
}
