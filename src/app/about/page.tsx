import Link from "next/link";
import Head from "next/head";
import RobotoLayout from "@/components/RobotoLayout/RobotoLayout";

import TechStack from "@/components/TechStack/TechStack";

import FloatingPointer from "@/components/FloatingPointer/FloatingPointer";

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <div className="about-container">
          <div className="mt-4">
            <h2 className="text-4xl font-semibold">About</h2>
            <RobotoLayout>
            <p className="mt-2">
                Hi, I'm Joel Braun.<br/>
                Currently pursuing a Curtin University accredited Certificate in Software Engineering,
                I'm gaining practical skills to design and implement software solutions.
                <br/>
                <br/>
                Some of the technologies I use are:
            </p>
            <TechStack />
            <br/>
            <div className="flex items-center space-x-3 mb-3">
                <p>Check out my latest <Link
                className= "inline-block text-blue-300 hover:scale-110 transition-transform duration-200 ease-in-out"
                href="/projects"
                >Projects</Link></p>
                <FloatingPointer />
            </div>
            </RobotoLayout>
          </div>
        </div>
      </main>
 
    </>
  );
}
