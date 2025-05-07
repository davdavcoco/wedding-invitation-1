// "use client";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Contact - Fanrong Studio",
        description: `About Fanrong's Studio | Discover a world of innovative design solutions, artistic craftsmanship, and cutting-edge creativity. Our design product studio showcases a diverse range of projects that inspire and captivate. Explore our portfolio today.`,
        keywords: `design, product, studio, portfolio, creativity, innovation`,
    };
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return <main className=" bg-black text-white">Soon</main>;
}
