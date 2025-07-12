import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { AnimatedSection, AnimatedButton } from "./shared/AnimatedComponents";
import { ScrollAnimated, StaggeredList, StaggeredItem } from "./shared/ScrollAnimation";
import { SmoothLink } from "./shared/SmoothScroll";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-200 text-text">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <StaggeredItem>
            <ScrollAnimated className="lg:col-span-1">
              <h2 className="text-3xl font-display font-bold gradient-primary bg-clip-text text-transparent mb-4">
                EduVerse
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Empowering learners with high-quality courses from expert instructors across the globe. 
                Join our community and unlock your potential.
              </p>
              <div className="flex space-x-4">
                <AnimatedButton className="p-2 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-all duration-300 group">
                  <FaFacebook size={18} className="group-hover:scale-110 transition-transform" />
                </AnimatedButton>
                <AnimatedButton className="p-2 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-all duration-300 group">
                  <FaTwitter size={18} className="group-hover:scale-110 transition-transform" />
                </AnimatedButton>
                <AnimatedButton className="p-2 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-all duration-300 group">
                  <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
                </AnimatedButton>
                <AnimatedButton className="p-2 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-all duration-300 group">
                  <FaLinkedin size={18} className="group-hover:scale-110 transition-transform" />
                </AnimatedButton>
              </div>
            </ScrollAnimated>
          </StaggeredItem>

          {/* Quick Links */}
          <StaggeredItem>
            <ScrollAnimated>
              <h3 className="text-lg font-semibold mb-6 text-text">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <SmoothLink to="hero" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </SmoothLink>
                </li>
                <li>
                  <SmoothLink to="courses" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Courses
                  </SmoothLink>
                </li>
                <li>
                  <SmoothLink to="about" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </SmoothLink>
                </li>
                <li>
                  <SmoothLink to="contact" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </SmoothLink>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Become Instructor
                  </a>
                </li>
              </ul>
            </ScrollAnimated>
          </StaggeredItem>

          {/* Resources */}
          <StaggeredItem>
            <ScrollAnimated>
              <h3 className="text-lg font-semibold mb-6 text-text">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Blog
                  </a>
                </li>
              </ul>
            </ScrollAnimated>
          </StaggeredItem>

          {/* Contact & Newsletter */}
          <StaggeredItem>
            <ScrollAnimated>
              <h3 className="text-lg font-semibold mb-6 text-text">Stay Connected</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-muted text-sm">
                  <MdEmail size={16} className="text-primary-500" />
                  <span>hello@eduverse.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted text-sm">
                  <MdPhone size={16} className="text-primary-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted text-sm">
                  <MdLocationOn size={16} className="text-primary-500" />
                  <span>123 Learning St, Education City</span>
                </div>
              </div>
              
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-primary-500 transition-colors bg-gray-50"
                />
                <AnimatedButton className="w-full gradient-primary text-white text-sm px-4 py-3 rounded-lg hover:shadow-glow-hover transition-all duration-300 font-semibold">
                  Subscribe
                </AnimatedButton>
              </form>
            </ScrollAnimated>
          </StaggeredItem>
        </StaggeredList>

        {/* Bottom Bar */}
        <AnimatedSection 
          className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          variant="fadeInUp"
        >
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} EduVerse. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted hover:text-primary-500 transition-colors">Privacy</a>
            <a href="#" className="text-muted hover:text-primary-500 transition-colors">Terms</a>
            <a href="#" className="text-muted hover:text-primary-500 transition-colors">Cookies</a>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
