import { Rocket, BarChart3, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Rocket className="w-12 h-12 text-[#10B981]" />,
      title: "Growth Strategies",
      description:
        "We create tailored marketing strategies to help your business grow faster."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#10B981]" />,
      title: "Data-Driven Insights",
      description:
        "Make informed decisions backed by analytics and market research."
    },
    {
      icon: <Users className="w-12 h-12 text-[#10B981]" />,
      title: "Expert Team",
      description:
        "Our experienced team works closely with you to achieve measurable results."
    }
  ];

  return (
    <section
      id="services"
      className="bg-[#F3F4F6] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We provide end-to-end solutions for your business — from strategic
          planning to execution — ensuring sustainable growth.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#111827] mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
