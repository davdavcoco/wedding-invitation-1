// "use client";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Contact - Fanrong Studio",
        description: `Get in touch with Fanrong Studio for your design inquiries, project collaborations, or to learn more about our creative services. We're eager to hear from you!`,
        keywords: `contact, reach out, inquiries, collaboration, design studio, Fanrong Studio, contact information`,
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
