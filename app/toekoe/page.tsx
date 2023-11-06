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

var imageUrls: string[] = [];

for (let i = 1; i < 48; i++) {
  if (![11, 20, 24, 36].includes(i))
    imageUrls.push(`/assets/projects/toekoe/assets/${i}.png`);
  else imageUrls.push(`/assets/projects/toekoe/assets/${i}.gif`);
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: `About Fanrong's Studio | Discover a world of innovative design solutions, artistic craftsmanship, and cutting-edge creativity. Our design product studio showcases a diverse range of projects that inspire and captivate. Explore our portfolio today.`,
    keywords: `design, product, studio, portfolio, creativity, innovation, toekoe`,
  };
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <main className=" bg-black text-white">
      <section className="DMSans-VariableFont py-10 px-8 md:px-36 xl:px-24">
        <div className="">
          {imageUrls.map((imageClient, index, key) => (
            <div key={index} className="bg-white">
              <Image
                src={imageClient}
                loading="lazy"
                width="1000"
                height="1000"
                className="rounded-sm h-full w-full"
                alt={imageClient}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
