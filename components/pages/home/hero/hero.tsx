"use client";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import StatCard from "./StatCard";
import { stats } from "@/data/hero";

const HeroSection = () => {
  return (
    <Container>
      <div className="md:flex justify-between py-10 md:py-40">
        <div className="flex flex-col md:flex-row col-span-1 items-center md:items-start gap-12">
        
          <div className="space-y-8 animate-fade-in w-full ">
            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#040404] leading-tight">
              Connecting Minds, Sharing Ideas,
              <br />
              <span className="text-[#00AB0B]">
                Building bold Digital Futures
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#616161] leading-relaxed max-w-xl">
              Sharnium is your trusted B2B partner for web & mobile development,
              strategic brand transformation, and enterprise-grade UX/UI design.
            </p>

            {/* Button */}
            <Button className="rounded-4xl font-semibold py-3 px-5 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Appointment</span>
            </Button>
          </div>

        </div>

          {/* right side */}
          <div >
          <div className=" grid grid-cols-2 gap-6 mt-10 md:mt-0">
            {/* First column */}
            <div className="flex flex-col gap-8">
              <StatCard stat={stats[0]} />
              <StatCard stat={stats[2]} />
            </div>

            {/* Second column */}
            <div className="flex flex-col gap-8 mt-8 md:mt-12">
              <StatCard stat={stats[1]} />
              <StatCard stat={stats[3]} />
            </div>
          </div>
          </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
        `}</style>
      </div>
    </Container>
  );
};

export default HeroSection;
