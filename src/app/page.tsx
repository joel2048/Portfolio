"use client"
import Link from "next/link";
import Head from "next/head";

import RobotoLayout from "@/components/RobotoLayout/RobotoLayout";

import { motion } from 'framer-motion';

import Image from "next/image";

import { Pixelify_Sans, Bytesized  } from "next/font/google";

const byte = Bytesized({ subsets: ['latin'], weight: "400" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className="items-center">
        <div>
          <div className="intro-container flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8 mt-12">
            <motion.div initial="hidden" animate="visible"
                    variants={{
                        hidden: {
                            x: 150, y: 0,
                            scale: .6,
                            opacity: 0
                        },
                        visible: {
                            x: 0, y: 0,
                            scale: 1,
                            opacity: 1,
                            transition: {
                            delay: .4
                            }
                        },
                    }}>
              <h1 className="sm:text-7xl text-4xl font-semibold text-white">
                Hi, I'm Joel Braun
              </h1>
              <h2 className={`${byte.className} sm:text-4xl text-2xl font-semibold text-white ml-1`}>
                Fullstack Developer
              </h2>
            </motion.div>
            <Image 
              src="/IMG_2784.png"
              alt="image"
              width={200}
              height={200}
              className="sm:mt-7 rounded-xl"></Image>
          </div>
        <div className="about-container mt-3 sm:mt-20">
            <RobotoLayout>
              <br />
              <p className="sm:text-xl font-normal text-white">
                Currently pursuing a Curtin University accredited Certificate in
                Software Engineering.
                <br />
                {/* <br />
                The main technologies I use include ReactJS, NextJS, MySQL,
                MongoDB
                <br /> */}
                <br />
                <Link href="/about"
                className=
                "inline-block text-blue-300 hover:scale-110 transition-transform duration-200 ease-in-out mb-5">
                  Learn more...
                </Link>
              </p>
            </RobotoLayout>
          </div>
        </div>
      </main>
    </>
  );
}
