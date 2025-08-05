"use client";

import { motion } from 'framer-motion';
import Image from "next/image";

export default function FloatingPointer() {
  return (
    <motion.div
      animate={{
        x: [10, -10, 10],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
    <div className="relative mb-1">
        <Image
            src="icons/hand.svg"
            alt=""
            width={25}
            height={25}
            className="object-contain object-center rotate-270"
        />
    </div>
    </motion.div>
  );
}