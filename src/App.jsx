import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/registrationform";
import ConfirmationPage from "./components/confirmationpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

