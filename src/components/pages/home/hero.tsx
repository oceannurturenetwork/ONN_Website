"use client";

import { useEffect, useState, useRef } from "react";
import { AppImage, AppLinkButton } from "@/components/utils";
import { Heading1 } from "@/components/utils/typography";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const heroSlides = [
  {
    title:
      "The ocean sustains life – nourishing us, regulating climate and connecting ecosystems across the planet",
    image:
      "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746570517/onn/hero_1_upeazo.jpg",
  },
  {
    title:
      "We empower coastal communities with sustainable solutions where tradition, innovation, and a deep connection to nature thrive.",
    image:
      "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746570520/onn/hero_2_tc6cki.jpg", // Replace with an actual image
  },
  {
    title:
      "At Ocean Nurture Network, we strengthen coastal communities - inspired by people, sustained by nature",
    image:
      "https://res.cloudinary.com/dyo0ezwgs/image/upload/v1746570517/onn/hero_3_mntblp.jpg", // Replace with an actual image
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 },
    );

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Auto-slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section
      ref={heroRef}
      className="h-[550px] lg:h-[700px] w-full relative overflow-hidden"
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black-transparent z-[30]" />
      {/* Hero Image */}
      <div className="w-full h-full relative">
        <motion.div
          key={heroSlides[currentSlide].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <AppImage
            src={heroSlides[currentSlide].image}
            title="hero"
            alt="hero"
            className="w-full h-full"
            objectFit="cover"
          />
        </motion.div>
      </div>

      {/* Hero Text */}
      <div className="flex justify-center items-center w-full absolute top-0 left-0 z-[35] h-full">
        <div className="max-w-[1350px] w-full h-full flex flex-col gap-1 lg:gap-8 items-center justify-center hero-text">
          <Heading1 className="text-white flex flex-col gap-2 lg:max-w-[70%] text-center">
            {heroSlides[currentSlide].title.split(".").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </Heading1>

          <div className="mt-6">
            <AppLinkButton
              href="/about"
              className="flex gap-2 items-center rounded-full min-w-[150px]"
            >
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5" />
            </AppLinkButton>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-[40]">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full bg-white transition-all duration-300",
              currentSlide === index
                ? "w-12 h-3 rounded-lg"
                : "opacity-50 hover:opacity-100",
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
