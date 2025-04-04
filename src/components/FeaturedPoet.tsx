
import React from "react";
import { Button } from "@/components/ui/button";

interface FeaturedPoetProps {
  name: string;
  bio: string;
  avatar?: string;
  poemCount: number;
  followers: number;
}

const FeaturedPoet: React.FC<FeaturedPoetProps> = ({
  name,
  bio,
  avatar,
  poemCount,
  followers,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white dark:bg-kavya-ink rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-kavya-cream flex items-center justify-center text-kavya-maroon text-3xl font-bold">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          name.charAt(0)
        )}
      </div>
      
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl font-display font-semibold text-kavya-maroon dark:text-kavya-gold">{name}</h3>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 my-2">
          <span className="text-xs bg-kavya-cream/50 dark:bg-kavya-brown/30 text-kavya-brown dark:text-kavya-cream px-2 py-1 rounded-full">
            {poemCount} poems
          </span>
          <span className="text-xs bg-kavya-cream/50 dark:bg-kavya-brown/30 text-kavya-brown dark:text-kavya-cream px-2 py-1 rounded-full">
            {followers} followers
          </span>
        </div>
        
        <p className="text-sm text-kavya-brown/90 dark:text-kavya-cream/80 mb-4">{bio}</p>
        
        <div className="flex gap-3 justify-center sm:justify-start">
          <Button className="btn-primary text-sm">Follow</Button>
          <Button className="btn-ghost text-sm">View Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPoet;
