import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  imageUrls: string[];
  isActive?: boolean;
  alt?: string;
  delay?: number;
};

const ImageFadeSlider = ({
  imageUrls,
  isActive,
  alt = "",
  delay = 4500,
}: Props) => {
  const autoplay = useRef(
    Autoplay({
      delay,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
    },
    [Fade(), autoplay.current]
  );

  useEffect(() => {
    if (!emblaApi) return;
    if (isActive) {
      emblaApi.scrollTo(0); // شروع از اسلاید اول
      autoplay.current.play();
    } else {
      autoplay.current.stop();
    }
  }, [isActive, emblaApi]);

  const baseUrl = process.env.NEXT_PUBLIC_UPLOADS_BASE_URL;

  return (
    <div
      className="embla relative overflow-hidden w-full h-full select-none"
      ref={emblaRef}
    >
      <div className="embla__container flex select-none overflow-hidden w-full h-full">
        {imageUrls.map((url, index) => (
          <div
            className="embla__slide relative flex-[0_0_100%] w-full h-full select-none overflow-hidden"
            key={index}
          >
            <div className="absolute inset-0 bg-overlay-1 z-[1] select-none overflow-hidden" />
            <Image
              src={`${baseUrl}${url}`}
              alt={alt}
              fill
              className="object-cover select-none"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageFadeSlider;
