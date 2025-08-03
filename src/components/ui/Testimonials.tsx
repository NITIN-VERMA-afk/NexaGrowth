export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, EcoMart",
      feedback:
        "NexaGrowth transformed our online presence. Within 6 months, our sales increased by 120% thanks to their smart marketing strategies.",
      image: "/pic2.jpg",
    },
    {
      name: "David Johnson",
      role: "Founder, FitTrack",
      feedback:
        "The NexaGrowth team truly understands business growth. Their campaigns were spot-on and delivered results beyond expectations.",
      image: "/pic1.jpg",
    },
    {
      name: "Emily Roberts",
      role: "Marketing Head, Brandify",
      feedback:
        "Working with NexaGrowth was effortless. They became an extension of our team and helped us scale with confidence.",
      image: "/pic3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#F3F4F6] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We take pride in delivering exceptional results and building long-term
          partnerships.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <h4 className="mt-4 font-bold text-[#1E3A8A]">{t.name}</h4>
              <span className="text-sm text-[#10B981]">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
