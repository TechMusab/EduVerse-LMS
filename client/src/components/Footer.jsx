import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-muted text-text">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-display font-semibold text-primary-500 mb-4">
            EduVerse
          </h2>
          <p className="text-muted text-sm text-center">
            Empowering learners with high-quality courses from expert instructors across the globe.
          </p>
        </div>

       
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Courses</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">About</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary-500 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Help Center</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-md font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-primary-500 transition">
            <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-primary-500 transition">
            <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-primary-500 transition">
            <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-primary-500 transition">
            <FaWhatsapp size={24} />
            </a>
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 text-sm rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-500 hover:bg-primary-600 text-white text-sm px-4 py-2 rounded-md transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-muted text-center py-6 text-sm text-muted">
        &copy; {new Date().getFullYear()} EduVerse. All rights reserved.
      </div>
    </footer>
  );
}
