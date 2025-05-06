"use client"

import { useState } from "react"
import { Bed, Users, Maximize2, Check, Coffee, Wifi, Tv, Wind, Utensils, Clock } from "lucide-react"
import SafeImage from "@/components/safe-image"
import WhatsAppButton from "@/components/whatsapp-button"
import PreviewModal from "@/components/preview-modal"

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  // Room data - only keeping Single, Double, and Family rooms
  const rooms = [
    {
      id: 1,
      name: "Single Room",
      description:
        "Our comfortable Single Rooms are perfect for solo travelers, offering all the essential amenities in a cozy, well-designed space.",
      price: 60,
      size: 35,
      capacity: 1,
      beds: 1,
      bathrooms: 1,
      bedrooms: 1,
      image: "/images/room-1.png",
      additionalImages: ["/images/room-1-alt1.png", "/images/room-1-alt2.png", "/images/room-1-alt3.png"],
      features: ["Private Bathroom", "Work Desk", "Free Wi-Fi", "Breakfast Included", "Air Conditioning", "Flat TV"],
      longDescription:
        "Experience comfort and convenience in our thoughtfully designed Single Rooms. Perfect for solo travelers or business guests, these rooms offer a peaceful retreat after a day of exploration or meetings. Each room is equipped with a comfortable single bed, a private bathroom with premium toiletries, and a dedicated work area. Enjoy modern amenities including free high-speed Wi-Fi, a flat-screen TV with international channels, and individually controlled air conditioning. Wake up to a complimentary breakfast each morning to start your day right.",
    },
    {
      id: 2,
      name: "Double Room",
      description:
        "Designed for couples or friends traveling together, our Double Rooms provide a perfect balance of comfort and style.",
      price: 67,
      size: 35,
      capacity: 2,
      beds: 1,
      bathrooms: 1,
      bedrooms: 1,
      image: "/images/room-2.png",
      additionalImages: ["/images/room-2-alt1.png", "/images/room-2-alt2.png", "/images/room-2-alt3.png"],
      features: ["Queen Bed", "Private Balcony", "Sitting Area", "Free Wi-Fi", "Mini Bar", "Air Conditioning"],
      longDescription:
        "Our Double Rooms offer the perfect blend of comfort and elegance for couples or friends traveling together. Each room features a plush queen-sized bed with premium linens, ensuring a restful night's sleep. Step onto your private balcony to enjoy morning coffee or evening drinks with beautiful views of the surrounding landscape. The thoughtfully designed sitting area provides a comfortable space to relax, read, or plan your next adventure. Additional amenities include a well-stocked mini bar, free high-speed Wi-Fi, and individually controlled air conditioning for your comfort.",
    },
    {
      id: 3,
      name: "Family Room",
      description:
        "Spacious and thoughtfully designed, our Family Rooms offer the perfect accommodation for families with children.",
      price: 80,
      size: 50,
      capacity: 4,
      beds: 3,
      bathrooms: 1,
      bedrooms: 2,
      image: "/images/room-3.png",
      additionalImages: ["/images/room-3-alt1.png", "/images/room-3-alt2.png", "/images/room-3-alt3.png"],
      features: ["King Bed + Twin Beds", "Living Area", "Dining Area", "Free Wi-Fi", "Mini Bar", "Air Conditioning"],
      longDescription:
        "Our Family Rooms are specially designed to accommodate families with children, offering ample space and thoughtful amenities for a comfortable stay. The main bedroom features a king-sized bed for parents, while a separate bedroom includes twin beds that kids will love. The spacious living area provides plenty of room for family time, and the dining area is perfect for enjoying meals together. The room includes a well-appointed bathroom with both shower and bathtub options. Additional amenities include free Wi-Fi, flat-screen TV, mini bar, and individually controlled air conditioning throughout the room.",
    },
  ]

  // Facilities categories from the facilities page
  const facilitiesCategories = [
    {
      title: "Room Amenities",
      description: "Enjoy these premium amenities in all our rooms for your comfort and convenience.",
      items: [
        { name: "Flat TV", icon: <Tv className="h-5 w-5" /> },
        { name: "Internet - WiFi", icon: <Wifi className="h-5 w-5" /> },
        { name: "Coffee and Tea", icon: <Coffee className="h-5 w-5" /> },
        { name: "Mini Bar", icon: <Utensils className="h-5 w-5" /> },
        { name: "Air Conditioning", icon: <Wind className="h-5 w-5" /> },
        { name: "Breakfast Included", icon: <Check className="h-5 w-5" /> },
      ],
    },
    {
      title: "Hotel Facilities",
      description: "Explore our extensive range of facilities designed to enhance your stay.",
      items: [
        { name: "Conference Hall", icon: <Tv className="h-5 w-5" /> },
        { name: "Swimming Pool", icon: <Wifi className="h-5 w-5" /> },
        { name: "Family Rooms", icon: <Users className="h-5 w-5" /> },
        { name: "Spa and Wellness Centre", icon: <Coffee className="h-5 w-5" /> },
        { name: "24-hour Front Desk", icon: <Check className="h-5 w-5" /> },
        { name: "Half Board", icon: <Utensils className="h-5 w-5" /> },
        { name: "Full Board", icon: <Utensils className="h-5 w-5" /> },
      ],
    },
    {
      title: "Hotel Services",
      description: "Discover our premium services designed to make your stay unforgettable.",
      items: [
        { name: "Beach Bar", icon: <Coffee className="h-5 w-5" /> },
        { name: "Restaurant", icon: <Utensils className="h-5 w-5" /> },
        { name: "Pool", icon: <Wifi className="h-5 w-5" /> },
        { name: "Lounge Bar", icon: <Coffee className="h-5 w-5" /> },
        { name: "Nightclub/DJ", icon: <Tv className="h-5 w-5" /> },
        { name: "Coffee Bar", icon: <Coffee className="h-5 w-5" /> },
      ],
    },
  ]

  // Additional information categories
  const additionalInfo = [
    {
      title: "Property Accessibility",
      icon: <Users className="h-5 w-5" />,
      items: ["Wheelchair accessible"],
    },
    {
      title: "Safety & Security",
      icon: <Check className="h-5 w-5" />,
      items: ["Fire extinguishers", "Security alarm", "24-hour security", "Card access"],
    },
    {
      title: "Languages Spoken",
      icon: <Tv className="h-5 w-5" />,
      items: ["English", "Italian", "Albanian"],
    },
  ]

  // Booking link
  const bookingLink = "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"

  // Function to open room modal
  const openRoomModal = (room: any) => {
    setSelectedRoom(room)
  }

  // Function to close room modal
  const closeRoomModal = () => {
    setSelectedRoom(null)
  }

  // Room details component for the modal
  const RoomDetails = ({ room }: { room: any }) => (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div className="text-2xl font-bold text-[#E91E63] flex items-baseline">
          {room.price}€ <span className="text-sm font-normal text-gray-500 ml-1">/ night</span>
        </div>
        <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0] px-4 py-3 rounded-lg shadow-sm">
          <div className="flex items-center text-sm text-[#880E4F]">
            <Clock className="h-4 w-4 mr-2 text-[#E91E63]" />
            <span>Check-in: 12:00</span>
          </div>
          <div className="flex items-center text-sm text-[#880E4F] mt-1.5">
            <Clock className="h-4 w-4 mr-2 text-[#E91E63]" />
            <span>Check-out: 11:00</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Room Details
        </h3>
        <div className="grid grid-cols-2 gap-y-4 mb-5">
          <div className="flex items-center text-gray-700">
            <Maximize2 className="h-5 w-5 text-[#E91E63] mr-2" />
            <span>{room.size} m²</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Users className="h-5 w-5 text-[#E91E63] mr-2" />
            <span>
              {room.capacity} {room.capacity === 1 ? "Person" : "People"}
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <Bed className="h-5 w-5 text-[#E91E63] mr-2" />
            <span>
              {room.beds} {room.beds === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="h-5 w-5 text-[#E91E63] mr-2 flex items-center justify-center">🚿</div>
            <span>1 Bathroom</span>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="h-5 w-5 text-[#E91E63] mr-2 flex items-center justify-center">🛏️</div>
            <span>
              {room.bedrooms} {room.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <Coffee className="h-5 w-5 text-[#E91E63] mr-2" />
            <span>Breakfast Included</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{room.longDescription}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Room Features
        </h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
          {room.features.map((feature: string, index: number) => (
            <li key={index} className="text-gray-600 flex items-center">
              <div className="h-5 w-5 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-2 flex-shrink-0">
                <Check className="h-3.5 w-3.5 text-[#D81B60]" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#C2185B] hover:to-[#B71C1C] text-white text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
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
          src="/images/rooms-hero.jpg"
          alt="Our Rooms"
          fill
          className="object-cover"
          fallbackSrc="/opulent-suite.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Luxurious Accommodations</h1>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto">
              Experience comfort and luxury in our carefully designed rooms with premium amenities and facilities
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF9FB] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">Our Rooms</h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from our selection of beautifully designed rooms, each offering a unique experience with the
              perfect blend of comfort, luxury, and style.
            </p>
          </div>

          {/* Update the room cards to display the new information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openRoomModal(room)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc="/opulent-suite.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-[#F8BBD0] text-[#880E4F] px-4 py-1.5 rounded-full font-semibold shadow-lg">
                    {room.price}€ / night
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#880E4F] mb-2 group-hover:text-[#D81B60] transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-5">{room.description}</p>

                  <div className="flex flex-wrap gap-y-3 mb-6">
                    <div className="w-1/2 flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-2">
                        <Maximize2 className="h-4 w-4 text-[#E91E63]" />
                      </div>
                      <span>{room.size} m²</span>
                    </div>
                    <div className="w-1/2 flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-[#FFF9FB] flex items-center justify-center mr-2">
                        <Users className="h-4 w-4 text-[#E91E63]" />
                      </div>
                      <span>
                        {room.capacity} {room.capacity === 1 ? "Person" : "People"}
                      </span>
                    </div>
                    <div className="w-1/2 flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-[#FFF9FB] flex items-center justify-center mr-2">
                        <Bed className="h-4 w-4 text-[#E91E63]" />
                      </div>
                      <span>
                        {room.beds} {room.beds === 1 ? "Bed" : "Beds"}
                      </span>
                    </div>
                    <div className="w-1/2 flex items-center text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-[#FFF9FB] flex items-center justify-center mr-2">
                        <span className="text-[#E91E63]">🚿</span>
                      </div>
                      <span>1 Bath</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0] p-3 rounded-lg mb-6 flex justify-between text-sm">
                    <div className="flex items-center text-[#880E4F]">
                      <Clock className="h-4 w-4 mr-1.5 text-[#E91E63]" />
                      <span>Check-in: 12:00</span>
                    </div>
                    <div className="flex items-center text-[#880E4F]">
                      <Clock className="h-4 w-4 mr-1.5 text-[#E91E63]" />
                      <span>Check-out: 11:00</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#880E4F] mb-3 flex items-center">
                      <span className="bg-[#F8BBD0] w-1 h-4 rounded mr-2"></span>
                      Room Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-2">
                      {room.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <div className="h-4 w-4 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-2 flex-shrink-0">
                            <Check className="h-3 w-3 text-[#D81B60]" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="block w-full bg-[#F8BBD0] text-[#880E4F] text-center font-semibold py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:bg-[#E91E63] hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Preview Modal */}
      {selectedRoom && (
        <PreviewModal
          isOpen={!!selectedRoom}
          onClose={closeRoomModal}
          title={selectedRoom.name}
          description={selectedRoom.description}
          images={[selectedRoom.image, ...selectedRoom.additionalImages]}
          fallbackImage="/opulent-suite.png"
          details={<RoomDetails room={selectedRoom} />}
        />
      )}

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">Our Facilities & Services</h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Panorama Resort, we pride ourselves on offering a comprehensive range of amenities and services to
              ensure your stay is as comfortable and enjoyable as possible.
            </p>
          </div>

          {facilitiesCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-[#880E4F] mb-3">{category.title}</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#FFF9FB] to-[#F8BBD0]/50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#F8BBD0] hover:to-[#FFF9FB]"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#E91E63] shadow-md">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-[#880E4F]">{item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">Additional Information</h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Learn more about our accessibility features, safety measures, and languages spoken by our staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F8BBD0]"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#F8BBD0] to-[#F48FB1] rounded-full flex items-center justify-center mr-4 text-[#E91E63] shadow-sm w-12 h-12">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#880E4F]">{info.title}</h3>
                </div>
                <ul className="space-y-3">
                  {info.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="h-5 w-5 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-[#D81B60]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-80 md:h-auto">
                <SafeImage
                  src="/images/cta-room.jpg"
                  alt="Book your stay"
                  fill
                  className="object-cover"
                  fallbackSrc="/penthouse-cityscape.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>
              <div className="p-10 md:p-14 flex items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Ready to Experience Paradise?
                  </h2>
                  <p className="text-white text-opacity-90 mb-8 text-lg">
                    Book your stay now and enjoy our special offers. Contact our reservation team for personalized
                    assistance.
                  </p>
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-8 py-4 rounded-lg hover:bg-[#E91E63] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Book Your Stay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
