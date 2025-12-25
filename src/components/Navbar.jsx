import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/apply")}>
      Apply Now
    </button>
  );
}
