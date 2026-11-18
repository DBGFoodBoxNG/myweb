import type { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to DBGFoodBoxNG, fresh Nigerian meal boxes delivered hot across Lagos.",
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-white px-6 py-12 sm:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[28rem] rounded-full bg-cream-300/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 size-[28rem] rounded-full bg-coral-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(68,36,39,0.05)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <LoginForm />
    </main>
  );
}
