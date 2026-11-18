import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "DBGFoodBoxNG - Fresh meals, beautifully boxed",
  description:
    "Fresh Nigerian meal boxes, cooked to order and delivered hot across Lagos.",
};

/* ---------- Icons ---------- */

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

function JollofIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 37h48a24 24 0 0 1-48 0Z" />
      <path d="M17 37a15 15 0 0 1 30 0" />
      <path d="M23 24c0-3 2-3 2-6M32 20c0-3 2-3 2-6M41 24c0-3 2-3 2-6" />
      <path d="M14 52h36" />
    </svg>
  );
}

function WrapIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <g transform="rotate(16 32 32)">
        <rect x="22" y="8" width="20" height="48" rx="10" />
        <path d="M25 20h14M24 32h16M25 44h14" />
      </g>
    </svg>
  );
}

function SoupIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 36h48a24 24 0 0 1-48 0Z" />
      <path d="M15 36c4-4 8-4 12 0s8 4 12 0 8-4 10 0" />
      <path d="M26 21c0-3 2-3 2-6M38 22c0-3 2-3 2-6" />
      <path d="M14 52h36" />
    </svg>
  );
}

function BoxIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.5 6h17l-1 3h-15l-1-3Z" />
      <path d="M4.5 9h15l-1.2 10a2 2 0 0 1-2 1.8H7.7a2 2 0 0 1-2-1.8L4.5 9Z" />
      <path d="M12 9v11.8" />
    </svg>
  );
}

function PotIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 9.5h14V15a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 5 15V9.5Z" />
      <path d="M3 11.5h2M19 11.5h2" />
      <path d="M9.5 6.5c0-1.2 1-1.2 1-2.4M13.5 6.5c0-1.2 1-1.2 1-2.4" />
    </svg>
  );
}

function BikeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="5.5" cy="17.5" r="2.5" />
      <circle cx="18.5" cy="17.5" r="2.5" />
      <path d="M5.5 17.5 10 8h4.5l4 9.5" />
      <path d="M9.5 17.5h6" />
      <path d="M10.5 8 9 5.5h2.5" />
    </svg>
  );
}

/* ---------- Hero art ---------- */

function MealBoxArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="rice" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef552b" />
          <stop offset="100%" stopColor="#c0391f" />
        </linearGradient>
        <linearGradient id="box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1da" />
          <stop offset="100%" stopColor="#ffd89e" />
        </linearGradient>
      </defs>

      <circle cx="180" cy="184" r="150" fill="#fff1da" opacity="0.7" />
      <circle cx="180" cy="184" r="130" fill="#fffaf3" stroke="#ead6d3" strokeWidth="2" />
      <circle cx="180" cy="184" r="114" fill="#f5ece4" />

      <path
        d="M138 78c-9-12 9-18 0-30M180 70c-9-12 9-18 0-30M222 78c-9-12 9-18 0-30"
        stroke="#442427"
        strokeOpacity="0.3"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      <path d="M96 200a84 84 0 0 1 168 0Z" fill="url(#rice)" />
      <path d="M112 200a68 68 0 0 1 136 0Z" fill="#e04a2d" opacity="0.65" />
      {[
        [130, 178],
        [152, 166],
        [176, 160],
        [200, 164],
        [222, 176],
        [140, 192],
        [164, 184],
        [188, 182],
        [212, 192],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y}l7-3`}
          stroke="#fff1da"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.75"
        />
      ))}

      <g transform="rotate(-18 148 172)">
        <ellipse cx="148" cy="172" rx="27" ry="17" fill="#ffd89e" stroke="#c0391f" strokeWidth="2" />
        <ellipse cx="148" cy="172" rx="17" ry="9" fill="#f5ece4" opacity="0.6" />
        <path d="M171 172l16 5" stroke="#fffaf3" strokeWidth="5" strokeLinecap="round" />
        <circle cx="189" cy="178" r="5" fill="#fffaf3" />
      </g>

      <g transform="rotate(14 224 184)">
        <ellipse cx="224" cy="184" rx="24" ry="13" fill="#ffd89e" stroke="#c0391f" strokeWidth="2" />
        <path d="M208 184h32" stroke="#e04a2d" strokeWidth="2" opacity="0.6" />
      </g>
      <g transform="rotate(-8 232 206)">
        <ellipse cx="232" cy="206" rx="22" ry="12" fill="#ffd89e" stroke="#c0391f" strokeWidth="2" />
        <path d="M217 206h30" stroke="#e04a2d" strokeWidth="2" opacity="0.6" />
      </g>

      <path
        d="M104 208c14-10 26-10 38 2-14 10-26 10-38-2Zm152 0c-14-10-26-10-38 2 14 10 26 10 38-2Z"
        fill="#96e4dd"
      />
      <path
        d="M120 224c10-6 18-6 26 2-10 6-18 6-26-2Zm120 0c-10-6-18-6-26 2 10 6 18 6 26-2Z"
        fill="#442427"
        opacity="0.15"
      />

      <path
        d="M84 246h192l-8 26a10 10 0 0 1-9.7 7.5H101.7A10 10 0 0 1 92 272l-8-26Z"
        fill="url(#box)"
        stroke="#442427"
        strokeOpacity="0.18"
      />
      <path d="M84 246h192l-4 13H88l-4-13Z" fill="#442427" opacity="0.12" />
      <path d="M174 246h12l2 33.5h-16L174 246Z" fill="#442427" opacity="0.7" />
    </svg>
  );
}

/* ---------- Data ---------- */

const stats = [
  { value: "50k+", label: "Meals delivered" },
  { value: "30 min", label: "Average delivery" },
  { value: "4.9", label: "Customer rating" },
];

const dishes = [
  {
    icon: JollofIcon,
    name: "Jollof Rice & Chicken",
    note: "Smoky party jollof with grilled chicken.",
    price: "₦4,500",
    badge: "Bestseller",
  },
  {
    icon: WrapIcon,
    name: "Suya Wrap",
    note: "Spiced beef, onions, and pepper sauce.",
    price: "₦3,200",
    badge: "New",
  },
  {
    icon: SoupIcon,
    name: "Pepper Soup",
    note: "A fiery, comforting broth with assorted meat.",
    price: "₦3,800",
    badge: "Chef's pick",
  },
];

const steps = [
  {
    icon: BoxIcon,
    title: "Pick your box",
    text: "Choose a dish from our partner kitchens.",
  },
  {
    icon: PotIcon,
    title: "We cook fresh",
    text: "Every meal is prepared to order.",
  },
  {
    icon: BikeIcon,
    title: "Delivered hot",
    text: "At your door in about 30 minutes.",
  },
];

const reviews = [
  {
    quote: "The jollof tastes like home. Arrived hot and beautifully packed.",
    name: "Ada O.",
    initials: "AO",
  },
  {
    quote: "Reliable, quick, and the portions are generous. My go-to in Lagos.",
    name: "Tunde K.",
    initials: "TK",
  },
  {
    quote: "The pepper soup is exactly what I needed on a rainy evening.",
    name: "Imma B.",
    initials: "IB",
  },
];

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-plum-100/80 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="DBGFoodBoxNG home">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
            {[
              ["How it works", "#how-it-works"],
              ["Menu", "#menu"],
              ["Reviews", "#reviews"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[0.95rem] font-medium text-plum-800 transition hover:text-coral-700"
              >
                {label}
              </a>
            ))}
          </nav>

          <Link
            href="/login"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-plum-900 to-coral-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md shadow-plum-900/20 transition hover:from-plum-950 hover:to-coral-800 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-600"
          >
            Order now
            <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cream-300 via-cream-100 to-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-cream-200/70 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-mint-100/60 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-24">
            <div className="max-w-xl">
              <div className="flex animate-fade-up items-center gap-3">
                <span className="h-px w-8 bg-coral-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-700">
                  Fresh from Lagos kitchens
                </p>
              </div>

              <h1
                className="mt-6 animate-fade-up font-heading text-5xl font-bold leading-[1.08] tracking-tight text-plum-900 sm:text-6xl lg:text-7xl"
                style={{ animationDelay: "60ms" }}
              >
                Fresh meals,{" "}
                <em className="font-normal text-coral-700">beautifully boxed.</em>
              </h1>

              <p
                className="mt-6 max-w-md animate-fade-up text-base leading-7 text-plum-700"
                style={{ animationDelay: "120ms" }}
              >
                Cooked to order. Delivered hot, right on time.
              </p>

              <div
                className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
                style={{ animationDelay: "180ms" }}
              >
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-plum-900 to-coral-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-plum-900/20 transition hover:from-plum-950 hover:to-coral-800 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-600"
                >
                  Order a box
                  <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#menu"
                  className="inline-flex items-center rounded-full border border-plum-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-plum-800 shadow-sm backdrop-blur transition hover:border-plum-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-600"
                >
                  Explore the menu
                </a>
              </div>

              <div
                className="mt-10 flex animate-fade-up items-center gap-4"
                style={{ animationDelay: "240ms" }}
              >
                <div className="flex -space-x-2">
                  {["AO", "TK", "IM", "BE"].map((initials, i) => (
                    <span
                      key={initials}
                      className={`grid size-9 place-items-center rounded-full text-[0.6rem] font-bold text-white ring-2 ring-cream-100 ${
                        i % 2 === 0 ? "bg-plum-800" : "bg-coral-600"
                      }`}
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-plum-700">
                  <span className="font-bold text-plum-900">50,000+</span> happy
                  food lovers
                </p>
              </div>
            </div>

            {/* Hero visual */}
            <div
              className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none"
              style={{ animationDelay: "100ms" }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-full bg-gradient-to-br from-cream-200 via-cream-100 to-mint-100 blur-2xl"
              />
              <div className="relative rounded-[2rem] border border-plum-100 bg-white/70 p-5 shadow-2xl shadow-plum-900/10 backdrop-blur sm:p-7">
                <MealBoxArt className="mx-auto w-full max-w-sm" />
                <div className="mt-3 flex items-center justify-between gap-4 border-t border-plum-100 pt-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-700">
                      Today's box
                    </p>
                    <p className="mt-1 font-heading text-lg font-bold text-plum-900">
                      Jollof &amp; grilled chicken
                    </p>
                  </div>
                  <p className="shrink-0 font-heading text-xl font-bold text-plum-900">
                    ₦4,500
                  </p>
                </div>
              </div>

              <div className="animate-float absolute -right-2 -top-4 rounded-2xl border border-plum-100 bg-white px-4 py-3 shadow-lg sm:-right-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-plum-500">
                  Customer rating
                </p>
                <p className="mt-1 text-sm font-bold text-plum-900">
                  4.9{" "}
                  <span aria-hidden="true" className="text-coral-500">
                    ★★★★★
                  </span>
                  <span className="sr-only">out of 5 stars</span>
                </p>
              </div>

              <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-plum-100 bg-white px-4 py-3 shadow-lg sm:-left-5">
                <span className="grid size-9 place-items-center rounded-full bg-mint-100 text-plum-900">
                  <BikeIcon className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-plum-900">Delivered hot</p>
                  <p className="text-xs text-plum-600">In about 28 min</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-plum-100 bg-white">
          <dl className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-plum-100 px-6 py-10">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-1 text-center sm:px-6">
                <dd className="font-heading text-2xl font-bold text-plum-900 sm:text-3xl">
                  {value}
                </dd>
                <dt className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-plum-500 sm:text-xs">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </section>

        {/* Menu */}
        <section id="menu" className="scroll-mt-24 bg-cream-50">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-700">
                  Our top selections
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl lg:text-5xl">
                  A taste of what's in the box.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-plum-600">
                Fresh picks from kitchens we love.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dishes.map(({ icon: Icon, name, note, price, badge }) => (
                <article
                  key={name}
                  className="group overflow-hidden rounded-2xl border border-plum-100 border-b-4 border-b-coral-300 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-b-coral-500 hover:shadow-xl"
                >
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-cream-100 to-cream-200">
                    <Icon className="size-20 text-plum-800/80 transition duration-300 group-hover:scale-105 group-hover:text-coral-700" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-plum-800 shadow-sm backdrop-blur">
                      {badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-xl font-bold leading-tight text-plum-900">
                        {name}
                      </h3>
                      <p className="shrink-0 text-sm font-bold text-coral-700">
                        {price}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-plum-600">{note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-700">
                How to order
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl lg:text-5xl">
                Three simple steps.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="group relative pl-1">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-full border border-plum-200 bg-cream-50 text-plum-800 transition group-hover:border-coral-400 group-hover:bg-coral-50 group-hover:text-coral-700">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-heading text-4xl font-bold text-plum-500">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-plum-900">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-plum-600">
                    {text}
                  </p>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-4 top-6 hidden h-px w-8 bg-plum-200 md:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-24 bg-cream-50">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-700">
                Reviews
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-plum-900 sm:text-4xl lg:text-5xl">
                Loved across Lagos.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map(({ quote, name, initials }) => (
                <figure
                  key={name}
                  className="flex h-full flex-col rounded-2xl border border-plum-100 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold tracking-widest text-coral-500">
                    <span aria-hidden="true">★★★★★</span>
                    <span className="sr-only">5 out of 5 stars</span>
                  </p>
                  <blockquote className="mt-4 flex-1 font-heading text-lg leading-8 text-plum-900">
                    "{quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-plum-100 pt-5">
                    <span className="grid size-9 place-items-center rounded-full bg-plum-800 text-[0.6rem] font-bold text-white">
                      {initials}
                    </span>
                    <span className="text-sm font-semibold text-plum-800">
                      {name}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-plum-950 via-plum-900 to-coral-700 px-8 py-16 text-center shadow-2xl shadow-plum-900/20 sm:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 size-72 rounded-full bg-mint-300/15 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-20 size-72 rounded-full bg-cream-200/10 blur-2xl"
            />
            <h2 className="relative mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight text-cream-100 sm:text-4xl lg:text-5xl">
              Your next great meal is one click away.
            </h2>
            <p className="relative mt-4 text-sm text-plum-200">
              Order now. We handle the rest.
            </p>
            <Link
              href="/login"
              className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-cream-200 px-7 py-3.5 text-sm font-bold text-plum-900 shadow-lg transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-200"
            >
              Order a box
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-plum-950 text-cream-100">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Logo light />
              <p className="mt-5 max-w-xs text-sm leading-6 text-plum-300">
                Fresh Nigerian meal boxes, cooked to order and delivered across
                Lagos.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-200">
                Explore
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-plum-300">
                <li>
                  <a href="#how-it-works" className="transition hover:text-white">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#menu" className="transition hover:text-white">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="transition hover:text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <Link href="/login" className="transition hover:text-white">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-200">
                Get in touch
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-plum-300">
                <li>Lagos, Nigeria</li>
                <li>hello@dbgfoodboxng.com</li>
                <li>Daily, 9am to 9pm</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-plum-300 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 DBGFoodBoxNG. All rights reserved.</p>
            <p>Made with care in Lagos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
