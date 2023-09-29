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
      <section className="font-DMSerifDisplay_Regular">
        <div className="px-8 md:px-32 xl:px-24 py-10 bg-black">
          <h1 className="text-7xl py-2 font-medium md:text-7xl font-DMSerifDisplay_Regular">
            Where iconic brand
          </h1>
          <h1 className="text-7xl py-2 font-medium md:text-7xl font-DMSerifDisplay_Regular">
            designed authenticly.
          </h1>
        </div>
        <div className="pb-3 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      </section>
      <section className="font-DMSerifDisplay_Regular pb-1 border-b-orange-950 border-b-4">
        <div className="grid grid-cols-12 gap-8 px-8 md:px-32 xl:px-24 py-10">
          {/* <div className="md:col-span-6"></div> */}
          <div className="md:col-start-7 col-span-3 md:col-span-3">
            <h5 className="text-xl font-medium md:text-xl font-DMSerifDisplay_Regular">
              Fanrong a brand and design office for driving change through
              problem solving
            </h5>
          </div>
          <div className="md:col-start-10 col-span-3 md:col-span-3">
            <h5 className="text-xl font-medium md:text-xl font-DMSerifDisplay_Regular">
              We help business convey their narativeness with clarity,
              enchancing with their visual appeal, and captivating their
              audience
            </h5>
          </div>
        </div>
      </section>
      <section className="font-DMSerifDisplay_Regular pb-1 border-b-orange-950 border-b-4">
        <div className="grid grid-cols-12 gap-8 px-8 md:px-32 xl:px-24 py-10">
          <div className="col-span-12">
            <h3 className="text-2xl font-medium">Our Client</h3>
          </div>
          <div className="col-span-12">
            <InfiniteImageCarousel />
          </div>
        </div>
      </section>
      <section className=" font-DMSerifDisplay_Regular pb-1 border-b-orange-950 border-b-4">
        <div className="grid grid-cols-12 gap-4 md:px-32 xl:px-24 py-10 pb-20">
          <div className="col-span-12">
            <h3 className="text-2xl font-medium">Featured Projects</h3>
          </div>

          <div className="col-span-4">
            <Image
              src={toekoe}
              className="rounded-sm object-cover h-full w-full"
              alt="toekoe portfolio"
            />
            <h3 className="text-xl font-medium">Toekoe</h3>
          </div>
          <div className="col-span-4">
            <Image
              src={creabiz}
              className="rounded-sm object-cover h-full w-full"
              alt="creabiz portfolio"
            />
            <h3 className="text-xl font-medium">Creabiz</h3>
          </div>
          <div className="col-span-4">
            <Image
              src={toekoe}
              className="rounded-sm object-cover h-full w-full"
              alt="toekoe portfolio"
            />
            <h3 className="text-xl font-medium">Toekoe</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 md:px-32 xl:px-24 pb-20 bg-black">
          <div className="col-span-4">
            <Image
              src={creabiz}
              className="rounded-sm object-cover h-full w-full"
              alt="creabiz portfolio"
            />
            <h3 className="text-xl font-medium">Creabiz</h3>
          </div>
          <div className="col-span-4">
            <Image
              src={toekoe}
              className="rounded-sm object-cover h-full w-full"
              alt="toekoe portfolio"
            />
            <h3 className="text-xl font-medium">Toekoe</h3>
          </div>
          <div className="col-span-4">
            <Image
              src={creabiz}
              className="rounded-sm object-cover h-full w-full"
              alt="creabiz portfolio"
            />
            <h3 className="text-xl font-medium">Creabiz</h3>
          </div>
        </div>
      </section>
      <section className="font-DMSerifDisplay_Regular pb-1 border-b-orange-950 border-b-4">
        <div className="grid grid-cols-12 gap-8 px-8 md:px-32 xl:px-24 py-10">
          <div className="col-span-12">
            <h3 className="text-2xl font-medium">Our Expertise</h3>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-10">
            <Accordion type="single" collapsible>
              <div className="flex justify-around gap-8 pb-6">
                <AccordionItem
                  value="item-1"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">Strategy</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Meaningful impact begins with refining ideas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">Verbal Identity</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Your words reflect your character
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="flex justify-around gap-8 pb-6">
                <AccordionItem
                  value="item-3"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">Visual Identity</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Your visuals reflects your company’s Quality
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">Marketing Tools Design</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Luck happens when preparation meets opportunity
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="flex justify-around gap-8 pb-6">
                <AccordionItem
                  value="item-5"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">
                      Digital Design & Development
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Catch global-sized market opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">Activation</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Achieve goals with a well-planned content strategy.
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="flex justify-around gap-8 pb-6">
                <AccordionItem
                  value="item-7"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">Workshop & Class</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Investing in people and knowledge is the ultimate
                    investment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-8"
                  className="w-full border-orange-950"
                >
                  <AccordionTrigger>
                    <span className="text-2xl">Supervision</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Your Brand Visuals discussing partner
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
      <section className="font-DMSerifDisplay_Regular">
        <div className="grid grid-cols-12 gap-8 px-8 md:px-32 xl:px-24 py-10">
          <div className="col-span-12 flex justify-between">
            <div className="col-span-10">
              <h3 className="text-4xl font-medium">
                <span className="inline-block align-middle">
                  We&rsquo;re here to collaborate, schedule a meeting now
                </span>
              </h3>
            </div>
            <div className="col-span-2">
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
