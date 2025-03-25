"use client"; // Add this for Next.js 13+ if using interactivity
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold hover:text-[#16f2b3]/80 transition-colors"
          >
            NIK
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          {[
            { href: "/#about", text: "ABOUT" },
            { href: "/#experience", text: "EXPERIENCE" },
            { href: "/#skills", text: "SKILLS" },
            { href: "/#education", text: "EDUCATION" },
            { href: "/blog", text: "BLOGS" },
            { href: "/#projects", text: "PROJECTS" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-white hover:text-pink-600 transition-colors duration-300 px-3 py-2"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (optional) */}
        <button className="md:hidden text-white">
          {/* Hamburger icon would go here */}
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
          <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
        </button>
      </div>

      {/* Mobile menu (optional) */}
      <div className="md:hidden">
        <ul className="flex flex-col space-y-2 py-4">
          {/* Same links as above */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;