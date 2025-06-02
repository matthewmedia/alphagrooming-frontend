"use client";
import { useState } from "react";
import { Button, Badge } from "@/ui";
import { Menu, X, Search, User, Scissors } from "lucide-react";
import Image from "next/image";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Fragrances", href: "/" },
    { name: "About", href: "/about" },
    { name: "Beard Care", href: "/" },
    { name: "Skincare", href: "/" },
    { name: "Reviews", href: "/" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-24 h-24 flex items-center justify-center rounded-lg ">
              <Image
                src="/logo.png"
                alt="Alpha Grooming Logo"
                width={100}
                height={100}
                className="object-contain object-center w-24 h-24"
                priority
                onClick={() => (window.location.href = "/")}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold text-slate-900 leading-tight">
                AlphaGrooming
              </h1>
              <p className="text-xs text-slate-500 leading-none">
                Modern Man&apos;s Hub
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Badge
              variant="secondary"
              className="bg-slate-900 text-white hover:bg-slate-800"
            >
              New
            </Badge>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-700 hover:text-slate-900 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
