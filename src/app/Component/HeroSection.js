import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; 
import './HeroSection.css';

const images = [
  { src: '/bannerone.png', alt: 'Banner One' },
  { src: '/bannertwo.png', alt: 'Banner Two' },
  { src: '/bannerthree.png', alt: 'Banner Three' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <section className="hero-section">
      <div className="slider-container">
        <div className="slider" ref={slideRef}>
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="image"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
