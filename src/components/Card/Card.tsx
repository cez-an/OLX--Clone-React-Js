import React from "react";

type CardProps = {
  title: string;
  img: string;
  des: string;
};

const Card: React.FC<CardProps> = ({ title, img, des }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      <div className="p-3">
        <p className="text-lg font-semibold">₹ {title}</p>
        <p className="text-sm text-gray-600">{des}</p>
      </div>
    </div>
  );
};

export default Card;
