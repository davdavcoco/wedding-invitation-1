"use client";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./Nav";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Fanrong Studio",
  description: `Explore Fanrong's Studio | Discover a world of innovative design solutions, artistic craftsmanship, and cutting-edge creativity. Our design product studio showcases a diverse range of projects that inspire and captivate. Explore our portfolio today.`,
  keywords: `design, product, studio, portfolio, creativity, innovation`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
