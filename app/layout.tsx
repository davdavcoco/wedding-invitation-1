// "use client";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./Nav";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
    title: "Wedding Title",
    description: `Wedding Description`,
    keywords: ``,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="">
                <Nav />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}
