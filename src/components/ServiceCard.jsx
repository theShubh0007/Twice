export default function ServiceCard({ title, icon }) {
  return (
    <div className="aspect-square flex flex-col items-center justify-center bg-white">
      <img src={icon} alt="" className="w-1/3 object-contain" />
      <h3 className="font-semibold text-center text-2xl lg:text-3xl mt-6">
        {title}
      </h3>
    </div>
  );
}
