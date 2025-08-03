import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide marketing strategy, brand design, content creation, SEO optimization, and data-driven growth consulting."
    },
    {
      question: "How do I get a quote?",
      answer:
        "Simply click the 'Get a Quote' button on our site and fill out the form. Our team will respond within 24 hours."
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! We have special packages and flexible pricing for startups to help them scale efficiently."
    }
  ];

  return (
    <section
      id="faq"
      className="bg-[#F3F4F6] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Here are some common questions our clients ask.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-[#111827] font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
