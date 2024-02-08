import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signin");
  }, []);
  return <></>;
}

export default LandingPage;
