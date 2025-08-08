// src/data/homestayData.ts
export interface Slide {
  image: string,
  titleTop: string;
  titleMain: string;
  features: string[];
  tags: string[];
  googleLink: string;
  airbnbLink: string;
  description: string;
}

export const slideContent: Slide[] = [
  {
    image: "/images/cheng-setia-classical-cozy-homestay/interior1.jpeg",
    titleTop: "Cheng Setia",
    titleMain: "Classical Cozy Homestay",
    features: ["5 Bedrooms, 3 Bathrooms", "Full Kitchen", "Authentic Japanese Tatami-Style"],
    tags: ["Scenic View", "Modern Comfort", "Minutes from Top Sights"],
    googleLink: "https://share.google/Zi5F4Esyhs8a5UEuf",
    airbnbLink: "https://www.airbnb.com/rooms/981801521015314646",
    description: 'Classical style homestay in Cheng Setia'

  },
  {
    image: '/images/cheng-baru-classical-cozy-homestay/interior.jpg',
    titleTop: "Cheng Baru",
    titleMain: "Classical Cozy Homestay",
    features: ["5 Bedrooms, 3 Bathrooms", "Private Parking"],
    tags: ["Forest Edge", "Private Getaway", "Eco Style"],
    googleLink: "https://share.google/yXkk1o0RfNBe2u73H",
    airbnbLink: "https://www.airbnb.com/rooms/21234435",
    description: 'Classical style homestay in Cheng Baru'

  },
  {
    image: '/images/cheng-baru-classical-cozy-homestay/bedroom.jpg',
    titleTop: "Kampung Lapan",
    titleMain: "Classical Cozy Homestay",
    features: ["3 Bedrooms, 2 Bathrooms", "Full Kitchen"],
    tags: [ "Modern Comfort", "Near A Famosa & Jonker Street", "Sunset Spot"],
    googleLink: "https://share.google/OY6IQnbIVtRr1nPW5",
    airbnbLink: "https://www.airbnb.com/l/WvN0iXRW",
    description: 'Classical style homestay in Kampung Lapan'

  }
];