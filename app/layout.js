import React from "react";
import Navbar from "./components/navbar";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { Orbitron } from "next/font/google";

const inter = Quicksand({ subsets: ["latin"] });
const orbit = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to JayBoNation",
  description: "@TheShamingOfJay's homebase for all things #JayBoNation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
