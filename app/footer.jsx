import Link from "next/link"
import Image from "next/image";

export default async function Footer() {
    return (
        <section className="font-DMMono_Regular">
            <footer className="grid grid-cols-12 gap-8 px-8 md:px-32 xl:px-24 py-10 bg-black ">
                <div className="col-span-6 md:col-span-4"></div>
                <div className="col-span-3 md:col-span-4">
                    <p className="text-sm text-medium text-white">
                        Contact:
                        <br></br>
                        ID: @Fanrong_Creative_Service
                        email: fanrongstudio@gmail.com
                        No: +62 817-4344-464
                    </p>
                </div>
                <div className="col-span-3 md:col-span-4">
                    <p className="text-sm text-medium text-white">
                        &copy; Fanrong Creative Service
                    </p>
                </div>
            </footer>
        </section>
    )
}