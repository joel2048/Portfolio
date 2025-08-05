"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div initial="pageInitial" animate="pageAnimate"
        key={pathname}
        className="flex-grow"
        variants={{
        pageInitial: {
            opacity: 0
        },
        pageAnimate: {
            opacity: 1
        },
        }}
        exit={{ opacity: 0}}
        transition={{ duration: 1 }}
        >
        {children}
    </motion.div>
  );
}