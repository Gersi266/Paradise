"use client"

import { useState } from "react"
import { Clock, MapPin, DollarSign } from "lucide-react"
import SafeImage from "@/components/safe-image"
import WhatsAppButton from "@/components/whatsapp-button"
import PreviewModal from "@/components/preview-modal"

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null)

  const activities = [
    {
      id: 1,
      name: "Swimming Pool",
      description: "Enjoy our refreshing swimming pool with stunning views of the surrounding landscape.",
      longDescription:
        "Our expansive swimming pool is the centerpiece of our resort, offering a refreshing escape from the summer heat. Surrounded by comfortable loungers and umbrellas, it's the perfect place to relax and soak up the sun. The pool area features a separate children's section, making it safe and enjoyable for guests of all ages. Our attentive pool staff is always on hand to provide fresh towels and assist with any requests. In the evening, the pool is beautifully illuminated, creating a magical atmosphere for a nighttime swim.",
      image: "/images/activity-1.png",
      additionalImages: ["/tropical-infinity-pool.png", "/images/activity-1.png", "/tropical-resort-poolside.png"],
      icon: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m18 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0v2H3V9M7 14h.01M17 14h.01",
      hours: "7:00 AM - 10:00 PM",
      location: "Main Resort Area",
      price: "Complimentary for guests",
    },
    {
      id: 2,
      name: "Spa & Wellness",
      description: "Relax and rejuvenate with our range of spa treatments and wellness activities.",
      longDescription:
        "Our award-winning spa offers a sanctuary of peace and tranquility where you can indulge in a variety of treatments designed to relax, rejuvenate, and restore. From traditional massages to innovative beauty treatments, our skilled therapists use only the finest products to ensure a truly luxurious experience. The spa features private treatment rooms, a steam room, sauna, and a relaxation lounge where you can unwind before or after your treatment. We also offer daily yoga and meditation classes for guests looking to enhance their wellness journey.",
      image: "/images/activity-2.png",
      additionalImages: ["/images/activity-2.png", "/tropical-infinity-pool.png", "/images/activity-4.png"],
      icon: "M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8M12 4v16M3 9h18",
      hours: "9:00 AM - 8:00 PM",
      location: "Wellness Wing",
      price: "Treatments start at 50€",
    },
    {
      id: 3,
      name: "Fitness Center",
      description: "Stay fit during your vacation with our fully equipped fitness center.",
      longDescription:
        "Maintain your fitness routine even while on vacation at our state-of-the-art fitness center. Equipped with the latest cardio and strength training equipment, our gym caters to all fitness levels. Personal trainers are available for one-on-one sessions to help you achieve your fitness goals. The fitness center also features a dedicated area for stretching and free weights. Floor-to-ceiling windows provide natural light and inspiring views of the resort grounds, making your workout session more enjoyable. Complimentary water and towels are provided for your convenience.",
      image: "/images/activity-3.png",
      additionalImages: ["/images/activity-3.png", "/images/activity-5.png", "/images/activity-1.png"],
      icon: "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3",
      hours: "24 hours",
      location: "Lower Level",
      price: "Complimentary for guests",
    },
    {
      id: 4,
      name: "Fine Dining",
      description: "Savor exquisite cuisine prepared by our talented chefs using the freshest local ingredients.",
      longDescription:
        "Experience culinary excellence at our signature restaurant, where our talented chefs create exquisite dishes that blend international techniques with local flavors. We source the freshest ingredients from nearby farms and markets, ensuring that each dish is of the highest quality. The restaurant offers an elegant yet comfortable atmosphere with both indoor and outdoor seating options. Our extensive wine list features selections from renowned vineyards around the world, carefully chosen to complement our menu. For a truly special experience, ask about our chef's table where you can enjoy a personalized tasting menu.",
      image: "/images/activity-4.png",
      additionalImages: ["/images/activity-4.png", "/images/menu-dinner.jpg", "/images/menu-lunch.jpg"],
      icon: "M3 3h18v18H3zM3 9h18M9 21V9",
      hours: "Breakfast: 7:00 AM - 10:30 AM, Dinner: 6:30 PM - 10:30 PM",
      location: "Main Building, First Floor",
      price: "À la carte",
    },
    {
      id: 5,
      name: "Outdoor Activities",
      description: "Participate in various outdoor activities including yoga, hiking, and more.",
      longDescription:
        "Embrace the natural beauty surrounding our resort with our range of outdoor activities. Join our morning yoga sessions on the beach as the sun rises, providing a peaceful start to your day. For the more adventurous, we offer guided hiking tours through scenic trails that showcase the region's diverse flora and fauna. Water enthusiasts can enjoy kayaking, paddleboarding, or snorkeling in our crystal-clear waters. Our experienced guides ensure that all activities are safe and suitable for different skill levels. Equipment rental is available for all activities.",
      image: "/images/activity-5.png",
      additionalImages: ["/images/activity-5.png", "/tropical-resort-poolside.png", "/images/activity-3.png"],
      icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
      hours: "Varies by activity",
      location: "Resort Grounds",
      price: "Some activities complimentary, others start at 25€",
    },
    {
      id: 6,
      name: "Nightlife",
      description: "Experience vibrant nightlife with our resident DJ playing the latest hits.",
      longDescription:
        "As the sun sets, our resort comes alive with vibrant nightlife options to suit every mood. Our main lounge features a resident DJ playing a mix of current hits and classic favorites, creating the perfect atmosphere for dancing the night away. For a more relaxed evening, visit our beachfront bar where you can enjoy handcrafted cocktails under the stars while listening to live acoustic performances. We also host special themed nights throughout the week, including beach parties, cultural performances, and wine tasting events. Our entertainment team ensures there's always something exciting happening after dark.",
      image: "/images/activity-6.png",
      additionalImages: ["/images/activity-6.png", "/images/activity-4.png", "/images/activity-2.png"],
      icon: "M8 7V3m8 4V3M3 21h18M3 10h18M3 7h18M3 14h18M3 18h18",
      hours: "8:00 PM - 1:00 AM",
      location: "Lounge & Beach Bar",
      price: "Entry complimentary for guests",
    },
  ]

  // Booking link
  const bookingLink = "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"

  // Function to open activity modal
  const openActivityModal = (activity: any) => {
    setSelectedActivity(activity)
  }

  // Function to close activity modal
  const closeActivityModal = () => {
    setSelectedActivity(null)
  }

  // Activity details component for the modal
  const ActivityDetails = ({ activity }: { activity: any }) => (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Details
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{activity.longDescription}</p>

        <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0] p-5 rounded-lg mb-4 space-y-4 shadow-sm">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
            <div>
              <span className="font-medium text-[#880E4F]">Hours:</span>
              <span className="ml-2 text-gray-600">{activity.hours}</span>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
            <div>
              <span className="font-medium text-[#880E4F]">Location:</span>
              <span className="ml-2 text-gray-600">{activity.location}</span>
            </div>
          </div>

          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
            <div>
              <span className="font-medium text-[#880E4F]">Price:</span>
              <span className="ml-2 text-gray-600">{activity.price}</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#E91E63] to-[#E91E63] hover:from-[#E91E63] hover:to-[#E91E63] text-white text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
      >
        Book Now
      </a>
    </div>
  )

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <SafeImage
          src="/images/activities-hero.png"
          alt="Resort Activities"
          fill
          className="object-cover"
          fallbackSrc="/tropical-infinity-pool.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Resort Activities</h1>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto">
              Discover a world of relaxation, adventure, and entertainment at Panorama Resort
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF9FB] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">Explore Our Activities</h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From relaxation to adventure, we offer a variety of activities to make your stay memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openActivityModal(activity)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(activity.name)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F8BBD0] rounded-full flex items-center justify-center mr-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#E91E63]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activity.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#880E4F] group-hover:text-[#880E4F] transition-colors duration-300">
                      {activity.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3">{activity.description}</p>

                  <div className="bg-[#FFF9FB] p-4 rounded-lg mb-6 space-y-2.5 text-sm border border-[#F8BBD0]">
                    <div className="flex items-center text-[#880E4F]">
                      <Clock className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" />
                      <span className="truncate">{activity.hours}</span>
                    </div>
                    <div className="flex items-center text-[#880E4F]">
                      <MapPin className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" />
                      <span className="truncate">{activity.location}</span>
                    </div>
                  </div>

                  <button className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md w-full text-center hover:bg-[#E91E63] hover:text-white">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Preview Modal */}
      {selectedActivity && (
        <PreviewModal
          isOpen={!!selectedActivity}
          onClose={closeActivityModal}
          title={selectedActivity.name}
          description={selectedActivity.description}
          images={[selectedActivity.image, ...selectedActivity.additionalImages]}
          fallbackImage={`/placeholder.svg?height=600&width=800&query=${encodeURIComponent(selectedActivity.name)}`}
          details={<ActivityDetails activity={selectedActivity} />}
        />
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
