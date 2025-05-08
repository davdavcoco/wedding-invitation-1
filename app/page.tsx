// "use client";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import toekoe from "../public/assets/projects/toekoe/mockup_stock_apps_web.jpg";
import creabiz from "../public/assets/projects/creabiz/mockup_stock_apps_web.jpg";
import gerbang_naga from "../public/assets/projects/gerbang_naga/mockup_stock_apps_web.jpg";
import tais_timor from "../public/assets/projects/tais_timor/mockup_stock_apps_web.jpg";
import grand_batang_city from "../public/assets/projects/grand_batang_city/mockup_stock_apps_web.jpg";
import hooray from "../public/assets/projects/hooray/mockup_stock_apps_web.jpg";

import InfiniteImageCarousel from "./infiniteimagecarousel";

const phoneNumber = "6285730265328";
const defaultMessageEN = "Hello, I'm interested in your services. Can we schedule a meeting?";

export default function Home() {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessageEN)}`;

    return (
        <main className="themename min-w-full w-full min-h-screen">
            {" "}
            {/* Added a background for better visualization */}
            <ul>
                <li className="themename-cover container-mobile ">
                    <div className="workspace cover">
                        {/* Your main content goes here */}
                        {/* More sections of your content */}
                        <div className="content h-full w-full">
                            <div className="pt-4 pb-20 h-full w-full flex flex-col justify-content-center align-items-center">
                                <div className="mt-4 h-full w-full mb-auto text-center">
                                    <div className="text-sm text-white ">The Wedding Of</div>
                                    <div className="text-6xl text-white font-E111Viva">Samuel & Esther</div>
                                </div>
                                <div className="w-full mx-auto text-center">
                                    <div className="mx-auto max-w-xs text-center mb-3 p-2 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg ">
                                        <div className="text-sm">
                                            Kepada Yth.
                                            <br />
                                            Bapak/Ibu/Saudara/i
                                            <br />
                                        </div>
                                        <div className="guestName-slot editable color-accent font-bold">Nama Tamu</div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section 6 main projects */}
                </li>
            </ul>
        </main>
    );
}
