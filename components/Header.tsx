"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BackToTop } from "./BackToTop";
import TransitionLink from "./ui/TransitionLink";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/resume", label: "Resume" },
  { path: "/favourites", label: "Favourites" },
  { path: "/blog", label: "Blog" },
  { path: "/workplace", label: "Workplace" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <TransitionLink
              className="text-xl font-light text-gray-900"
              href="/"
            >
              Dev On Wheels
            </TransitionLink>

            <div className="hidden md:flex space-x-8">
              {navItems.map(({ path, label }) => (
                <TransitionLink
                  key={path}
                  className={`text-sm font-light transition-colors hover:text-gray-900 ${
                    pathname === path
                      ? "text-gray-900 border-b border-gray-900"
                      : "text-gray-600"
                  }`}
                  href={path}
                >
                  {label}
                </TransitionLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map(({ path, label }) => (
                <TransitionLink
                  key={path}
                  className={`block px-3 py-2 text-sm font-light transition-colors ${
                    pathname === path
                      ? "text-gray-900 bg-gray-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  href={path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </TransitionLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      <BackToTop />
    </div>
  );
};
