"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Activities", href: "/activities" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ]

  // Logo image path - ensure it's never an empty string
  const logoPath = "/images/panorama-logo.png"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-black/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-20 w-64">
            {logoPath && (
              <Image
                src={logoPath || "/placeholder.svg"}
                alt="Panorama Resort Logo"
                fill
                className="object-contain"
                // Remove the onError handler
              />
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8BBD0] text-[#880E4F] px-4 py-2 rounded-lg hover:bg-[#E91E63] hover:text-white transition-colors font-medium"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2 text-gray-700 font-medium hover:text-primary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#F8BBD0] text-[#880E4F] px-4 py-2 rounded-lg hover:bg-[#E91E63] hover:text-white transition-colors text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
