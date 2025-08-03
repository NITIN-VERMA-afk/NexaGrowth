import {
  Linkedin as FaLinkedin,
  Twitter as FaTwitter,
  Instagram as FaInstagram,
} from "lucide-react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">NexaGrowth</h2>
          <p className="mt-3 text-gray-300">
            Helping businesses grow with smart strategies&#44; creative design, and
            data-driven marketing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="#hero"
                className="hover:text-[#10B981] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-[#10B981] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-[#10B981] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#cases"
                className="hover:text-[#10B981] transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-[#10B981] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex gap-4 text-gray-300 text-xl">
            <a href="#" className="hover:text-[#10B981] transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-[#10B981] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#10B981] transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-500 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NexaGrowth&apos; All rights reserved.
      </div>
    </footer>
  );
}
