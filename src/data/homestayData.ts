// src/data/homestayData.ts
export interface Slide {
  image: string,
  titleTop: string;
  titleMain: string;
  features: string[];
  tags: string[];
  googleLink: string;
  airbnbLink: string;
}

export const slideContent: Slide[] = [
  {
    image: "/images/cheng-setia-classical-cozy-homestay/interior1.jpeg",
    titleTop: "Cheng Setia",
    titleMain: "Classical Cozy Homestay",
    features: ["5 Bedrooms, 3 Bathrooms", "Full Kitchen"],
    tags: ["Scenic View", "Modern Comfort", "Village Vibe"],
    googleLink: "",
    airbnbLink: ""
  },
  {
    image: '/images/cheng-baru-classical-cozy-homestay/interior.jpg',
    titleTop: "Cheng Baru",
    titleMain: "Classical Cozy Homestay",
    features: ["3 Bedrooms", "Private Hot Tub"],
    tags: ["Forest Edge", "Private Getaway", "Eco Style"],
    googleLink: "https://share.google/yXkk1o0RfNBe2u73H",
    airbnbLink: ""
  },
  {
    image: '/images/cheng-baru-classical-cozy-homestay/bedroom.jpg',
    titleTop: "Kampung Lapan",
    titleMain: "Classical Cozy Homestay",
    features: ["6 Bedrooms", "Infinity Pool"],
    tags: ["Ocean View", "Private Chef", "Sunset Spot"],
    googleLink: "",
    airbnbLink: ""
  }
];