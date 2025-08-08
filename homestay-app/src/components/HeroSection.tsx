import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaWhatsapp } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { SiAirbnb } from 'react-icons/si';
import { slideContent } from '../data/homestayData';


export default function HeroSection() {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: true, align: 'center' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplayRestart = useCallback(() => {
    if (emblaApi) emblaApi.plugins().autoplay?.reset();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.on('pointerDown', autoplayRestart);
  }, [emblaApi, autoplayRestart]);

  return (
    <section className="relative h-screen text-white overflow-hidden">
      {/* Embla Background Carousel */}
      <div className="embla absolute inset-0 z-0 h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slideContent.map((slide, index) => (
            <div
              className="embla__slide min-w-full h-full transition-opacity duration-1000 ease-in-out"
              key={index}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>


      {/* Content Overlay */}
      <div className="relative z-10 flex items-center h-full px-10 bg-black/40 transition-all duration-500">
        <div className="max-w-xl">
          <h1 className="text-6xl font-serif font-extrabold text-secondary drop-shadow-lg mt-2">
            {slideContent[selectedIndex]?.titleTop}
          </h1>
          <h1 className="text-6xl font-serif font-extrabold drop-shadow-lg">
            {slideContent[selectedIndex]?.titleMain}
          </h1>

          <ul className="mt-6 text-sm space-y-2 list-disc list-inside drop-shadow-lg">
            {slideContent[selectedIndex]?.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <button className="mt-6 px-8 py-3 bg-theme hover:brightness-110 rounded-lg font-semibold shadow-lg">
            Book Now
          </button>

          <div className="flex items-center gap-4 mt-6">
            <a
              href={slideContent[selectedIndex]?.googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl"
            >
              <FaGoogle />
            </a>
            <a
              href={slideContent[selectedIndex]?.airbnbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 text-2xl"
            >
              <SiAirbnb />
            </a>
          </div>

          <div className="flex gap-3 mt-6">
            {slideContent[selectedIndex]?.tags.map((tag, i) => (
    <span
      key={i}
      className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg 
                 border border-white/30 text-white px-6 py-2 rounded-full text-sm 
                 shadow-lg shadow-white/10 hover:shadow-white/30 
                 hover:scale-110 transition-all duration-300
                 hover:backdrop-blur-xl hover:border-white/50"
    >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              console.log('clicked mounted')
              scrollTo(index)
            }}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>


      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/60123229830?text=${encodeURIComponent(
          `${slideContent[selectedIndex].titleTop} - ${slideContent[selectedIndex].titleMain} - I am interested to book the homestay.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

    </section>
  );
}
