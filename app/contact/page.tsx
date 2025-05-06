"use client"

import Image from "next/image"
import WhatsAppButton from "@/components/whatsapp-button"
import GoogleMap from "@/components/google-map"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
        <Image src="/images/contact-hero.jpg" alt="Contact Us" fill className="object-cover opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We're here to help make your stay perfect. Contact us with any questions or to book your reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#E91E63]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">Reservations: +355 69 207 0062</p>
            <p className="text-gray-600">Front Desk: +355 69 207 0062</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#E91E63]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">Reservations: reservations@paradiseresort.com</p>
            <p className="text-gray-600">General Inquiries: info@paradiseresort.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#E91E63]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Rruga Teqes Mengel</p>
            <p className="text-gray-600">Elbasan 3006</p>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="bg-[#FFF9FB] p-8 rounded-lg shadow-md text-center mb-16 border border-[#F8BBD0]">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
          <p className="text-gray-600 mb-6">
            Visit our booking page to check availability and reserve your room at Panorama Resort.
          </p>
          <a
            href="https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-8 py-3 rounded-lg hover:bg-[#E91E63] hover:text-white transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Google Map Section - With more padding */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-[#E91E63] mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            Located in the beautiful city of Elbasan, Panorama Resort offers easy access to local attractions while
            providing a peaceful retreat from the bustle of everyday life.
          </p>
        </div>
        <div className="px-4 md:px-8 lg:px-16">
          <GoogleMap />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Find answers to our most commonly asked questions. If you don't see what you're looking for, please
              contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What are the check-in and check-out times?",
                answer:
                  "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.",
              },
              {
                question: "Is airport transportation available?",
                answer:
                  "Yes, we offer airport transportation for an additional fee. Please provide your flight details at least 48 hours prior to arrival to arrange pickup.",
              },
              {
                question: "Are pets allowed at the resort?",
                answer:
                  "We have designated pet-friendly rooms available. Please inform us at the time of booking if you plan to bring a pet. Additional fees and restrictions apply.",
              },
              {
                question: "Is Wi-Fi available at the resort?",
                answer:
                  "Yes, complimentary high-speed Wi-Fi is available throughout the resort, including all guest rooms and public areas.",
              },
              {
                question: "What dining options are available?",
                answer:
                  "We have multiple dining options including our main restaurant, beach bar & grill, and fine dining restaurant. Room service is also available 24/7.",
              },
              {
                question: "Do you offer special packages or promotions?",
                answer:
                  "Yes, we offer various seasonal packages and promotions. Please visit our website or contact our reservations team for current offers.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0]">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
