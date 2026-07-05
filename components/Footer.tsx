import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col items-center gap-5 bg-[rgb(54,53,53)] px-[8vw] pt-20 pb-5 text-[whitesmoke]">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr]">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <Image
            src={assets.logo}
            alt="Logo"
            width={200}
            height={80}
            className="w-[200px] h-auto"
          />

          <p className="text-left text-[30px]">
            Savor the moment, enjoy the meal
          </p>

          <div className="mt-2 flex w-[250px] gap-5">
            <Image
              src={assets.facebook_icon}
              alt="Facebook"
              width={40}
              height={40}
              className="cursor-pointer"
            />

            <Image
              src={assets.twitter_icon}
              alt="Twitter"
              width={40}
              height={40}
              className="cursor-pointer"
            />

            <Image
              src={assets.linkedin_icon}
              alt="LinkedIn"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col gap-3">
          <h2 className="text-[40px] font-bold text-white">COMPANY</h2>

          <ul className="space-y-2 text-[30px] text-white">
            <li>
              <Link href="/" className="hover:text-[tomato] transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-[tomato] transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-[tomato] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <h2 className="text-[40px] font-bold text-white">GET IN TOUCH!</h2>

          <ul className="space-y-2 text-[30px] text-white">
            <li>+213797295617</li>
            <li>radjarestaurent@gmail.com</li>
            <li>Oran, Algeria</li>
          </ul>
        </div>
      </div>

      <hr className="my-2 h-px w-full border-none bg-white/40" />

      <p className="text-[23px]">
        Copyright © 2026 Radja. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
