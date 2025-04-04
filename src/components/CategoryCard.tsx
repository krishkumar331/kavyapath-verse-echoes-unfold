
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  to: string;
  color?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  count,
  to,
  color = "bg-kavya-cream dark:bg-kavya-ink",
}) => {
  return (
    <Link
      to={to}
      className={`${color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group block`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white dark:bg-kavya-brown/30 rounded-full text-kavya-maroon dark:text-kavya-gold">
          {icon}
        </div>
        <span className="text-sm font-medium bg-white/80 dark:bg-kavya-brown/30 text-kavya-brown dark:text-kavya-cream px-2 py-1 rounded-full">
          {count} poems
        </span>
      </div>
      <h3 className="text-lg font-display font-semibold text-kavya-brown dark:text-kavya-cream group-hover:text-kavya-maroon dark:group-hover:text-kavya-gold transition-colors">
        {title}
      </h3>
      <p className="text-sm text-kavya-brown/80 dark:text-kavya-cream/80 mt-2">{description}</p>
    </Link>
  );
};

export default CategoryCard;
