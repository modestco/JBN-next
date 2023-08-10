import React from "react";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to JayBoNation",
  description: "@TheShamingOfJay's homebase for all things #JayBoNation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}><Navigation />
        {children}</body>
    </html>
  );
}
