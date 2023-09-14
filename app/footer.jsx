import Link from "next/link"
import Image from "next/image";

export default async function Footer() {
    return (
        <footer className="flex justify-between items-center py-8 font-DMMono_Medium mx-4 md:mx-32 xl:mx-16">
            <h1>&copy; Fanrong Studio 2023.</h1>
            <h2>+62 812 1000 2202</h2>
        </footer>
    )
}