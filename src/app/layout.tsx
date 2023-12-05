import type { Metadata } from "next";
import { Lexend, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-robotoMono",
  weight: ["500"],
});
const integralCf = localFont({
  src: "../../public/font/integralcf-regular.woff",
  display: "swap",
  variable: "--font-integralCf",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${integralCf.variable} ${robotoMono.variable}`}
    >
      <body className="font-lexend bg-black">
        <main>{children}</main>
      </body>
    </html>
  );
}
