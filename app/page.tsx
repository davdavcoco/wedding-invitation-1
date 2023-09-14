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
    <main className="">
      {/* section 6 main projects */}
      <section className="xl:h-screen font-DMMono_Regular">
        <div className="mx-4 md:mx-32 xl:mx-16">
          <div className="flex flex-col pr-20 pl-20 md:p-10 md:pl-10 gap-8 lg:flex-row lg:flex-wrap">
            <div className="flex-1">
              <Image
                src={toekoe}
                className="rounded-sm object-cover h-full w-full"
                alt="toekoe portfolio"
              />
              <p>toekoe</p>
            </div>
            <div className="flex-1">
              <Image
                src={creabiz}
                className="rounded-sm object-cover h-full w-full"
                alt="creabiz portfolio"
              />
              <p>Creabiz</p>
            </div>
            <div className="flex-1">
              <Image
                src={toekoe}
                className="rounded-sm object-cover h-full w-full"
                alt="toekoe portfolio"
              />
              <p>toekoe</p>
            </div>
          </div>
          <div className="flex flex-col pr-20 pl-20 md:p-10 md:pl-10 gap-8 py-8 lg:flex-row lg:flex-wrap">
            <div className="flex-1">
              <Image
                src={creabiz}
                className="rounded-sm object-cover h-full w-full"
                alt="creabiz portfolio"
              />
              <p>Creabiz</p>
            </div>
            <div className="flex-1">
              <Image
                src={toekoe}
                className="rounded-sm object-cover h-full w-full"
                alt="toekoe portfolio"
              />
              <p>toekoe</p>
            </div>
            <div className="flex-1">
              <Image
                src={creabiz}
                className="rounded-sm object-cover h-full w-full"
                alt="creabiz portfolio"
              />
              <p>Creabiz</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-32">
        <section>
          <InfiniteImageCarousel />
        </section>
        {/* <div className="carousel-container overflow-hidden inline-flex min-w-full ">
          <div className="logo-container flex">
            <ul className="justify-between relative flex p-4 gap-4 min-w-full bg-black">
              <li>
                <Image
                  src={creabiz2}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={gbc}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={hafas}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={huang}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={ibcsd}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={ikan_dorang}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
            </ul>
            <ul className="justify-between flex p-4 min-w-full bg-black gap-4">
              <li>
                <Image
                  src={creabiz2}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={gbc}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={hafas}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={huang}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={ibcsd}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
              <li>
                <Image
                  src={ikan_dorang}
                  className="rounded-sm object-contain h-32 w-32"
                  alt="toekoe portfolio"
                />
              </li>
            </ul>
          </div>
          <div
            className="logo-container _2 "
            style={{
              transform:
                "translate3d(-95.8091%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          ></div>
        </div> */}
      </section>
      <section>
        {/* <div className="w-full bg-black">
          <div className="w-full inline-flex flex-nowrap">
            <ul className="flex justify-center md:justify-start gap-8 [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
            </ul>
          </div>
          <div className="w-full inline-flex flex-nowrap">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
              <li className="h-16">
                <Image
                  src={creabiz2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="toekoe portfolio"
                />
              </li>
            </ul>
          </div>
        </div> */}
      </section>
      <section className=" py-16">
        <div className="mx-4 md:mx-32 xl:mx-16 py-10">
          <h2 className="text-xl md:text-2xl font-DMMono_Regular">
            Through a deep understanding of our audience&apos;s makeup and
            motivations,
          </h2>
          <h1 className="text-4xl py-2 font-medium md:text-5xl font-DMMono_Regular">
            we design Digital Experiences
          </h1>
          <h1 className="text-4xl py-2 font-medium md:text-5xl font-DMMono_Regular">
            that connect with people.
          </h1>
        </div>

        <div className="mx-4 md:mx-32 xl:mx-16 font-DMMono_Regular">
          <Accordion type="single" collapsible>
            <div className="flex justify-around gap-8">
              <AccordionItem value="item-1" className="w-full">
                <AccordionTrigger>Strategy</AccordionTrigger>
                <AccordionContent>
                  Meaningful impact begins with refining ideas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="w-full">
                <AccordionTrigger>Verbal Identity</AccordionTrigger>
                <AccordionContent>
                  Your words reflect your character
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className="flex justify-around gap-8">
              <AccordionItem value="item-3" className="w-full">
                <AccordionTrigger>Visual Identity</AccordionTrigger>
                <AccordionContent>
                  Your visuals reflects your company’s Quality
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="w-full">
                <AccordionTrigger>Marketing Tools Design</AccordionTrigger>
                <AccordionContent>
                  Luck happens when preparation meets opportunity
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className="flex justify-around gap-8">
              <AccordionItem value="item-5" className="w-full">
                <AccordionTrigger>
                  Digital Design & Development
                </AccordionTrigger>
                <AccordionContent>
                  Catch global-sized market opportunities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="w-full">
                <AccordionTrigger>Activation</AccordionTrigger>
                <AccordionContent>
                  Achieve goals with a well-planned content strategy.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className="flex justify-around gap-8">
              <AccordionItem value="item-7" className="w-full">
                <AccordionTrigger>Workshop & Class</AccordionTrigger>
                <AccordionContent>
                  Investing in people and knowledge is the ultimate investment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="w-full">
                <AccordionTrigger>Supervision</AccordionTrigger>
                <AccordionContent>
                  Your Brand Visuals discussing partner
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </section>
      <section></section>
    </main>
  );
}
