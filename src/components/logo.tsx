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
        className={`grid size-10 shrink-0 place-items-center rounded-xl shadow-lg ${
          light
            ? "bg-white/10 ring-1 ring-white/20"
            : "bg-gradient-to-br from-brand-500 to-brand-700 ring-1 ring-brand-800/50"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="size-6"
          aria-hidden="true"
        >
          {/* steam */}
          <path
            d="M12.5 4.5c-.4 1.1.4 1.7.4 2.8m4-2.8c-.4 1.1.4 1.7.4 2.8"
            stroke={light ? "#a7f3d0" : "#ecfdf5"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* lid */}
          <rect
            x="7"
            y="10.5"
            width="18"
            height="4.5"
            rx="1.75"
            fill={light ? "#6ee7b7" : "#d1fae5"}
          />
          {/* box body */}
          <path
            d="M8.5 15h15l-1.2 9.4a2.5 2.5 0 0 1-2.48 2.1h-7.64a2.5 2.5 0 0 1-2.48-2.1L8.5 15Z"
            fill="#fbbf24"
          />
          {/* band on the box */}
          <path
            d="M15.4 15h1.2l.5 11.5h-2.2L15.4 15Z"
            fill={light ? "#022c22" : "#064e3b"}
            opacity="0.85"
          />
        </svg>
      </span>
      <span
        className={`text-lg font-bold tracking-tight ${
          light ? "text-white" : "text-zinc-900 dark:text-zinc-50"
        }`}
      >
        DBG<span className="text-brand-600 dark:text-brand-400">FoodBox</span>
        <span className={light ? "text-pepper-400" : "text-pepper-600"}>NG</span>
      </span>
    </div>
  );
}
