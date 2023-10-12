// "use client";
import type { Metadata, ResolvingMetadata } from "next";
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
import toekoe from "../../public/assets/projects/toekoe/mockup_stock_apps_web.jpg";
import creabiz from "../../public/assets/projects/creabiz/mockup_stock_apps_web.jpg";
import gerbang_naga from "../../public/assets/projects/gerbang_naga/mockup_stock_apps_web.jpg";
import tais_timor from "../../public/assets/projects/tais_timor/mockup_stock_apps_web.jpg";
import grand_batang_city from "../../public/assets/projects/grand_batang_city/mockup_stock_apps_web.jpg";
import hooray from "../../public/assets/projects/hooray/mockup_stock_apps_web.jpg";

import InfiniteImageCarousel from "../infiniteimagecarousel";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About - Fanrong Studio",
    description: `About Fanrong's Studio | Discover a world of innovative design solutions, artistic craftsmanship, and cutting-edge creativity. Our design product studio showcases a diverse range of projects that inspire and captivate. Explore our portfolio today.`,
    keywords: `design, product, studio, portfolio, creativity, innovation`,
  };
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <main className=" bg-black text-white">
      {/* section 6 main projects */}
      <section className="DMSans-VariableFont px-8 md:px-24 xl:px-16">
        <div className=" py-10 bg-black block xl:inline-block md:inline-block">
          <h1 className="xl:text-7xl py-2 font-medium md:text-7xl sm:text-4xl text-5xl hidden md:block xl:block">
            Where iconic brand
          </h1>
          <h1 className="xl:text-7xl py-2 font-medium md:text-7xl sm:text-4xl text-5xl hidden md:block xl:block">
            designed authenticly.
          </h1>
          <h1 className="xl:text-7xl py-2 font-medium md:text-7xl text-3xl xl:hidden md:hidden sm:block">
            Where iconic brand designed authenticly.
          </h1>
        </div>
      </section>
      <div className="pb-3 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      <section className="DMSans-VariableFont px-8 md:px-24 xl:px-16">
        <div className="grid grid-cols-12 gap-8  py-10">
          {/* <div className="md:col-span-6"></div> */}
          <div className="md:col-start-7 xl:col-start-7 xl:col-span-3 md:col-span-3 col-span-12">
            <h5 className="text-xl font-medium md:text-xl DMSans-VariableFont">
              Fanrong is a brand and design office for driving change through
              creative problem solving
            </h5>
          </div>
          <div className="md:col-start-10 xl:col-start-10 xl:col-span-3 md:col-span-3 col-span-12">
            <h5 className="text-xl font-medium md:text-xl DMSans-VariableFont">
              We help business convey their narativeness with clarity,
              enchancing with their visual appeal, and captivating their
              audience
            </h5>
          </div>
        </div>
      </section>
      <div className="pb-1 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      <section className="DMSans-VariableFont px-8 md:px-24 xl:px-16">
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
      <section className="DMSans-VariableFont py-10 px-8 md:px-24 xl:px-16">
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
              src={gerbang_naga}
              className="rounded-sm object-cover h-full w-full"
              alt="gerbang naga portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Gerbang Naga</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:gap-4 md:gap-4 pb-0 xl:pb-20 md:pb-20 bg-black">
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={tais_timor}
              className="rounded-sm object-cover h-full w-full"
              alt="tais timor portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Tais Timor</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={grand_batang_city}
              className="rounded-sm object-cover h-full w-full"
              alt="grand batang city portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Grand Batang City</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 md:col-span-4 pb-8 lg:pb-0 md:pb-0">
            <Image
              src={hooray}
              className="rounded-sm object-cover h-full w-full"
              alt="hooray portfolio"
            />
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Hooray</h3>
              <a className="text-xl font-medium" href="/">
                +
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-1 bg-gradient-to-r from-orange-950 to-orange-700  border-r-black"></div>
      <section className="DMSans-VariableFont px-8 md:px-24 xl:px-16">
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
      <section className="DMSans-VariableFont px-8 md:px-24 xl:px-16">
        <div className="grid grid-cols-12 xl:gap-8  py-10">
          <div className="col-span-12 xl:flex xl:justify-between md:flex md:justify-between sm:text-center">
            <div className="col-span-10">
              <h3 className="text-4xl font-medium ">
                <div className="xl:inline-block align-middle text-center lg:text-left md:text-left sm:pb-8">
                  We&rsquo;re here to collaborate, schedule a meeting now
                </div>
              </h3>
            </div>
            <div className="col-span-2 text-center">
              <button className="bg-green-500 text-white rounded-full text-3xl font-bold py-2 px-8">
                <a href="https://wa.me/628175255616" className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 self-center"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <label>Whatsapp</label>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
