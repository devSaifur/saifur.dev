import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 z-50 flex list-none justify-center pt-3 text-sm font-semibold text-sky-200/95 transition-transform delay-150 duration-300 ease-in-out md:text-base">
      <ul className="relative my-auto flex gap-x-4 rounded-lg bg-stone-900 px-5 py-4 shadow-[0_10px_20px_rgba(15,_118,_110,_0.7)] md:gap-x-6">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            className="z-20 cursor-pointer rounded-xl px-4 py-1 md:px-5"
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
        <div
          id="background-slide"
          className="absolute left-0 top-2.5 h-4/6 rounded-lg bg-teal-700 transition-all delay-150 duration-300 ease-in-out"
        ></div>
      </ul>
    </nav>
  );
}
