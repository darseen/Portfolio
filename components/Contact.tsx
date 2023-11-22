"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import sendEmail from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Contact me directly at{" "}
        <a href="mailto:darseen.dev@gmail.com" className="underline">
          darseen.dev@gmail.com
        </a>
        , or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error, data } = await sendEmail(formData);
          if (error) {
            alert(error);
            return;
          }

          alert("Email sent successfully");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={100}
          placeholder="Your Email"
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:opacity-100 transition-all dark:outline-none"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="h-52 my-2 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:opacity-100 transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
