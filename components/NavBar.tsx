import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="mb-8 rounded-lg border border-[#eae7e7] bg-white px-5 py-3 shadow-[0px_6px_8px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-auto w-[100px]"
          priority
        />

        <div className="flex flex-1 justify-center gap-5">
          <Link
            href="/"
            className="rounded-lg border border-[rgb(240,85,13)] bg-white px-[30px] py-5 text-[25px] font-bold text-black transition-all duration-200 hover:bg-[rgb(240,85,13)] hover:text-white"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="rounded-lg border border-[rgb(240,85,13)] bg-white px-[30px] py-5 text-[25px] font-bold text-black transition-all duration-200 hover:bg-[rgb(240,85,13)] hover:text-white"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="rounded-lg border border-[rgb(240,85,13)] bg-white px-[30px] py-5 text-[25px] font-bold text-black transition-all duration-200 hover:bg-[rgb(240,85,13)] hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
