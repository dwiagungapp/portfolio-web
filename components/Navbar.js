import { useState } from "react";
import Link from "next/link";

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-300 hover:text-amber-300">{title}</a>
          </Link>

          <button
            className="custom-toggler block lg:hidden focus:outline-none"
            type="button"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path
                className={`${isNavCollapsed ? "" : "hidden"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
              <path
                className={`${isNavCollapsed ? "hidden" : ""}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.414 5.414L12 13l7.586-7.586L21 7l-9 9-9-9 1.414-1.586z"
              />
            </svg>
          </button>

          <div
            className={`${
              isNavCollapsed ? "hidden" : ""
            } lg:block lg:flex lg:items-center`}
            id="navbarsExample09"
          >
            <div className="lg:flex-grow">
              <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:ml-auto">
                {links.map((value, index) => (
                  <Link key={index} href={value.link}>
                    <a className="px-3 py-2 text-lg text-gray-300 hover:text-amber-300">
                      {value.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
