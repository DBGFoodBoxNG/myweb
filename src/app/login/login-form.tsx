"use client";

import { useState, type FormEvent } from "react";
import Logo from "@/components/logo";

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = {
  email?: string;
  password?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------- Icons ---------- */

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 7.1 5.4a1.5 1.5 0 0 0 1.8 0L20 7.5" />
    </svg>
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <circle cx="12" cy="15.25" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EyeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4l16 16" />
      <path d="M9.9 5.9A9.9 9.9 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.2 3.9M6.1 7.3A16.7 16.7 0 0 0 2.5 12S6 18.5 12 18.5c1 0 2-.17 2.9-.47" />
      <path d="M9.9 10.1a3 3 0 0 0 4.2 4.2" />
    </svg>
  );
}

function SpinnerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`animate-spin ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        className="opacity-25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m4.5 12.5 5 5L19.5 7" />
    </svg>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.66-.21-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.26-2.09 3.56-5.17 3.56-8.81Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3a7.24 7.24 0 0 1-10.8-3.81H1.28v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.26 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.28a12 12 0 0 0 0 10.74l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.55 11.55 0 0 0 12 0 12 12 0 0 0 1.28 6.63l3.98 3.09A7.19 7.19 0 0 1 12 4.75Z"
      />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.94h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z" />
    </svg>
  );
}

/* ---------- Component ---------- */

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const next: FieldErrors = {};
    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!password) {
      next.password = "Password is required.";
    } else if (password.length < 8) {
      next.password = "Password must be at least 8 characters.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    try {
      // Simulate an API call, replace with your real auth endpoint.
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "peer w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:ring-4 dark:bg-white/5 dark:text-zinc-50 dark:placeholder:text-zinc-500";
  const inputOk =
    "border-zinc-200 focus:border-brand-500 focus:ring-brand-500/20 dark:border-zinc-700 dark:focus:border-brand-400 dark:focus:ring-brand-400/20";
  const inputBad =
    "border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500";

  return (
    <div className="relative w-full max-w-md animate-fade-up">
      {/* Logo */}
      <div className="mb-10 flex justify-center">
        <Logo />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Welcome back 👋
      </h1>
      <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        Sign in to your account to keep the flavors coming, hot, fresh, and
        right on time.
      </p>

      {status === "success" && (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800 dark:border-brand-800/60 dark:bg-brand-950/60 dark:text-brand-200"
        >
          <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-600 dark:text-brand-400" />
          <span>
            Login successful! Redirecting you to your dashboard…
          </span>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/60 dark:text-red-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4m0 3.5v.01" />
          </svg>
          <span>
            Something went wrong. Please check your credentials and try again.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${inputBase} peer ${errors.email ? inputBad : inputOk}`}
            />
            <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-zinc-400 peer-focus:text-brand-500" />
          </div>
          {errors.email && (
            <p
              id="email-error"
              className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`${inputBase} peer pr-12 ${
                errors.password ? inputBad : inputOk
              }`}
            />
            <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-zinc-400 peer-focus:text-brand-500" />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-zinc-400 transition hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:hover:text-zinc-300"
            >
              {showPassword ? (
                <EyeOffIcon className="size-4.5" />
              ) : (
                <EyeIcon className="size-4.5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p
              id="password-error"
              className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400"
            >
              {errors.password}
            </p>
          )}
        </div>

        {/* Remember + forgot */}
        <div className="flex items-center justify-between gap-4">
          <label className="flex cursor-pointer select-none items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span className="grid size-5 place-items-center rounded-md border border-zinc-300 bg-white transition peer-checked:border-brand-600 peer-checked:bg-brand-600 peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/25 dark:border-zinc-600 dark:bg-white/5">
              <CheckIcon className="size-3 scale-50 text-white opacity-0 transition-transform duration-150 [&_path]:stroke-[3]" />
            </span>
            Keep me signed in
          </label>
          <a
            href="#"
            className="text-sm font-semibold text-brand-600 transition hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:from-brand-700 hover:to-brand-600 hover:shadow-brand-600/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <SpinnerIcon className="size-4.5" />
              Signing you in…
            </>
          ) : (
            <>
              Sign in
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M4 12h16m0 0-6-6m6 6-6 6" />
              </svg>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            or continue with
          </span>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            <GoogleIcon className="size-4.5" />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            <FacebookIcon className="size-4.5 text-[#1877F2]" />
            Facebook
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
        New to DBGFoodBoxNG?{" "}
        <a
          href="#"
          className="font-semibold text-brand-600 transition hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300"
        >
          Create an account
        </a>
      </p>
    </div>
  );
}
