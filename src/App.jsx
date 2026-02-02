import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import RegistrationForm from "./components/RegistrationForm";
import ConfirmationPage from "./components/ConfirmationPage";
import Merch from "./pages/Merch"; // ✅ FIXED

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apply" element={<RegistrationForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/shop" element={<Merch />} /> {/* ✅ NEW */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
