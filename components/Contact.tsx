import { MapPin, Mail, Phone, Clock3, Send } from "lucide-react";
import Image from "next/image";
import { cormorant, manrope, poppins } from "@/components/Header";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#16120D] px-6 py-20 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="flex flex-1 flex-col items-center text-center">
          <h2
            className={`text-4xl md:text-5xl text-[#C8A96A] ${cormorant.className}`}
          >
            Réservation & Contact
          </h2>
          <Image
            src="/assets/spoon.png"
            alt="Décoration"
            width={45}
            height={45}
            className="my-5"
          />
          <p
            className={`mx-auto mt-6 max-w-2xl mb-10 text-gray-400 text-lg ${manrope.className}`}
          >
            Une question, une réservation ou un événement privé ? Notre équipe
            est à votre disposition pour vous offrir une expérience
            gastronomique exceptionnelle.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-[#2A2A2A] bg-[#141414] p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="
                    w-full rounded-xl border border-[#2A2A2A]
                    bg-[#1B1B1B]
                    px-5 py-4
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    transition
                    focus:border-[#C8A96A]
                  "
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="
                    w-full rounded-xl border border-[#2A2A2A]
                    bg-[#1B1B1B]
                    px-5 py-4
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    transition
                    focus:border-[#C8A96A]
                  "
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="
                    w-full rounded-xl border border-[#2A2A2A]
                    bg-[#1B1B1B]
                    px-5 py-4
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    transition
                    focus:border-[#C8A96A]
                  "
                />
              </div>

              <div>
                <textarea
                  rows={6}
                  placeholder="Votre message ou votre demande de réservation..."
                  className="
                    w-full rounded-xl border border-[#2A2A2A]
                    bg-[#1B1B1B]
                    px-5 py-4
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    transition
                    focus:border-[#C8A96A]
                    resize-none
                  "
                />
              </div>

              <button
                type="submit"
                className={`
                  flex items-center gap-3
                  rounded-full
                  border border-[#C8A96A]
                  bg-[#C8A96A]
                  px-8 py-4
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-transparent
                  hover:text-[#C8A96A]
                  ${poppins.className}
                `}
              >
                Envoyer le message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Informations */}
          <div className="flex flex-col justify-center gap-10">
            <div className="flex gap-5">
              <div className="rounded-2xl bg-[#141414] p-4 text-[#C8A96A]">
                <MapPin size={28} />
              </div>

              <div>
                <h3
                  className={`text-2xl text-[#C8A96A] ${cormorant.className}`}
                >
                  Adresse
                </h3>

                <p className={`mt-2 text-gray-400 ${manrope.className}`}>
                  Front de Mer,
                  <br />
                  Oran, Algérie
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="rounded-2xl bg-[#141414] p-4 text-[#C8A96A]">
                <Phone size={28} />
              </div>

              <div>
                <h3
                  className={`text-2xl text-[#C8A96A] ${cormorant.className}`}
                >
                  Téléphone
                </h3>

                <p className={`mt-2 text-gray-400 ${manrope.className}`}>
                  +213 555 12 34 56
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="rounded-2xl bg-[#141414] p-4 text-[#C8A96A]">
                <Mail size={28} />
              </div>

              <div>
                <h3
                  className={`text-2xl text-[#C8A96A] ${cormorant.className}`}
                >
                  Email
                </h3>

                <p className={`mt-2 text-gray-400 ${manrope.className}`}>
                  restaurant-safran@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="rounded-2xl bg-[#141414] p-4 text-[#C8A96A]">
                <Clock3 size={28} />
              </div>

              <div>
                <h3
                  className={`text-2xl text-[#C8A96A] ${cormorant.className}`}
                >
                  Horaires
                </h3>

                <p className={`mt-2 text-gray-400 ${manrope.className}`}>
                  Tous les jours
                  <br />
                  12:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
