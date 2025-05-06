import HeroSlider from "@/components/hero-slider"
import FeaturedRooms from "@/components/featured-rooms"
import Activities from "@/components/activities"
import MenuPreview from "@/components/menu-preview"
import Testimonials from "@/components/testimonials"
import WhatsAppButton from "@/components/whatsapp-button"
import GoogleMap from "@/components/google-map"

export default function HomePage() {
  // Hero slider images with validated paths
  const slides = [
    {
      id: 1,
      image: "/images/hero-1.jpg",
      title: "Welcome to Panorama Resort",
      subtitle: "Experience luxury and comfort in a breathtaking location",
    },
    {
      id: 2,
      image: "/images/hero-2.jpg",
      title: "Unforgettable Experiences",
      subtitle: "Create memories that will last a lifetime",
    },
    {
      id: 3,
      image: "/images/hero-3.jpg",
      title: "Exquisite Dining",
      subtitle: "Taste the finest cuisine prepared by our world-class chefs",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with Slider */}
      <HeroSlider slides={slides} />

      {/* Welcome Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Panorama Resort</h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Nestled in a pristine location, our resort offers the perfect blend of luxury, comfort, and natural beauty.
            Whether you're seeking relaxation or adventure, we have everything you need for an unforgettable stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Luxury Accommodations</h3>
            <p className="text-gray-600">
              Experience comfort and elegance in our beautifully designed rooms and suites.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
            <p className="text-gray-600">
              Savor exquisite cuisine prepared by our talented chefs using the freshest ingredients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Exciting Activities</h3>
            <p className="text-gray-600">
              Enjoy a wide range of activities and experiences designed for all ages and interests.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <FeaturedRooms />

      {/* Menu Preview Section */}
      <MenuPreview />

      {/* Activities Section */}
      <Activities />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Google Map Section - Now with more padding and above CTA */}
      <section className="py-16">
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

      {/* CTA Section */}
      <section className="py-16 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-600">
            Book your stay now and discover why our guests keep coming back year after year.
          </p>
          <a
            href="https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-8 py-3 rounded-lg hover:bg-[#E91E63] hover:text-white transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
