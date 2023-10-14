import Link from "next/link"
import Image from "next/image";

export default async function Footer() {
    return (
        <section className="font-DMSans_Thin">
            <footer className="grid grid-cols-12 gap-8 px-8 md:px-24 xl:px-16 py-10">
                <div className="md:col-start-7 xl:col-start-7 col-span-12 xl:col-span-3 md:col-span-3">
                    <div className="text-sm font-thin text-white w-full">
                        Contact:
                        <br></br>
                        IG: Fanrong_Creative_Service
                        <br></br>
                        email: madebyfanrong@gmail.com
                        <br></br>
                        No: +6281 7525 5616
                    </div>
                </div>
                <div className="md:col-start-10 col-span-3 md:col-span-3 hidden xl:block md:block">
                    <div className="text-sm font-thin text-white">
                        &copy; Fanrong Creative Service
                    </div>
                </div>
            </footer>
        </section>
    )
}