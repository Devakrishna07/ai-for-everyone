export default function CardGrid({ data, exptext, href, count = 4 }) {
  const items = data.slice(0, count);

  // Determine dynamic grid classes based on count
  const gridCols =
    count === 1
      ? "grid-cols-1"
      : count === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : count === 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"; // default for 4+

  return (
    <div className="w-full flex flex-col items-center">

      {/* Cards Container */}
      <div
        className={`
          grid 
          ${gridCols}
          gap-4 
          px-1
          w-full 
        `}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              rounded-2xl 
              p-6 
              bg-white/10 
              backdrop-blur-xl 
              border border-white/20
              shadow-md shadow-black/30
              transition-all duration-500
              hover:shadow-purple-500/40 
              hover:shadow-2xl
              hover:bg-purple-500/20
              hover:border-purple-400
            "
          >
            <h2 className="text-3xl font-bold text-purple-300">
              {item.value}
            </h2>
            <p className="text-gray-200 mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* See More Link */}
      {exptext && href && (
        <div className="mt-6">
          <a
            href={href}
            className="
              text-purple-400 
              hover:text-purple-300 
              transition-all 
              underline 
              text-lg
            "
          >
            {exptext}
          </a>
        </div>
      )}
    </div>
  );
}
