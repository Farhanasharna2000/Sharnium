import { StatItem } from "@/types/hero";
import React from "react";

interface StatCardProps {
  stat: StatItem;
  extraClass?: string;
}

const StatCard: React.FC<StatCardProps> = ({ stat, extraClass = "" }) => (
  <div
    className={`bg-[#F8F8F8] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${extraClass}`}
    style={{
      animation: `float 3s ease-in-out infinite`,
      animationDelay: stat.delay
    }}
  >
    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
      {stat.icon}
    </div>

    <h3 className= " md:text-xl font-bold text-[#040404] mb-1">
      {stat.title}
    </h3>

    <p className="text-sm md:text-lg font-semibold text-[#616161]">
      {stat.subtitle}
    </p>
  </div>
);

export default StatCard;