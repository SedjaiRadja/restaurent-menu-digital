"use client";
import { manrope } from "./Header";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.png";
import { Merriweather_Sans } from "next/font/google";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/15 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={250}
              height={200}
              priority
              className="h sm:w-28 md:w-32 lg:w-36"
            />
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden lg:flex items-center gap-8 text-xl text-white font-medium ${manrope.className}`}
          >
            <Link href="/" className="transition hover:text-slate-300">
              Accueil
            </Link>

            <Link href="/#a-propos" className="transition hover:text-slate-300">
              À propos
            </Link>

            <Link href="/#menu" className="transition hover:text-slate-300">
              Menu
            </Link>

            <Link href="/#contact" className="transition hover:text-slate-300">
              Contactez-nous
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl
          border border-[#D4AF37]
          bg-white/60
          text-[#E6D65A]
          shadow-sm
          transition
          hover:bg-[#FFFBE6]
          lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center
  bg-black transition-all duration-500 lg:hidden ${
    isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
  }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-[#DCCA87]"
          aria-label="Close menu"
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Links */}
        <ul className={`space-y-8 text-center ${manrope.className}`}>
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-4xl text-[#DCCA87] transition-colors duration-300 hover:text-white"
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              href="/#a-propos"
              onClick={() => setIsOpen(false)}
              className="text-4xl text-[#DCCA87] transition-colors duration-300 hover:text-white"
            >
              À propos
            </Link>
          </li>

          <li>
            <Link
              href="/#menu"
              onClick={() => setIsOpen(false)}
              className="text-4xl text-[#DCCA87] transition-colors duration-300 hover:text-white"
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-4xl text-[#DCCA87] transition-colors duration-300 hover:text-white"
            >
              Contactez-nous
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
