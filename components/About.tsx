"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        I started learning programming when i was in high school as a hobby,
        then i studied computer programming at
        <span className="font-bold"> Ankara Yıldırım Beyazıt University</span>,
        and graguated in 2023 with a <span className="font-bold">3.1 GPA</span>.
        I also enrolled in a coding bootcamp on Udemy and learned{" "}
        <span className="font-bold">full-stack web development</span>. My core
        stack is{" "}
        <span className="font-bold">React, Next.js, Node.js, and MongoDB</span>,
        and I mostly use <span className="font-bold">TypeScript</span> and
        <span className="font-bold"> Prisma</span> in my projects.
      </p>
      <p>
        I am currently developing an android game using{" "}
        <span className="font-bold">React Native</span>, and it will be
        published soon on the{" "}
        <span className="font-bold">Google Play Store</span>. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-bold">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
