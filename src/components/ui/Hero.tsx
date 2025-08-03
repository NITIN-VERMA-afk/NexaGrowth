import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#F3F4F6] py-20 px-6 md:px-12 lg:px-20 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] leading-tight">
            Growing Your Business with{" "}
            <span className="text-[#10B981]">Smart Strategies</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            At NexaGrowth&#44;we help brands and businesses achieve sustainable
            growth through data-driven marketing, creative design, and
            innovative solutions tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#10B981] hover:bg-[#0d966a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="bg-white border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Image / Illustration */}
        <figure className="flex-1">
          <Image
            src="/logo.jpg"
            alt="Business growth illustration"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            priority
          />
        </figure>
      </div>
    </section>
  );
}

