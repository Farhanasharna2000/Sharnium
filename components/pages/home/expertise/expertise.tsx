import Container from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Expertise = () => {
  return (
    <Container>
      <div className="md:bg-[#F3F3F3] rounded-4xl mb-10 md:mb-20 mt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="relative flex justify-center lg:block">
            {/* Top Card */}
            <div className="
              absolute top-[15%] md:top-0 lg:left-0 
               -left-[0.01%]
              w-[51%]  md:h-[25%] h-[23%]
              rounded-3xl shadow-lg p-3 md:p-4 z-10 
              border-t-5 border-l-5 border-[#00AB0B] bg-white
            ">
              <h2 className="text-xs md:text-2xl font-bold mb-1 md:mb-3 text-gray-900">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-gray-600 text-[10px] md:text-sm">
                Let’s design a smart, scalable digital solution that matches your vision.
              </p>
            </div>

       
            <div className="relative rounded-3xl overflow-hidden mt-20 lg:mt-0">
              <Image
                src="/expertise.png"
                alt="Team collaboration meeting"
                width={800}
                height={848}
                className="object-cover w-full h-auto"
              />

              {/*  Button */}
              <div className="absolute right-[1.3%] bottom-[17.7%] md:right-10">
                <button className="text-[10px] md:text-lg font-semibold flex items-center justify-center gap-1 md:gap-2">
                  Get a Free Consultation
                  <ArrowRight className="md:size-5 size-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="p-2 sm:p-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-[#00AB0B]">Expertise</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#00AB0B] mb-8 ">
              Smart Minds. Sharp Ideas.  
              Seamless Collaboration.  
              Unstoppable Results.
            </h2>

            <p className="text-[#535353] mb-10 leading-relaxed text-sm md:text-base md:w-[80%]">
              At Sharnium, we specialize in building future-ready digital experiences.
              From modern websites and mobile apps to brand-defining identities—
              we make your business stand out in today’s digital world.
            </p>

            <div className="border-b-5 border-r-5 border-[#00AB0B] rounded-3xl p-6 sm:p-8 bg-white md:w-[70%]">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className=" ">
                <Image  src="/seven-plus.png"
                alt="Team collaboration meeting"
                width={800}
                height={848}
                className="object-cover w-full h-auto"/>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                    In Full-Spectrum Digital Services
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With over 40,000 clients served and a team of 400+ experts, 
                    we deliver excellence at scale—blending design, development, 
                    and business strategy into every project.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default Expertise;
