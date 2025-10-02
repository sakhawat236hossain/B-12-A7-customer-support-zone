import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-sm sticky top-0 z-50 bg-base-100">
      <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
        {/* ===== Left Side ===== */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
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
              <div className="flex flex-col gap-2">
                {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      className="relative px-3 py-2 text-gray-700 hover:text-[#632EE3]
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:h-[2px] after:w-0 after:bg-[#632EE3] after:transition-all hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <div>
                  <button className="w-full px-6 py-2 md:py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                    + New Ticket
                  </button>
                </div>
              </div>
            </ul>
          </div>

          {/* Logo */}
          <a className="md:btn btn-ghost text-xl">CS — Ticket System</a>
        </div>

        {/* ===== Right Side (Desktop Menu) ===== */}
        <div className="hidden lg:flex items-center gap-4 navbar-end">
          {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative px-3 py-2 text-gray-700 hover:text-[#632EE3]
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:h-[2px] after:w-0 after:bg-[#632EE3] after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}

          <button className="px-6 py-2 md:py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
