"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo/logo.png";
import { useState } from "react"; // import state

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="top-0 sticky">
      <nav className="font-DMSerifDisplay_Regular sticky bg-black text-white p-8 md:px-24 xl:px-16">
        <section className="DESKTOP-MENU hidden lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center">
          <Link href={"/"}>
            <div className="inline-flex justify-center">
              <Image
                src={logo}
                className="object-contain object-center w-auto h-6"
                // layout="responsive"
                alt="web portfolio 6"
              />
            </div>
          </Link>
          <ul className="flex justify-between items-center gap-8">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </section>
        <section className="MOBILE-MENU flex justify-between md:hidden lg:hidden">
          <div className="inline-flex justify-center">
            <Image
              src={logo}
              className="object-contain object-center w-auto h-6"
              // layout="responsive"
              alt="web portfolio 6"
            />
          </div>
          <div
            className="HAMBURGER-ICON space-y-2 self-center"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="CROSS-ICON px-8 py-8 flex justify-between">
              <div className="inline-flex justify-center self-center">
                <Image
                  src={logo}
                  className="object-contain object-center w-auto h-6"
                  // layout="responsive"
                  alt="web portfolio 6"
                />
              </div>
              <svg
                className="h-6 w-6 text=white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN px-8 flex flex-col justify-between">
              <li className="py-1 text-2xl">
                <a href="/about">About</a>
              </li>
              <li className="py-1 text-2xl">
                <a href="/portfolio">Services</a>
              </li>
              <li className="py-1 text-2xl">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        color:white;
        z-index: 10;
      }
    `}</style>
    </div>
  );
}
