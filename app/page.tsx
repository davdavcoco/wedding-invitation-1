"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import gsap from "gsap";
// import { useEffect, useRef } from "react";
import toekoe from "../public/assets/projects/toekoe/mockup_stock_apps.jpg";
import creabiz from "../public/assets/projects/creabiz/mockup_stock_apps.jpg";

import creabiz2 from "../public/assets/clients/Creabiz.png";
import gbc from "../public/assets/clients/GBC.png";
import hafas from "../public/assets/clients/HaFas.png";
import huang from "../public/assets/clients/Huang.png";
import ibcsd from "../public/assets/clients/IBCSD.png";
import ikan_dorang from "../public/assets/clients/Ikan_Dorang.png";

import InfiniteImageCarousel from "./infiniteimagecarousel";

export default function Home() {
  const services = [
    {
      trigger: `Strategy`,
      content: `Meaningful impact begins with refining ideas.`,
    },
    {
      trigger: `Verbal Identity`,
      content: `Your words reflect your character`,
    },
  ];

  return (
    <main className=" bg-black text-white">
      {/* section 6 main projects */}
      <section className="font-DMSerifDisplay_Regular px-8 md:px-24 xl:px-16">
        <div className=" py-10 bg-black block xl:inline-block md:inline-block">
          <h1 className="xl:text-7xl py-2 font-medium md:text-7xl sm:text-4xl text-5xl hidden md:block xl:block">
            Where iconic brand
          </h1>
          <h1 className="xl:text-7xl py-2 font-medium md:text-7xl sm:text-4xl text-5xl hidden md:block xl:block">
            designed authenticly.
          </h1>
          <h1 className="xl:text-7xl py-2 font-medium md:text-7xl text-4xl xl:hidden md:hidden sm:block">
            Where iconic brand designed authenticly.
          </h1>
        </div>
      </section>
      <div className="pb-3 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      <section className="font-DMSerifDisplay_Regular px-8 md:px-24 xl:px-16">
        <div className="grid grid-cols-12 gap-8  py-10">
          {/* <div className="md:col-span-6"></div> */}
          <div className="md:col-start-7 xl:col-start-7 xl:col-span-3 md:col-span-3 col-span-12">
            <h5 className="text-xl font-medium md:text-xl font-DMSerifDisplay_Regular">
              Fanrong a brand and design office for driving change through
              problem solving
            </h5>
          </div>
          <div className="md:col-start-10 xl:col-start-10 xl:col-span-3 md:col-span-3 col-span-12">
            <h5 className="text-xl font-medium md:text-xl font-DMSerifDisplay_Regular">
              We help business convey their narativeness with clarity,
              enchancing with their visual appeal, and captivating their
              audience
            </h5>
          </div>
        </div>
      </section>
      <div className="pb-1 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      <section className="font-DMSerifDisplay_Regular px-8 md:px-24 xl:px-16">
        <div className="grid grid-cols-12 gap-8  py-10">
          <div className="col-span-12">
            <h3 className="text-2xl font-medium">Our Client</h3>
          </div>
          <div className="col-span-12">
            <InfiniteImageCarousel />
          </div>
        </div>
      </section>
      <div className="pb-1 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      {/* <section className="grid grid-cols-12 gap-8 py-0 lg:py-10 md:py-10"></section> */}
      <section className="font-DMSerifDisplay_Regular py-10 px-8 md:px-24 xl:px-16">
        <div className="grid grid-cols-12 xl:gap-4 md:gap-4 md:px-0 xl:px-0 pb-0 lg:pb-20 md:pb-20">
          <div className="col-span-12">
            <h3 className="text-2xl font-medium">Featured Projects</h3>
          </div>

          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={toekoe}
              className="rounded-sm object-cover h-full w-full"
              alt="toekoe portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Toekoe</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={creabiz}
              className="rounded-sm object-cover h-full w-full"
              alt="creabiz portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Creabiz</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={toekoe}
              className="rounded-sm object-cover h-full w-full"
              alt="toekoe portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Toekoe</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:gap-4 md:gap-4 pb-0 xl:pb-20 md:pb-20 bg-black">
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={creabiz}
              className="rounded-sm object-cover h-full w-full"
              alt="creabiz portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Creabiz</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={toekoe}
              className="rounded-sm object-cover h-full w-full"
              alt="toekoe portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Toekoe</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={creabiz}
              className="rounded-sm object-cover h-full w-full"
              alt="creabiz portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Creabiz</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-1 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      <section className="font-DMSerifDisplay_Regular px-8 md:px-24 xl:px-16">
        <div className="grid grid-cols-12 gap-0 xl:gap-8 md:gap-8 py-10">
          <div className="col-span-12">
            <h3 className="text-2xl font-medium">Our Expertise</h3>
          </div>
          {/* <div className="col-span-1"></div> */}
          <div className="col-start-1 col-end-13 xl:col-end-12 md:col-end-13 sm:col-end-11 sm:col-start-1 md:col-start-1 xl:col-start-2">
            <Accordion type="single" collapsible>
              <div className="xl:flex xl:justify-around gap-8 xl:pb-6">
                <AccordionItem value="item-1" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Strategy
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Meaningful impact begins with refining ideas.
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
                <AccordionItem value="item-2" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Verbal Identity
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Your words reflect your character
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
              </div>
              <div className="xl:flex xl:justify-around gap-8 xl:pb-6">
                <AccordionItem value="item-3" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Visual Identity
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Your visuals reflects your company’s Quality
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
                <AccordionItem value="item-4" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Marketing Tools Design
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Luck happens when preparation meets opportunity
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
              </div>
              <div className="xl:flex xl:justify-around gap-8 xl:pb-6">
                <AccordionItem value="item-5" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Digital Design & Development
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Catch global-sized market opportunities.
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
                <AccordionItem value="item-6" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Activation
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Achieve goals with a well-planned content strategy.
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
              </div>
              <div className="xl:flex xl:justify-around gap-8 xl:pb-6">
                <AccordionItem value="item-7" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Workshop & Class
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Investing in people and knowledge is the ultimate
                    investment.
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
                <AccordionItem value="item-8" className="w-full border-none">
                  <AccordionTrigger>
                    <span className="xl:text-2xl md:text-2xl text-xl">
                      Supervision
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Your Brand Visuals discussing partner
                  </AccordionContent>
                  <div className="pb-0.5 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
          {/* <div className="col-span-1"></div> */}
        </div>
      </section>
      <div className="pb-1 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      <section className="font-DMSerifDisplay_Regular px-8 md:px-24 xl:px-16">
        <div className="grid grid-cols-12 xl:gap-8  py-10">
          <div className="col-span-12 xl:flex xl:justify-between md:flex md:justify-between sm:text-center">
            <div className="col-span-10">
              <h3 className="text-4xl font-medium ">
                <p className="xl:inline-block align-middle text-center lg:text-left md:text-left sm:pb-8">
                  We&rsquo;re here to collaborate, schedule a meeting now
                </p>
              </h3>
            </div>
            <div className="col-span-2 text-center">
              <button className="bg-white text-black rounded-full text-3xl font-bold py-2 px-8">
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
