import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo/logo.png";

export default async function Nav() {
  return (
    <nav className=" font-DMMono_Medium bg-black text-white p-8 md:px-32 xl:px-24">
      <section className="DESKTOP-MENU hidden lg:flex lg:justify-between lg:items-center">
        <Link href={"/"}>
          <div className="inline-flex justify-center">
            <Image
              src={logo}
              className="object-contain object-center w-auto h-6"
              // layout="responsive"
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
      </section>
      <section className="MOBILE-MENU flex lg:hidden"></section>
    </nav>
  );
}
