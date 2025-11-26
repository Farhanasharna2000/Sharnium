import Container from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Expertise = () => {
  return (
    <Container >
      {/* Hero Section */}
      <div className="bg-[#F3F3F3] rounded-4xl mb-10 md:mb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Top Card */}
            <div className="absolute top-0 left-0 rounded-3xl shadow-lg  md:h-[190px] md:w-[360px] p-4 z-10 border-2 border-green-400">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-gray-600 text-sm">
                Let &apos s design a smart, scalable digital solution that matches your vision and business needs.
              </p>
            </div>

            {/* Main Image */}
            <div className=" relative rounded-3xl overflow-hidden ">
              <Image 
                src="/expertise.png" 
                alt="Team collaboration meeting"
                width={800}
                height={848}
                className=" object-cover"
              />
              
              {/* CTA Button Overlay */}
              <div className="absolute bottom-31 right-6">
                <button className=" text-gray-900 px-6 py-3  font-semibold flex items-center gap-2">
                  Get a Free Consultation
                 <ArrowRight className='size-6'/>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className='p-6'>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-[#00AB0B]">Expertise</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-[#00AB0B] mb-8">
              Smart Minds. Sharp Ideas. Seamless Collaboration. Unstoppable Results.
            </h2>

            <p className="text-gray-700 mb-12 leading-relaxed">
              At Softvence, we specialize in building future-ready digital experiences. From modern websites 
              and intuitive mobile apps to brand-defining identities and insightful consultations—our team 
              ensures your business stands out in today &apos s digital world.
            </p>

            {/* Stats Card */}
            <div className="border-2 border-green-400 rounded-3xl p-8 bg-white">
              <div className="flex items-start gap-6">
                <div className="text-7xl font-bold text-[#00AB0B] opacity-20">
                  7+
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    In Full-Spectrum Digital Services
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With over 40,000 clients served and a team of 400+ experts, we deliver excellence 
                    at scale—blending design, development, and business strategy into every project.
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