import image from "next/image";
import Link from "next/link";

import RobotoLayout from "../RobotoLayout/RobotoLayout";

export default function Footer() {
  return (
    <>
      <RobotoLayout>
        <footer className="w-full bottom-0 text-white flex max-w-156 mx-auto px-6">
          <div className="py-3 px-3 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-xs sm:text-sm font-semibold sm:mt-1 mt-4">
              © 2025 Joel Braun -
              <a href="https://github.com/joel2048"> GitHub@joel2048</a>
            </p>
          </div>
        </footer>
      </RobotoLayout>
    </>
  );
}
