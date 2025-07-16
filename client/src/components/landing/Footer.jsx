import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-surface text-text border-t border-border fade-in">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">EduVerse</h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Empowering learners with top-tier courses by global experts.
              Unlock your potential with us today.
            </p>
            <div className="flex space-x-3">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, idx) => (
                  <button
                    key={idx}
                    className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300 group hover:scale-110"
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Courses", "About Us", "Contact", "Become Instructor"].map((text, idx) => (
                <li key={idx}>
                  <a
                    href={`#${text.toLowerCase().replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-muted hover:text-primary group transition-all"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              {["Help Center", "Privacy Policy", "Terms of Service", "FAQ", "Blog"].map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-muted hover:text-primary group transition-all"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <div className="space-y-4 text-sm mb-6">
              <div className="flex items-center gap-3 text-muted">
                <MdEmail size={16} className="text-primary" />
                <span>hello@eduverse.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <MdPhone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <MdLocationOn size={16} className="text-primary" />
                <span>123 Learning St, Education City</span>
              </div>
            </div>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-gray-50 text-sm focus:outline-none focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white text-sm px-4 py-3 rounded-lg font-semibold hover:bg-primary-light hover:shadow-glow-hover transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted gap-4">
          <p>&copy; {new Date().getFullYear()} EduVerse. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
