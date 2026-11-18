export default function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl shadow-sm ${
          light
            ? "bg-white/10 ring-1 ring-white/25"
            : "bg-gradient-to-br from-coral-500 to-plum-900 ring-1 ring-plum-900/10"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="size-6"
          aria-hidden="true"
        >
          <path
            d="M12.5 4.5c-.4 1.1.4 1.7.4 2.8m4-2.8c-.4 1.1.4 1.7.4 2.8"
            stroke={light ? "#ffd89e" : "#fff1da"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="7" y="10.5" width="18" height="4.5" rx="1.75" fill="#ffd89e" />
          <path
            d="M8.5 15h15l-1.2 9.4a2.5 2.5 0 0 1-2.48 2.1h-7.64a2.5 2.5 0 0 1-2.48-2.1L8.5 15Z"
            fill={light ? "#96e4dd" : "#f5ece4"}
          />
          <path
            d="M15.4 15h1.2l.5 11.5h-2.2L15.4 15Z"
            fill={light ? "#2d151c" : "#442427"}
            opacity="0.85"
          />
        </svg>
      </span>
      <span
        className={`font-heading text-lg font-bold tracking-tight ${
          light ? "text-white" : "text-plum-900"
        }`}
      >
        DBG<span className={light ? "text-cream-200" : "text-coral-700"}>FoodBox</span>
        <span className={light ? "text-mint-300" : "text-plum-800"}>NG</span>
      </span>
    </div>
  );
}
