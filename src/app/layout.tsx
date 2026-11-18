import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";

const body = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DBGFoodBoxNG",
    template: "%s - DBGFoodBoxNG",
  },
  description:
    "Fresh Nigerian meal boxes, cooked to order and delivered hot across Lagos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
