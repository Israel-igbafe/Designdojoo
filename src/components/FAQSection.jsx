import { useState } from "react";

const faqs = [
  {
    question: "Do I need prior experience?",
    answer:
      `While we welcome absolute beginners who are fast learners, this program is optimized for "Restarters"—designers and PMs who have watched tutorials or started learning but struggle with consistency.

You don’t need to be an expert, but having basic familiarity with tools (like Figma) or concepts helps. Our Weeks 1–2 Bootcamp Refresher ensures everyone starts on the same solid foundation.`,
  },
  {
    question: "How long is the program?",
    answer:
      `It is a strict 8-Week Accelerator.

• Weeks 1–2: Intensive Refresher & Training  
• Weeks 3–5: The Accountability Sprints (3 Projects in 3 Weeks)  
• Weeks 6–7: Personal Branding (CV, LinkedIn, Portfolio)  
• Week 8: Agency Launch & Paid Gigs`,
  },
  {
    question: "What does the bootcamp cost?",
    answer:
      `The standard tuition for the Product Experience Track is ₦83,659.

However, for this upcoming cohort, we are offering merit-based scholarships covering 50%–75% of the tuition. If your application is accepted, you will only pay a fraction of the cost as a commitment fee to secure your accountability partner.`,
  },
  {
    question: "Do I actually get a job?",
    answer:
      `We do something better than just “promise” jobs—we provide real work.

DesignDojo operates as a Design Agency. In Week 8, successful graduates gain access to real, low-cost agency gigs to build paid experience. Top performers are prioritized for full-time roles within the DesignDojo Agency or recommended to hiring partners.`,
  },
  {
    question: "Are there payment plans available?",
    answer:
      `Because the scholarship already covers the majority of tuition fees (reducing it to as low as ₦20k–₦40k), we generally require the full commitment fee upfront to secure your seat and lock in your assigned accountability partner.`,
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
       <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    Frequently Asked <span className="text-red-600">Questions</span>
  </h2>

  <p className="mt-3 text-sm text-gray-500">
    Everything you need to know about the scholarship program.
  </p>
</div>


        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>

                <span className="text-xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
