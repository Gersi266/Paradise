"use client"

import Link from "next/link"

export default function Activities() {
  // Featured activities data
  const featuredActivities = [
    {
      id: 1,
      name: "Swimming Pool",
      description: "Enjoy our refreshing swimming pool with stunning views of the surrounding landscape.",
      image: "/images/activity-1.png",
      icon: "M18 12H6M12 6V18",
    },
    {
      id: 2,
      name: "Spa & Wellness",
      description: "Relax and rejuvenate with our range of spa treatments and wellness activities.",
      image: "/images/activity-2.png",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M6 16h.01",
    },
    {
      id: 3,
      name: "Fine Dining",
      description: "Savor exquisite cuisine prepared by our talented chefs using the freshest local ingredients.",
      image: "/images/activity-4.png",
      icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
    },
  ]

  // Booking link
  const bookingLink = "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exciting Activities</h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Discover a world of adventure and relaxation with our wide range of activities. Whether you seek thrills or
            tranquility, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#F8BBD0]"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.name}</h3>
                <p className="text-gray-600">{activity.description}</p>
                <Link
                  href="/activities"
                  className="mt-4 inline-block w-full bg-[#F8BBD0] text-[#880E4F] text-center py-2 rounded-md font-medium hover:bg-[#E91E63] hover:text-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/activities"
            className="inline-block bg-[#F8BBD0] text-[#880E4F] px-8 py-3 rounded-lg font-semibold hover:bg-[#E91E63] hover:text-white transition-colors mt-8"
          >
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  )
}
