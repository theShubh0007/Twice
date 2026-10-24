export default function Bar({ className }) {
  return (
    <div
      className={`${className || ""} bg-lime-300 h-1.5 w-15 rounded-xs pointer`}
    />
  );
}
