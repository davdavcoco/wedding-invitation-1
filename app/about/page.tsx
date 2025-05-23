// "use client";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
        description: `Learn more about Fanrong Studio's journey, our passionate team, and the core values that drive our innovative design solutions and artistic craftsmanship. Discover our story and what inspires our cutting-edge creativity.`,
        keywords: `about us, our story, design philosophy, team, studio values, craftsmanship, innovation, Fanrong Studio`,
    };
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
        <main className=" bg-black text-white">
            <section className="font-DMSans_Thin px-8 md:px-24 xl:px-16 text-center">
                <div className=" py-10 bg-black block xl:inline-block md:inline-block">
                    <h1 className="xl:text-7xl py-2 font-thin md:text-7xl sm:text-4xl text-5xl hidden md:block xl:block font-DMSans_Thin">Soon</h1>
                </div>
            </section>
        </main>
    );
}
