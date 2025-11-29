import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function AIFEFooter() {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-900 to-black text-white/80 pt-14 pb-8">
      
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-semibold text-white">AI for Everyone</h2>
          <p className="text-xs text-white/50 mt-1">Powered by TinkerHub</p>

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            We aim to help learners, educators, and innovators understand 
            artificial intelligence responsibly and creatively.
          </p>

          {/* Contact */}
          <div className="mt-5 space-y-2 text-sm">
            <p className="hover:text-blue-300 transition">📞 +91 98765 43210</p>
            <p className="hover:text-blue-300 transition">📧 hello@aife.org</p>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <FooterLink label="About AI for Everyone" href="/about" /> <br/>
            <FooterLink label="Why AI Literacy?" href="/why-ai-literacy" /><br />
            <FooterLink label="Stories" href="/stories" /><br/>
            <FooterLink label="Events & Meetups" href="/events" />
          </ul> 
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-3">Helpful Links</h3>
          <ul className="space-y-2 text-sm">
            <FooterLink label="Responsible AI Guide" href="/responsible-ai" /><br/>
            <FooterLink label="Ask a Question" href="/ask" /><br/>
            <FooterLink label="Resources" href="/resources" /><br/>
            <FooterLink label="TinkerHub Website" href="https://tinkerhub.org/" external />
          </ul>
        </div>

        {/* Newsletter Box */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-3">
            Subscribe for Updates
          </h3>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your Email"
              className="
                px-4 py-2 rounded-lg bg-white/10 backdrop-blur-xl 
                border border-white/20 text-white text-sm
                placeholder-white/50 focus:outline-none
              "
            />
            <button
              className="
                px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 
                transition shadow-md hover:shadow-blue-400/40 text-sm
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center mt-10 space-x-4 text-xl">
        <SocialIcon Icon={FaFacebook} href="https://facebook.com/aife" />
        <SocialIcon Icon={FaTwitter} href="https://twitter.com/aife" />
        <SocialIcon Icon={FaInstagram} href="https://instagram.com/aife" />
        <SocialIcon Icon={FaYoutube} href="https://youtube.com/aife" />
        <SocialIcon Icon={FaLinkedin} href="https://linkedin.com/company/aife" />
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} AI for Everyone — Hosted by TinkerHub.
        <span className="block mt-1 text-blue-300 animate-pulse">
          Made with ❤️ from TinkerHub to the community.
        </span>
      </div>

    </footer>
  );
}

/* ========================= */
/* Reusable Components       */
/* ========================= */

function FooterLink({ label, href, external = false }) {
  const base =
    "relative group hover:text-blue-300 transition inline-block cursor-pointer";

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={base}>
      {label}
      <Underline />
    </a>
  ) : (
    <Link to={href} className={base}>
      {label}
      <Underline />
    </Link>
  );
}

function Underline() {
  return (
    <span
      className="
        block w-0 h-[2px] bg-blue-400 mt-0.5
        group-hover:w-full transition-all duration-300
      "
    ></span>
  );
}

function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-blue-500 hover:text-white hover:scale-110
        transition-all duration-300
      "
    >
      <Icon />
    </a>
  );
}
