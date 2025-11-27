export default function StatsCard({ value, label }) {
  return (
    <div
      className="
        w-64 
        rounded-2xl 
        p-6 
        text-center 
        bg-white/10 
        backdrop-blur-xl 
        border border-white/20
        shadow-md shadow-black/20
        transition-all duration-500
        hover:shadow-blue-500/40 hover:shadow-xl
        hover:bg-white/15
        m-3
      "
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
        {value}
      </h2>
      <p className="text-sm md:text-base text-gray-300 mt-2">
        {label}
      </p>
    </div>
  );
}
