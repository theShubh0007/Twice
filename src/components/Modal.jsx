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
    <div className="w-full fixed inset-0 bg-zinc-100/80 flex items-center justify-center z-50" >
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
          <div className=" my-14">
            <div className="flex flex-col items-center ">
        <img
          src={service.icon}
          alt={service.title}
          className="h-20 w-20 sm:h-16 sm:w-16 object-contain"
        />

        <h4 className="mt-3.5 text-xl sm:text-2xl font-semibold text-center">
          {service.title}
        </h4>

        <div className="mt-4 mb-6">
          <Bar />
        </div>

          <div className="w-full max-w-2xl">
            {text()}
          </div>
        </div> 
      </div>
        )}
    </div>
    </div>

  )
}

