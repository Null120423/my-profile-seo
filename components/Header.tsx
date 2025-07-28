"use client";

import {
  Briefcase,
  Building,
  FileText,
  Heart,
  PenTool,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { BackToTop } from "./BackToTop";
import { DarkModeToggle } from "./DarkModeToggle";
import TransitionLink from "./ui/TransitionLink";

const navItems = [
  { path: "/", icon: User, label: "Home" },
  { path: "/portfolio", icon: Briefcase, label: "Portfolio" },
  { path: "/resume", icon: FileText, label: "Resume" },
  { path: "/favourites", icon: Heart, label: "Favourites" },
  { path: "/blog", icon: PenTool, label: "Blog" },
  { path: "/workplace", icon: Building, label: "Workplace" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white fixed top-0 left-0 right-0 dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700  z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <TransitionLink
              className="text-xl font-bold text-gray-900 dark:text-white"
              href="/"
            >
              Trần Hữu Tài (Dev On Wheels)
            </TransitionLink>

            <div className="hidden md:flex space-x-8">
              {navItems.map(({ path, icon: Icon, label }) => (
                <TransitionLink
                  key={path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === path
                      ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                  href={path}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </TransitionLink>
              ))}
            </div>

            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-center space-x-1 p-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <TransitionLink
              key={path}
              className={`flex flex-col items-center p-2 rounded-md text-xs transition-colors ${
                pathname === path
                  ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              href={path}
            >
              <Icon size={16} />
              <span>{label}</span>
            </TransitionLink>
          ))}
        </div>
      </div>

      <BackToTop />
    </div>
  );
};
