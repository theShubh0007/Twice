import Bar from "./Bar";

export default function SectionHeading({ className, textColor, title }) {
  return (
    <>
      <Bar className={className} />
      <div
        className={`mt-3 text-5xl font-bold uppercase text-${textColor || "black"} cursor-default`}
      >
        {title}
      </div>
    </>
  );
}
