import type { Metadata } from "next";
import { suisseIntl, suisseScreen } from "../fonts";
import "./globals.css";
import { Navbar2 } from "@/components/Navbar2";
import { Footer4 } from "@/components/Footer4";

export const metadata: Metadata = {
  title: "Bernard Whimp Portfolio Prototype",
  description:
    "Bernard Whimp Portfolio Prototype built with CVI Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${suisseIntl.black.variable} 
        ${suisseIntl.bold.variable} 
        ${suisseIntl.semiBold.variable}
        ${suisseScreen.light.variable}
        ${suisseScreen.medium.variable}
        ${suisseScreen.regular.variable}
        ${suisseScreen.thin.variable}
      `}
    >
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar2 />
          <main>{children}</main>
          <Footer4 />
        </div>
      </body>
    </html>
  );
}
