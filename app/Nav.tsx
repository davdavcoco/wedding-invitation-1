import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo/logo.png";

export default async function Nav() {
  return (
    <nav className="flex justify-between items-center font-DMMono_Medium bg-black text-white px-8 md:px-32 xl:px-24">
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
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
