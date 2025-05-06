"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      quote:
        "Our stay at Panorama Resort exceeded all expectations. The staff was incredibly attentive, the accommodations were luxurious, and the views were breathtaking. We can't wait to return!",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      quote:
        "From the moment we arrived, we felt like royalty. The resort's attention to detail is impeccable, and the activities were perfect for our family. It truly was a panoramic experience.",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "London, UK",
      quote:
        "Panorama Resort is aptly named. The serene environment, combined with world-class service and amenities, made for an unforgettable vacation. The spa treatments were particularly amazing!",
      image: "/images/testimonial-3.jpg",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 px-4 bg-[#FFF9FB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Guest Testimonials</h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Don't just take our word for it. Hear what our guests have to say about their experiences at Panorama
            Resort.
          </p>
        </div>

        <div className="relative bg-white rounded-lg shadow-lg p-6 md:p-12 overflow-hidden">
          <div>
            <div className="text-[#E91E63] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-6">{testimonials[currentTestimonial].quote}</p>
            <div>
              <h3 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
              <p className="text-gray-500">{testimonials[currentTestimonial].location}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F8BBD0] text-[#880E4F] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E91E63] hover:text-white transition-colors -ml-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F8BBD0] text-[#880E4F] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E91E63] hover:text-white transition-colors -mr-5"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg border border-[#F8BBD0]">
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-[#E91E63] w-4" : "bg-[#F8BBD0]"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
