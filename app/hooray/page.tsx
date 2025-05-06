// "use client";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

var imageUrls: string[] = [];

for (let i = 1; i < 2; i++) {
    imageUrls.push(`/assets/projects/hooray/assets/${i}.jpg`);
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "",
        description: `Gerbang Naga Project Fanrong's Studio | Discover a world of innovative design solutions, artistic craftsmanship, and cutting-edge creativity. Our design product studio showcases a diverse range of projects that inspire and captivate. Explore our portfolio today.`,
        keywords: `design, product, studio, portfolio, creativity, innovation, gerbang naga`,
    };
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
        <main className=" bg-black text-white">
            <section className="DMSans-VariableFont py-10 px-8 md:px-36 xl:px-24">
                <div className="">
                    {imageUrls.map((imageClient, index, key) => (
                        <div key={index} className="bg-white mt-2">
                            <Image src={imageClient} loading="lazy" width="1000" height="1000" className="rounded-sm h-full w-full" alt={imageClient} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
