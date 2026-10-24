export default function Button({ label, className, children }) {
  return (
    <button
      className={`${className || ""} bg-lime-400 capitalize rounded-full transition-all duration-500 hover:bg-lime-300 cursor-pointer hover:scale-105 active:scale-95 hover:shadow-lg`}
    >
      {children || label}
    </button>
  );
}
