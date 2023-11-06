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
  return <main className=" bg-black text-white">Soon</main>;
}
