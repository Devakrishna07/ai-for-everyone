export default function CardGrid({ data }) {
  const topFour = data.slice(0, 4); // get first 4 items

  return (
    <div className="w-full flex flex-col items-center">
      {/* Cards Container */}
      <div className="
        grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-6 
        px-4
        w-screen
      ">
        {topFour.map((item, index) => (
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
      <div className="mt-6">
        <a
          href="#"
          className="
            text-purple-400 
            hover:text-purple-300 
            transition-all 
            underline 
            text-lg
          "
        >
          See More →
        </a>
      </div>
    </div>
  );
}
