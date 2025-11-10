import { Component } from "react";

import Carousel from "@/components/Carousel";

export default function HomeGuestHouse() {
  return (
    <div>
      <div className="bg-off-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-brown text-center">
          Stay with Comfort and Warmth
        </h1>
        <p className="mt-4 text-lg text-center">
          Our guest house offers a peaceful retreat in the heart of Tissamaharama,
          close to Yala National Park.
        </p>
        <div className="mt-12">
          <Carousel />
        </div>
      </div>
    </div>
    </div>
  )
}
