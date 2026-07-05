import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

const Contact = () => {
  return (
    <section id="contact">
      <div className="mt-12 flex flex-col justify-around gap-10 md:flex-row">
        <div className="p-5 text-left">
          <h1 className="text-[80px] text-[tomato] font-bold">Contact Us</h1>

          <p className="max-w-[1000px] text-[35px] text-[#555]">
            Have a suggestion in mind? We&apos;d love to hear from you. Send us
            a message and we&apos;ll respond as soon as possible.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image src={assets.mail_logo} alt="mail" width={30} height={30} />
              <p>radjarestaurent@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src={assets.phone_logo}
                alt="phone"
                width={30}
                height={30}
              />
              <p>+213 784 62 12 34</p>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src={assets.address_logo}
                alt="address"
                width={30}
                height={30}
              />
              <p>Oran, Algeria</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-[220px] flex-col justify-between gap-3 p-5">
          <form className="flex w-full flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="h-[50px] rounded-md border border-gray-300 p-[30px] text-[25px] outline-none focus:border-[tomato]"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="h-[50px] rounded-md border border-gray-300 p-[30px] text-[25px] outline-none focus:border-[tomato]"
            />

            <button
              type="submit"
              className="rounded-md bg-[tomato] p-[14px] text-[25px] font-semibold text-white transition hover:bg-[#9e1d06]"
            >
              Send
            </button>
          </form>

          <Link
            href="/"
            className="mt-4 w-full rounded-lg bg-[tomato] py-[25px] text-center text-[25px] font-semibold text-white transition hover:bg-[#555] md:w-[500px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
