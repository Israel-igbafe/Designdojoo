import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="text-red-600 text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="bg-gray-50 px-6 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know before applying.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <FAQItem
            question="Is this program beginner-friendly?"
            answer="Yes. While basic familiarity with design or product concepts helps, the program is structured to support both beginners and intermediate learners."
          />

          <FAQItem
            question="How much time do I need to commit weekly?"
            answer="You should be able to commit 10–15 hours per week for live sessions, assignments, and accountability sprints."
          />

          <FAQItem
            question="Is the scholarship guaranteed?"
            answer="No. Scholarships are limited and awarded based on your application, commitment level, and alignment with the program goals."
          />

          <FAQItem
            question="Will I work on real projects?"
            answer="Yes. You will collaborate with real teammates and build real products that can be added directly to your portfolio."
          />

          <FAQItem
            question="What happens after the 8 weeks?"
            answer="Top-performing participants may be absorbed into DesignDojoo’s agency projects or recommended for paid opportunities."
          />

        </div>
      </div>
    </section>
  );
}

export default FAQSection;
