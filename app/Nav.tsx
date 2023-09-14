import Link from "next/link"
import Image from "next/image";
import logo from "../public/assets/logo/logo.png"

export default async function Nav() {
  return (
    <nav className="flex justify-between items-center pr-2 font-DMMono_Medium mx-4 md:mx-48 xl:mx-16">
      <Link href={"/"}>
        <div className="w-36 h-36 self-center">
          <Image
            src={logo}
            className="rounded-lg "
            layout="responsive"
            alt="web portfolio 6"
          />
        </div>
      </Link>
      <ul className="flex justify-between items-center gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}