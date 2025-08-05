import Image from "next/image";
import Link from "next/link";

const technologies = [
  {
    name: "React",
    url: "https://reactjs.org/",
    icon: "/icons/React-icon.svg",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    icon: "/icons/next.svg",
  },
  {
    name: "TanStack Query",
    url: "https://tanstack.com/query/latest",
    icon: "icons/react-query-seeklogo.svg",
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    icon: "icons/vercel-seeklogo.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: "/icons/tailwind-css.svg",
  },
  {
    name: "Auth0",
    url: "https://auth0.com/",
    icon: "icons/auth0.svg",
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com/",
    icon: "icons/mysql.svg",
  },
  {
    name: "Redis",
    url: "https://redis.io/",
    icon: "icons/redis.svg",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    icon: "icons/mongodb.svg",
  },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 max-w-4xl mx-auto">
      {technologies.map((tech) => (
        <Link
          href={tech.url}
          key={tech.name}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center hover:scale-110 transition-transform"
        >
          <div className="w-16 h-16 relative mb-2">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="object-contain object-center"
            />
          </div>
          <span className="text-sm font-semibold">{tech.name}</span>
        </Link>
      ))}
    </div>
  );
}
