import Image from "next/image";
import { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";

type Props = {
  imageUrls: string[];
  isActive?: boolean;
  alt?: string;
  delay?: number;
  className?: string;
};

const ImageFadeSlider = ({
  imageUrls,
  isActive,
  alt = "",
  delay = 3500,
  className = "",
}: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInstance = useRef<Carousel | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    // Initialize Bootstrap Carousel
    carouselInstance.current = new Carousel(carouselRef.current, {
      interval: delay,
      wrap: true,
      keyboard: false,
      pause: false,
      touch: false,
    });

    // Initialize Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!carouselInstance.current) return;

        if (entry.isIntersecting) {
          // When section is visible, start the carousel
          carouselInstance.current.cycle();
        } else {
          // When section is not visible
          carouselInstance.current.pause();
          // Reset to first slide immediately
          carouselInstance.current.to(0);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    // Start observing the carousel element
    observerRef.current.observe(carouselRef.current);

    return () => {
      if (carouselInstance.current) {
        carouselInstance.current.dispose();
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [delay]);

  const baseUrl = process.env.NEXT_PUBLIC_UPLOADS_BASE_URL;

  return (
    <div
      ref={carouselRef}
      className={`carousel slide carousel-fade ${className}`}
      data-bs-ride="carousel"
      data-bs-interval={delay}
      data-bs-pause="false"
      data-bs-touch="false"
      data-bs-keyboard="false"
    >
      <div className="carousel-inner">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="absolute inset-0 bg-overlay-1 z-[1] hidden md:block" />
            <Image
              src={`${baseUrl}${url}`}
              alt={alt}
              fill
              className="object-cover"
              priority
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageFadeSlider;
