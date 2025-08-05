import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="container py-2 flex max-w-156 mx-auto px-6 border rounded-lg">
        <nav className="text-xl space-x-5">
          <Link
            className="inline-block transform transition-transform duration-100 active:scale-90 hover:bg-gray-500 rounded py-1 px-2"
            href="/"
          >
            Home
          </Link>
          <Link className="inline-block transform  transition-transform duration-100 active:scale-90 hover:bg-gray-500 rounded py-1 px-2" href="/about">
            About
          </Link>
          <Link className="inline-block transform  transition-transform duration-100 active:scale-90 hover:bg-gray-500 rounded py-1 px-2" href="/projects">
            Projects
          </Link>
        </nav>
      </header>
    </>
  );
}
