import { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://picsum.photos/seed/factory1/1600/700",
    title: "Smart Factory Transformation",
    description: "현장 중심 디지털 전환 솔루션 구축",
  },
  {
    image: "https://picsum.photos/seed/factory2/1600/700",
    title: "Industrial AI Platform",
    description: "제조 산업 맞춤형 AI 서비스 제공",
  },
  {
    image: "https://picsum.photos/seed/factory3/1600/700",
    title: "MES · ERP Integration",
    description: "데이터 기반 운영 최적화 시스템",
  },
];

export function HeroSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggleAutoplay = () => {
    if (!sliderRef.current) return;

    if (isPlaying) sliderRef.current.slickPause();
    else sliderRef.current.slickPlay();

    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="relative overflow-hidden">
      <Slider
        ref={sliderRef}
        dots={false}
        infinite
        autoplay={isPlaying}
        autoplaySpeed={4500}
        speed={700}
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        beforeChange={(_, next) => setActiveIndex(next)}
      >
        {slides.map((slide) => (
          <div key={slide.image}>
            <div className="relative h-[500px] w-full">
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="mb-4 text-5xl font-bold tracking-tight">{slide.title}</h1>
                <p className="max-w-2xl text-lg text-white/85">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        type="button"
        aria-label="이전 슬라이드"
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="다음 슬라이드"
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 backdrop-blur">
        <button type="button" onClick={handleToggleAutoplay} className="text-white transition hover:text-emerald-400">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>

        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`${index + 1}번 슬라이드로 이동`}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-8 bg-emerald-400" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
