export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small businesses starting their growth journey.",
      features: [
        "Basic marketing strategy",
        "1 social media platform",
        "Monthly performance report",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$599",
      description:
        "Best for growing companies ready to scale with proven strategies.",
      features: [
        "Full marketing strategy",
        "3 social media platforms",
        "Bi-weekly performance report",
        "Dedicated account manager",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Tailored solutions for large-scale campaigns and corporate needs.",
      features: [
        "Custom strategy",
        "All platforms & ad campaigns",
        "Weekly performance report",
        "24/7 priority support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
          Plans & Pricing
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose the right plan for your business growth. Transparent pricing,
          real results.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-sm p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-[#F3F4F6] border-[#10B981] shadow-lg"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-xl font-bold text-[#1E3A8A]">{plan.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-[#10B981]">
                {plan.price}
              </p>
              <p className="mt-2 text-gray-600">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-gray-700 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 w-full px-6 py-3 rounded-lg font-medium text-center transition-colors ${
                  plan.highlighted
                    ? "bg-[#10B981] text-white hover:bg-[#0d966a]"
                    : "bg-white border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                }`}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
