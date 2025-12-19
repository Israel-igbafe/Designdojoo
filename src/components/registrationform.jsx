import { useState } from "react";

const RegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm px-6 py-8 md:px-10">
        
        {/* Header */}
<div className="mb-8">
  <div className="inline-block bg-black rounded-lg px-14 py-4">
    
    {/* Takes 8 minutes */}
    <div className="flex items-center gap-1 text-red-500 text-[11px] font-medium">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Takes 8 minutes</span>
    </div>

    {/* Title */}
    <h1 className="text-white text-xl md:text-2xl font-bold mt-1">
      The DesignDojoo Product Launchpad
    </h1>

    {/* Subtitle */}
    <p className="text-xs text-gray-300 mt-1">
      Stop learning alone. Start building together.
    </p>
  </div>
</div>



        {/* Intro Text */}
        <div className="text-sm text-gray-600 space-y-4 mb-8">
          <p>
            <strong>Welcome!</strong> Here’s the reality: We have{" "}
            <strong>limited scholarship spots</strong> for this 8-week cohort.
            This is not just a course; it is a hands-on, high-intensity career
            accelerator.
          </p>

          <p>
            We need to ensure we’re bringing together the right mix of UI
            Designers and Product Managers who are ready to be accountable, do
            the work, and launch their careers.
          </p>

          <p>
            To apply, answer the questions below honestly.{" "}
            <strong>We prioritize authenticity over perfection.</strong> Show
            us you are ready to commit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Personal Details */}
          <section>
            <h2 className="section-title">Personal Details</h2>

            <div className="space-y-4">
              <input className="input" placeholder="Full Name *" />
              <input className="input" placeholder="Portfolio / LinkedIn Profile *" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="input" placeholder="City *" />
                <input className="input" placeholder="Country *" />
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="section-title">Contact Info</h2>

            <div className="space-y-4">
              <input className="input" placeholder="Email Address *" />
              <input className="input" placeholder="Phone Number (WhatsApp) *" />
              <input className="input" placeholder="Social Media Handle (Twitter/IG/LinkedIn) *" />
            </div>
          </section>

          {/* Program Details */}
          <section>
            <h2 className="section-title">Program Details</h2>

            <div className="space-y-3">
              <label className="radio">
                <input type="radio" name="track" defaultChecked />
                Combined Scholarship (UI/UX + PM) – 8 Weeks
              </label>

              <label className="radio">
                <input type="radio" name="track" />
                UI/UX Design Only – 8 Weeks
              </label>

              <label className="radio">
                <input type="radio" name="track" />
                Product Management Only – 8 Weeks
              </label>
            </div>

            <select className="input mt-4">
              <option>How did you hear about us?</option>
              <option>Whatsapp</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Aligntraits</option>
              <option>From a friend</option>
              <option>Others</option>
            </select>
          </section>

          

          {/* Qualifying Questions */}
          <section>
            <h2 className="section-title">Qualifying Questions</h2>

            <div className="space-y-4">
              <textarea
                rows="3"
                className="input resize-none"
                placeholder="What is the ONE thing blocking your career growth right now?"
              />

              <textarea
                rows="3"
                className="input resize-none"
                placeholder="Why do you need an accountability partner right now?"
              />

              <select className="input">
                <option>
                  Commitment Pledge: Can you dedicate 10–15 hrs/week?
                </option>
                <option>Yes i can</option>
                <option>Tight schedule, but i'll try</option>
                <option>No i can't</option>
              </select>
            </div>
          </section>

          {/* Submit */}
          <button
  type="submit"
  className="w-full bg-red-600 hover:bg-red-700 transition
             text-white font-semibold py-4 rounded-lg"
>
  Submit Application
</button>


          <p className="text-xs text-gray-400 text-center">
            By submitting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
