import React from "react";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-indigo-600">
              <ShoppingBag size={16} className="text-white" />
            </div>
            NovaCart
          </div>

          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center text-sm text-slate-500 gap-1 sm:gap-0">
            <p>&copy; {new Date().getFullYear()} NovaCart.</p>
            <span className="hidden sm:inline-block mx-3 text-slate-300">
              |
            </span>
            <p>Build with React & Redux Toolkit.</p>

            {/* Hidden on mobile, visible as a separator on sm+ screens */}
            <span className="hidden sm:inline-block mx-3 text-slate-300">
              |
            </span>

            <p>
              Build by{" "}
              <a
                href="https://www.linkedin.com/in/abdur4code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:text-indigo-500 hover:underline transition-all"
              >
                Abdur Rahim
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
