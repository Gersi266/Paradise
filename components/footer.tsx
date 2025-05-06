import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  // Logo image path - ensure it's never an empty string
  const logoPath = "/images/panorama-logo.png"

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 border-t-4 border-[#F8BBD0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Resort Info */}
          <div className="flex flex-col items-start">
            <div className="mb-6 bg-white/5 p-4 rounded-lg shadow-inner w-full flex justify-center">
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
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience luxury and comfort in a breathtaking location. Our resort offers the perfect blend of
              relaxation and adventure.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/panorama.bar24ore/"
                className="bg-gray-800 hover:bg-[#E91E63] p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/panorama_resort_elbasan/"
                className="bg-gray-800 hover:bg-[#E91E63] p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[#F8BBD0] inline-block">Quick Links</h3>
            <ul className="space-y-3 columns-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Rooms", href: "/rooms" },
                { name: "Activities", href: "/activities" },
                { name: "Menu", href: "/menu" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name} className="break-inside-avoid">
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-500 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[#F8BBD0] inline-block">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-[#E91E63] transition-colors">
                  <MapPin className="text-white" size={18} />
                </div>
                <span className="text-gray-300 leading-tight">
                  Rruga Teqes Mengel
                  <br />
                  Elbasan 3006, Albania
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-[#E91E63] transition-colors">
                  <Phone className="text-white" size={18} />
                </div>
                <span className="text-gray-300">+355 69 207 0062</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-[#E91E63] transition-colors">
                  <Mail className="text-white" size={18} />
                </div>
                <span className="text-gray-300">info@panoramaresort.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Panorama Resort. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
