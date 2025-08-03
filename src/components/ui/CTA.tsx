export default function CTA() {
  return (
    <section id="CTA" className="bg-[#1E3A8A] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Let’s work together to take your business to the next level with our
          expert strategies and proven results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#10B981] hover:bg-[#0d966a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="bg-white border border-transparent text-[#1E3A8A] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
