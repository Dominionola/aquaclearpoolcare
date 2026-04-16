'use client';

import { useState, useRef, useEffect } from 'react';

interface SliderProps {
  beforeImage: string;
  afterImage: string;
  altText: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, altText }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden cursor-ew-resize select-none rounded-xl shadow-2xl bg-navy-pool"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      <img 
        src={beforeImage} 
        alt={`Before: ${altText}`} 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute top-4 right-4 bg-navy-deep/80 text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm rounded">
        Before
      </div>

      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={afterImage} 
          alt={`After: ${altText}`} 
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-aqua text-navy-deep px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg rounded">
          After
        </div>
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <div className="w-0 h-0 border-y-[3px] border-y-transparent border-r-[5px] border-r-navy-deep"></div>
            <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-navy-deep"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const transformations = [
    {
      // Before: Green algae / neglected pool | After: AI Generated Clean Match
      before: "/dirtypool/dirtypool1.jpg",
      after: "/cleanpool/cleanpool_1_1776350483336.png",
      alt: "Green algae pool restored to crystal blue"
    },
    {
      // Before: Murky cloudy water | After: AI Generated Clean Match
      before: "/dirtypool/dirtypool2.jpg",
      after: "/cleanpool/cleanpool_2_1776350512274.png",
      alt: "Cloudy water restored to crystal clear"
    },
    {
      // Before: Debris-filled surface | After: AI Generated Clean Match
      before: "/dirtypool/dirtypool3.jpg",
      after: "/cleanpool/cleanpool_3_1776350541865.png",
      alt: "Debris removal and surface clean"
    },
    {
      // Before: Dirty neglected pool | After: AI Generated Clean Match
      before: "/dirtypool/dirtypool4.jpg",
      after: "/cleanpool/cleanpool_4_1776350574282.png",
      alt: "Full restoration to sparkling pool"
    }
  ];

  return (
    <section className="bg-navy-deep py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          Believe It When You <span className="italic text-aqua">See It</span>
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          These transformations took just one visit. Drag the sliders to reveal the difference our professional care makes.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {transformations.map((item, index) => (
            <BeforeAfterSlider 
              key={index}
              beforeImage={item.before}
              afterImage={item.after}
              altText={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
