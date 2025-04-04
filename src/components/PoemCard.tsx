
import React from "react";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PoemCardProps {
  title: string;
  authorName: string;
  authorAvatar?: string;
  excerpt: string;
  likes: number;
  comments: number;
  category: string;
  language?: "hindi" | "english";
}

const PoemCard: React.FC<PoemCardProps> = ({
  title,
  authorName,
  authorAvatar,
  excerpt,
  likes,
  comments,
  category,
  language = "hindi",
}) => {
  return (
    <div className="poem-card group hover:transform hover:scale-[1.01] transition-all duration-300">
      <div className="poem-card-header flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-kavya-cream flex items-center justify-center text-kavya-maroon font-bold">
            {authorAvatar ? (
              <img src={authorAvatar} alt={authorName} className="w-full h-full object-cover" />
            ) : (
              authorName.charAt(0)
            )}
          </div>
          <div>
            <h4 className="font-medium text-kavya-brown dark:text-kavya-cream">{authorName}</h4>
            <span className="text-xs text-kavya-brown/70 dark:text-kavya-cream/70">
              {category}
            </span>
          </div>
        </div>
      </div>
      <div className="poem-card-body">
        <h3 className="text-xl font-display font-semibold mb-3 text-kavya-maroon dark:text-kavya-gold">
          {title}
        </h3>
        <p className={`text-kavya-brown dark:text-kavya-cream/90 leading-relaxed mb-4 ${language === "hindi" ? "text-hindi" : ""}`}>
          {excerpt}
        </p>
        <Button className="btn-ghost text-sm mt-2">Read Full Poem</Button>
      </div>
      <div className="poem-card-footer">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-kavya-brown dark:text-kavya-cream hover:text-kavya-maroon dark:hover:text-kavya-gold transition-colors">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-kavya-brown dark:text-kavya-cream hover:text-kavya-maroon dark:hover:text-kavya-gold transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{comments}</span>
          </button>
        </div>
        <button className="text-kavya-brown dark:text-kavya-cream hover:text-kavya-maroon dark:hover:text-kavya-gold transition-colors">
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PoemCard;
