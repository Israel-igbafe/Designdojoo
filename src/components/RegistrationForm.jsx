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
    setError(error.message);                 // 👈 CHANGE THIS LINE
    setLoading(false);
    return;
  }

  navigate("/confirmation");
};


  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <input
        name="full_name"
        onChange={handleChange}
        className="input"
        placeholder="Full Name *"
        required
      />

      <input
        name="email"
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

      <input
        name="portfolio"
        onChange={handleChange}
        className="input"
        placeholder="Portfolio / LinkedIn *"
      />

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
  <option>From a friend</option>
  <option>Others</option>
</select>


      <textarea
        name="blocker"
        onChange={handleChange}
        className="input"
        placeholder="What is blocking your career growth?"
        required
      />

      <textarea
        name="accountability"
        onChange={handleChange}
        className="input"
        placeholder="Why do you need accountability?"
        required
      />

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

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

export default RegistrationForm;
