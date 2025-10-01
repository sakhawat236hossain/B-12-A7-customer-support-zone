import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-sm ">
      <div className="navbar bg-base-100  max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow hover:cursor-pointer"
            >
              <div className="flex">
                <div>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                  <li>
                    <a>Changelog</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Download</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </div>
                <div>
                  <button className="px-6 py-2 md:py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                    + New Ticket
                  </button>
                </div>
              </div>
            </ul>
          </div>

          <a className=" md:btn btn-ghost text-xl">CS — Ticket System</a>
        </div>
        <div className="hidden lg:flex items-center gap-4 hover:cursor-pointer navbar-end">
          <a href="">Home</a>
          <a href="">FAQ</a>
          <a href="">Changelog</a>
          <a href="">Blog</a>
          <a href="">Download</a>
          <a href="">Contact</a>
          <div>
            <button className="px-6 py-2 md:py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              + New Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
