"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock3, Mail } from "lucide-react";

import { cormorant, manrope, poppins } from "@/components/Header";

export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-b
        from-[#120F0B]
        via-[#0D0D0D]
        to-black
        text-white
        px-6
        py-20
        md:px-12
        lg:px-20
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Image
              src="/assets/logo.png"
              alt="Restaurant Logo"
              width={140}
              height={140}
              className="mb-6"
            />

            <p className={`leading-8 text-gray-400 ${manrope.className}`}>
              Une expérience gastronomique raffinée où la tradition, la passion
              et l&apos;élégance se rencontrent pour créer des moments
              inoubliables.
            </p>
          </div>

          {/* Navigation */}
          <div className="self-start">
            <h3
              className={`mb-6 text-4xl text-[#C8A96A] ${cormorant.className}`}
            >
              Navigation
            </h3>

            <ul className={`space-y-4 text-gray-400 ${poppins.className}`}>
              <li>
                <Link
                  href="/"
                  className="transition duration-300 hover:text-[#C8A96A]"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <a
                  href="#menu"
                  className="transition duration-300 hover:text-[#C8A96A]"
                >
                  Notre Menu
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-[#C8A96A]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#reservation"
                  className="transition duration-300 hover:text-[#C8A96A]"
                >
                  Réservation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="self-start">
            <h3
              className={`mb-6 text-4xl text-[#C8A96A] ${cormorant.className}`}
            >
              Nos coordonnées
            </h3>

            <div className={`space-y-4 text-gray-400 ${manrope.className}`}>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C8A96A]" />
                <span>Oran, Algérie</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C8A96A]" />
                <span>+213 555 00 00 00</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#C8A96A]" />
                <span>restaurant.safran@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={18} className="text-[#C8A96A]" />
                <span>12:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-5">
            {/* Facebook */}
            <a
              href="#"
              className="
      group
      flex h-16 w-16 items-center justify-center
      rounded-full
      border border-[#C8A96A]/20
      bg-gradient-to-br
      from-[#1A1A1A]
      to-[#111111]
      shadow-lg
      transition-all duration-500
      hover:-translate-y-2
      hover:border-[#C8A96A]
      hover:shadow-[0_15px_35px_rgba(200,169,106,0.35)]
    "
            >
              <Image
                src="/assets/facebook_icon.png"
                alt="Facebook"
                width={28}
                height={28}
                className="
        transition-all duration-500
        group-hover:scale-125
      "
              />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="
              group
              flex h-16 w-16 items-center justify-center
              rounded-full
              border border-[#C8A96A]/20
              bg-gradient-to-br
              from-[#1A1A1A]
              to-[#111111]
              shadow-lg
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#C8A96A]
              hover:shadow-[0_15px_35px_rgba(200,169,106,0.35)]
    "
            >
              <Image
                src="/assets/linkedin_icon.png"
                alt="LinkedIn"
                width={28}
                height={28}
                className="
        transition-all duration-500
        group-hover:scale-125
      "
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent" />

        {/* Copyright */}
        <div
          className={`mt-8 text-center text-sm text-gray-500 ${poppins.className}`}
        >
          © 2026 Restaurant Prestige • Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
