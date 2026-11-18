import type { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to DBGFoodBoxNG, delicious Nigerian meals delivered fresh to your doorstep.",
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-white px-6 py-12 sm:px-12 dark:bg-zinc-950">
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="animate-float absolute -top-32 -left-32 size-96 rounded-full bg-brand-300/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 -bottom-32 size-96 rounded-full bg-pepper-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:radial-gradient(rgba(5,150,105,0.05)_1px,transparent_1px)] [background-size:22px_22px] dark:[background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]"
      />

      <LoginForm />
    </main>
  );
}
