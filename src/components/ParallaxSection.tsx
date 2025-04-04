
import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  backgroundImage, 
  children, 
  speed = 0.5,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !bgRef.current) return;
      
      const { top, height } = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (top < viewportHeight && top + height > 0) {
        const scrollPosition = window.scrollY;
        const offset = top + scrollPosition;
        const parallaxOffset = (scrollPosition - offset) * speed;
        
        bgRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
