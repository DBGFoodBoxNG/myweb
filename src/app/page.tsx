import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "DBGFoodBoxNG - Naija flavors, boxed with love",
  description:
    "Order from top local kitchens. Cooked fresh, delivered hot in 30 minutes across Lagos.",
};

/* ---------- Icons ---------- */

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
      <path d="M3.5 5.5h17l-1 3h-15l-1-3Z" />
      <path d="M4.5 8.5h15l-1.2 10a2 2 0 0 1-2 1.7H7.7a2 2 0 0 1-2-1.7l-1.2-10Z" />
      <path d="M12 8.5V20" />
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

function GridIcon({ className = "" }: { className?: string }) {
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
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
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

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 13.5h16a8 8 0 0 1-16 0Z" />
      <path d="M7.5 13.5a4.5 4.5 0 0 1 9 0" />
      <path d="M9 7.5c0-1.2 1-1.2 1-2.4M12.5 7c0-1.2 1-1.2 1-2.4M16 7.5c0-1.2 1-1.2 1-2.4" />
    </svg>
  );
}

function WrapIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <g transform="rotate(14 12 12)">
        <rect x="8.5" y="3" width="7" height="18" rx="3.5" />
        <path d="M9.8 8h4.4M9.5 12h5M9.8 16h4.4" />
      </g>
    </svg>
  );
}

function SoupIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 14h16a8 8 0 0 1-16 0Z" />
      <path d="M7 14c1.4-1.4 2.8-1.4 4.2 0s2.8 1.4 4.2 0 2.8-1.4 3.6 0" />
      <path d="M10 8c0-1.2 1-1.2 1-2.4M14 8.5c0-1.2 1-1.2 1-2.4" />
    </svg>
  );
}

/* ---------- Data ---------- */

const stats = [
  { value: "50k+", label: "Meals delivered" },
  { value: "30 min", label: "Average delivery" },
  { value: "4.9", label: "Customer rating" },
];

const steps = [
  {
    icon: GridIcon,
    title: "Pick your box",
    text: "Choose a dish from our partner kitchens.",
    step: "Step 01",
  },
  {
    icon: PotIcon,
    title: "We cook fresh",
    text: "Every meal is prepared on order.",
    step: "Step 02",
  },
  {
    icon: BikeIcon,
    title: "Delivered hot",
    text: "At your door in about 30 minutes.",
    step: "Step 03",
  },
];

const dishes = [
  {
    icon: JollofIcon,
    name: "Jollof Rice & Chicken",
    note: "Smoky party jollof with grilled chicken.",
    price: "₦4,500",
    badge: "Popular",
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
    note: "Fiery broth with assorted meat.",
    price: "₦3,800",
    badge: "Spicy",
  },
];

