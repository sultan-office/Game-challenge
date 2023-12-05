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
  title: "Game-changing infrastructure",
  description:
    "A decentralised, non-custodial social graph, empowering players to take full ownership of their gaming identities and enabling developers to build next-gen applications.",
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
