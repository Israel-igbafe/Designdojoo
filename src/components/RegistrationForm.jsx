import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function RegistrationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    portfolio: "",
    track: "",
    referral: "",
    blocker: "",
    accountability: "",
    commitment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

   console.log("FORM DATA BEING SENT:", form); // 👈 ADD THIS

  const { error } = await supabase
    .from("applications")
    .insert([form]);

   if (error) {
    console.error("SUPABASE ERROR:", error); // 👈 ADD THIS
    setError(error.message); // 👈 CHANGE THIS LINE
    setLoading(false);
    return;
 }

  navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8">
        
        {/* Header */}
        <div className="bg-black text-white rounded-lg p-6 mb-8">
          <p className="text-red-400 text-sm mb-1">⏱ Takes 8 minutes</p>
          <h1 className="text-2xl font-bold">
            The DesignDojoo Product Launchpad
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Stop learning alone. Start building together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Personal Details */}
          <h3 className="font-semibold text-lg">Personal Details</h3>

          <input
            name="full_name"
            onChange={handleChange}
            className="input"
            placeholder="Full Name *"
            required
          />

          <input
            name="portfolio"
            onChange={handleChange}
            className="input"
            placeholder="Portfolio / LinkedIn Profile *"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="city"
              onChange={handleChange}
              className="input"
              placeholder="City *"
              required
            />

            <input
              name="country"
              onChange={handleChange}
              className="input"
              placeholder="Country *"
              required
            />
          </div>

          {/* Contact Info */}
          <h3 className="font-semibold text-lg pt-4">Contact Info</h3>

          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="input"
            placeholder="Email Address *"
            required
          />

          <input
            name="phone"
            onChange={handleChange}
            className="input"
            placeholder="Phone Number *"
            required
          />

          {/* Track */}
          <select
            name="track"
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">Select Track</option>
            <option>Combined Scholarship (UI/UX + PM)</option>
            <option>UI/UX Design Only</option>
            <option>Product Management Only</option>
          </select>

          {/* Referral */}
          <div>
            <label className="block text-sm font-medium mb-2">
              How did you hear about us?
            </label>

            <select
              name="referral"
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Select an option</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>WhatsApp</option>
              <option>Friend</option>
              <option>Aligntraits</option>
              <option>Others</option>
            </select>
          </div>

          {/* Text Areas */}
          <textarea
            name="blocker"
            onChange={handleChange}
            className="input min-h-[100px]"
            placeholder="What is blocking your career growth?"
            required
          />

          <textarea
            name="accountability"
            onChange={handleChange}
            className="input min-h-[100px]"
            placeholder="Why do you need accountability?"
            required
          />

          {/* Commitment */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Commitment Pledge: Can you dedicate 10–15 hrs/week?
            </label>

            <select
              name="commitment"
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Select your commitment</option>
              <option>Yes, I can</option>
              <option>Tight schedule, but I will try</option>
              <option>No</option>
            </select>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
