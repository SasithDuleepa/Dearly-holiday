"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/images/1.png";
import image2 from "../../../public/images/2.png";
import image3 from "../../../public/images/3.png";
import Banner from "../../../public/images/dearly cover photos/gallery.png";

import Reel from "../../../public/images/dearly cover photos icons/gallery1.png"
import Camera from "../../../public/images/dearly cover photos icons/gallery2.png"
import Leaf from "../../../public/images/dearly cover photos icons/gallery3.png"

const images = [
  { src: image1, alt: "Guest House", category: "guest" },
  { src: image2, alt: "Cooking Class", category: "cooking" },
  { src: image3, alt: "Safari", category: "safari" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? images : images.filter(img => img.category === filter);

  return (
    <section className="">
        <section
        className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center bg-[#007200]"
      >


           <Image
                                        src={Reel}
                                        alt="Tree1"
                                        className="
                                          absolute bottom-0 sm:bottom-0 lg:bottom-0 left-0 z-0
                                          w-[600px] sm:w-[0px] md:w-[900px] lg:w-[1050px]
                                          hidden
                                           sm:block
                                        "
                                      />
                                        <Image
                                          src={Leaf}
                                          alt="Tree2"
                                          className="
                                            absolute top-0 right-0 z-0
                                            w-[220px] sm:w-[280px] md:w-[250px]  lg:w-[400px]
                                             sm:block
                                          "
                                        />
                                                    <Image
                                          src={Camera}
                                          alt="Jeep"
                                          className="
                                            absolute bottom-0 sm:right-5 lg:right-20 md:right-2 right-2 z-30
                                            w-[00px] sm:w-[200px] md:w-[250px] lg:w-[300px]
                                             sm:block
                                          "
                                        />
              <h1 className="text-4xl sm:text-7xl font-lora font-bold mb-6 mt-20 text-white text-center max-w-[80%] z-50">
             Captured Memories
            </h1>
                           <p className="text-white z-50 mb-8 max-w-[80%] text-center">
          Explore beautiful moments from our guest house, cooking experiences, and Yala safari tours.
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-6 text-center">


        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 mt-10">
          {["all", "guest", "cooking", "safari"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === cat
                  ? " text-white bg-[#38B000]"
                  : "border-gray-300 text-black hover:bg-gray-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
