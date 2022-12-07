import React from "react";

export default function Header() {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
         
          <span className="ml-3 text-xl">Admond</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto	md:ml-4 md:border-l md:border-gray-400 md:py-1 md:pl-4">
          <a className="mr-5 hover:text-gray-900">Projects</a>
          <a className="mr-5 hover:text-gray-900">Blogs</a>
          <a className="mr-5 hover:text-gray-900">Contact Me</a>
          <a className="mr-5 hover:text-gray-900">Beside</a>
        </nav>
        <a href='/admond-cv.pdf' download>
        <button className="nue mt-4 inline-flex items-center rounded border-0 py-1 px-3 text-base focus:outline-none md:mt-0">
          View CV
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </a>
      </div>
    </header>
  );
}
