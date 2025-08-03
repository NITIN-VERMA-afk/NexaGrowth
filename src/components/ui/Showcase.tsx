import Image from "next/image";

export default function Showcase() {
  const clients = [
    { name: "TechCorp", logo: "/logo2.jpg" },
    { name: "Innovexa", logo: "/logo3.jpg" },
    { name: "Brandify", logo: "/logo4.jpg" },
    { name: "GrowthHub", logo: "/logo5.jpg" },
  ];

  return (
    <section id="showcase" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
          Our Clients & Success Stories
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We’ve helped amazing businesses grow and reach new heights. Here are
          some of our valued partners.
        </p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={120}
              height={50}
              className="grayscale hover:grayscale-0 transition duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

