"use client"

import Link from "next/link"

export default function FeaturedRooms() {
  // Featured rooms data
  const featuredRooms = [
    {
      id: 1,
      name: "Single Room",
      description: "Our comfortable Single Rooms are perfect for solo travelers.",
      price: 60,
      image: "/images/room-1.png",
      size: "35 sq meters",
      occupancy: "1 Person",
    },
    {
      id: 2,
      name: "Double Room",
      description: "Designed for couples or friends traveling together.",
      price: 67,
      image: "/images/room-2.png",
      size: "35 sq meters",
      occupancy: "2 People",
    },
    {
      id: 3,
      name: "Family Room",
      description: "Spacious accommodation perfect for families with children.",
      price: 80,
      image: "/images/room-3.png",
      size: "50 sq meters",
      occupancy: "2 Adults + 2 Children",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Accommodations</h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text description in top-left cell */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-[#E91E63]">Exceptional Comfort & Luxury</h3>
            <p className="text-gray-600 mb-4">
              Our resort offers a variety of beautifully designed accommodations to suit every preference and need. From
              ocean-view rooms to garden suites and family villas, each space is thoughtfully crafted to provide the
              perfect blend of comfort, luxury, and style.
            </p>
            <p className="text-gray-600 mb-6">
              All our accommodations feature premium amenities, including plush bedding, spacious bathrooms, and private
              balconies or terraces. Experience the ultimate in relaxation and indulgence during your stay with us.
            </p>
            <Link
              href="/rooms"
              className="inline-block bg-[#F8BBD0] text-[#880E4F] px-8 py-3 rounded-lg font-semibold hover:bg-[#E91E63] hover:text-white transition-colors mt-8"
            >
              View All Rooms
            </Link>
          </div>

          {/* Three featured rooms in the other cells */}
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#F8BBD0]"
            >
              <div className="relative h-64">
                {/* Use a div with background-image instead of Image component */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                  aria-label={room.name || "Room image"}
                ></div>
                <div className="absolute top-4 right-4 bg-[#F8BBD0] text-[#880E4F] px-3 py-1 rounded-full font-semibold">
                  ${room.price}/night
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{room.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#E91E63] mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                    {room.size}
                  </span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#E91E63] mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {room.occupancy}
                  </span>
                </div>
                <Link
                  href="/rooms"
                  className="mt-4 inline-block w-full bg-[#F8BBD0] text-[#880E4F] text-center py-2 rounded-md font-medium hover:bg-[#E91E63] hover:text-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
