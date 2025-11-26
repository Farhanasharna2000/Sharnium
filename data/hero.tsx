import { StatItem } from "@/types/hero";
import { Users, Award, MessageSquare, TrendingUp } from "lucide-react";


export const stats: StatItem[] = [
  {
    icon: <Users className="w-8 h-8 text-[#00AB0B]" />,
    title: "500+ Trained &",
    subtitle: "Experts Employee",
    delay: "0ms",
  },
  {
    icon: <Award className="w-8 h-8 text-[#00AB0B]" />,
    title: "7+ Years of",
    subtitle: "Experience",
    delay: "100ms",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#00AB0B]" />,
    title: "80%+",
    subtitle: "Retention",
    delay: "200ms",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-[#00AB0B]" />,
    title: "100+ Positive",
    subtitle: "Review",
    delay: "300ms",
  },
];