const avatars = ["AO", "TK", "IM", "BE"];

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-50 border-b border-zinc-100/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="DBGFoodBoxNG home">
            <Logo />
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-8 md:flex"
          >
            <a
              href="#how-it-works"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              How it works
            </a>
            <a
              href="#menu"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              Menu
            </a>
          </nav>

          <Link
            href="/login"
            className="rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:from-brand-700 hover:to-brand-600 hover:shadow-brand-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Sign in
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-48 right-0 size-[34rem] rounded-full bg-brand-100/60 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-pepper-400/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-14 lg:grid-cols-2 lg:gap-10 lg:pb-28 lg:pt-24">
            {/* Copy */}
            <div className="max-w-xl">
              <h1
                className="animate-fade-up text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "0ms" }}
              >
                Naija flavors,{" "}
                <span className="bg-gradient-to-r from-brand-600 to-pepper-500 bg-clip-text text-transparent">
                  boxed with love.
                </span>
              </h1>

              <p
                className="mt-5 max-w-md animate-fade-up text-base leading-7 text-zinc-600 sm:text-lg"
                style={{ animationDelay: "120ms" }}
              >
                Order from top local kitchens. Cooked fresh, delivered hot in
                30 minutes.
              </p>

              <div
                className="mt-8 flex animate-fade-up flex-wrap items-center gap-3"
                style={{ animationDelay: "180ms" }}
              >
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:from-brand-700 hover:to-brand-600 hover:shadow-brand-600/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  Order now
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#menu"
                  className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  See the menu
                </a>
              </div>

              <div
                className="mt-10 flex animate-fade-up items-center gap-4"
                style={{ animationDelay: "240ms" }}
              >
                <div className="flex -space-x-2">
                  {avatars.map((initials, i) => (
                    <span
                      key={initials}
                      className={`grid size-9 place-items-center rounded-full bg-gradient-to-br text-[0.6rem] font-bold text-white ring-2 ring-white ${
                        i % 2 === 0
                          ? "from-brand-400 to-brand-600"
                          : "from-pepper-400 to-pepper-600"
                      }`}
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-zinc-500">
                  <span className="font-semibold text-zinc-900">50k+</span>{" "}
                  happy customers
                </p>
              </div>
            </div>

            {/* Visual */}
            <div
              className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none"
              style={{ animationDelay: "100ms" }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-brand-50 to-pepper-400/20 blur-2xl"
              />

              {/* Order card */}
              <div className="relative rounded-3xl border border-zinc-100 bg-white p-6 shadow-2xl shadow-brand-950/10 ring-1 ring-zinc-950/5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <BoxIcon className="size-5.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        Order #2841
                      </p>
                      <p className="text-xs text-zinc-500">
                        Jollof Rice &amp; Chicken
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                    On the way
                  </span>
                </div>

                <div className="mt-7 flex items-start gap-2">
                  {["Confirmed", "Cooking", "On the way", "Delivered"].map(
                    (step, i) => (
                      <div key={step} className="flex-1">
                        <div
                          className={`h-1.5 rounded-full ${
                            i < 3 ? "bg-brand-500" : "bg-zinc-100"
                          }`}
                        />
                        <p
                          className={`mt-2 text-[0.65rem] font-medium ${
                            i < 3 ? "text-zinc-700" : "text-zinc-400"
                          }`}
                        >
                          {step}
                        </p>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-7 flex items-center justify-between rounded-2xl bg-zinc-50 p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-white text-brand-600 shadow-sm">
                      <BikeIcon className="size-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        Arriving in 12 min
                      </p>
                      <p className="text-xs text-zinc-500">
                        Emeka is on his way
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-600">
                    2.4 km
                  </span>
                </div>
              </div>

              {/* Floating chips */}
              <div className="animate-float absolute -top-4 right-0 rounded-2xl border border-zinc-100 bg-white px-4 py-3 shadow-lg sm:-right-4">
                <p className="text-[0.65rem] font-medium uppercase tracking-wider text-zinc-400">
                  Order rating
                </p>
                <p className="mt-0.5 text-sm font-bold text-zinc-900">
                  4.9{" "}
                  <span className="text-pepper-500">★★★★★</span>
                </p>
              </div>

              <div className="absolute -bottom-5 left-0 flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white px-4 py-3 shadow-lg sm:-left-4">
                <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-pepper-400 to-pepper-600 text-[0.6rem] font-bold text-white">
                  JR
                </span>
                <div>
                  <p className="text-xs font-semibold text-zinc-900">
                    Jollof Rice
                  </p>
                  <p className="text-xs text-zinc-500">₦4,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Stats ---------- */}
        <section className="border-y border-zinc-100 bg-zinc-50/60">
          <dl className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-zinc-200 px-6 py-10">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-2 text-center sm:px-6">
                <dd className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                  {value}
                </dd>
                <dt className="mt-1 text-[0.65rem] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- How it works ---------- */}
        <section
          id="how-it-works"
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 lg:py-28"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Three steps to a great meal.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {steps.map(({ icon: Icon, title, text, step }) => (
              <div
                key={title}
                className="group rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-200 hover:shadow-lg"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-zinc-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                  {text}
                </p>
                <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-widest text-brand-600/70">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Menu ---------- */}
        <section
          id="menu"
          className="scroll-mt-24 border-t border-zinc-100 bg-zinc-50/60"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                  Menu
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  Popular right now.
                </h2>
              </div>
              <p className="text-sm text-zinc-500">
                Fresh picks from partner kitchens.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dishes.map(({ icon: Icon, name, note, price, badge }) => (
                <article
                  key={name}
                  className="group overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100/70">
                    <Icon className="size-16 text-brand-600/70 transition group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                      {badge}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900">
                        {name}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">{note}</p>
                    </div>
                    <p className="shrink-0 text-sm font-bold text-zinc-900">
                      {price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:pb-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-8 py-16 text-center shadow-xl shadow-brand-900/20 sm:px-16">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-16 size-64 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 size-64 rounded-full bg-pepper-400/20 blur-2xl"
            />
            <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hungry yet?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm leading-6 text-brand-50/90">
              Order in minutes. Eat well today.
            </p>
            <Link
              href="/login"
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sign in to order
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <Logo />
          <p className="text-xs text-zinc-500">
            © 2026 DBGFoodBoxNG. Lagos, Nigeria.
          </p>
        </div>
      </footer>
    </div>
  );
}
