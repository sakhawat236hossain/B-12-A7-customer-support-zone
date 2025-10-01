import React from "react";
import Fimg from "../assets/icon.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 justify-between items-center md:grid-cols-5 gap-8 px-5">
        {/* 1 */}
        <section>
          <h1 className="text-xl font-bold text-white mb-4">
            CS — Ticket System
          </h1>
          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type spec imen book.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h1 className="text-lg font-semibold text-white mb-3">Company</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Our Mission</a>
            </li>
            <li>
              <a href="">Contact Sales</a>
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h1 className="text-lg font-semibold text-white mb-3">Services</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="">Products & Services</a>
            </li>
            <li>
              <a href="">Customer Stories</a>
            </li>
            <li>
              <a href="">Download Apps</a>
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h1 className="text-lg font-semibold text-white mb-3">Information</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Join Us</a>
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h1 className="text-lg font-semibold text-white mb-3">
            Social Links
          </h1>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebook /> <a href="">@CS — Ticket System</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter /> <a href="">@CS — Ticket System</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin /> <a href="">@CS — Ticket System</a>
            </li>
            <li className="flex items-center gap-2">
              <img src={Fimg} alt="" />
              <a href="">support@cst.com</a>
            </li>
          </ul>
        </section>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-5 max-w-[1200px] mx-auto">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
