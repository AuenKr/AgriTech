import { useEffect, useState } from "react";
import ButtonBox from "../components/ButtonBox";
import CardWrapper from "../components/CardWrapper";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import PreHeader from "../components/PreHeader";
import SubHeader from "../components/SubHeader";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  useEffect(() => {
    // Check user is login already
    const authorization = localStorage.getItem("token");
    axios
      .get(`${BACKEND_URL}/user`, {
        headers: {
          authorization,
        },
      })
      .then(() => {
        navigate("/dashboard");
      })
      .catch(() => {
        localStorage.removeItem("token");
      });

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const [input, setInput] = useState([]);
  const inputHandler = (evt) => {
    setInput((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/signin`, input);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="mx-2 md:flex items-center justify-between">
      <div className="md:min-w-[450px]">
        <CardWrapper>
          <div className="p-5">
            <div className="space-y-2 mb-5">
              <PreHeader label={"Welcome !"} />
              <Header label={"Sign in to"} />
              <SubHeader label={"lorem subheader"} />
            </div>
            <div className="space-y-6">
              <InputBox
                label={"Username"}
                type={"username"}
                id={"username"}
                placeholder={"Enter your username"}
                inputHandler={inputHandler}
              />
              <InputBox
                label={"Password"}
                type={"password"}
                id={"password"}
                placeholder={"Enter your password"}
                inputHandler={inputHandler}
              />
            </div>
            <div className="mt-5 space-y-3">
              <div>
                <ButtonBox label={"Sign In"} onClick={onSubmit} />
              </div>
              <div className="text-center">
                Don't have an account ?{" "}
                <a
                  href="/signup"
                  className="font-bold underline cursor-pointer"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </CardWrapper>
      </div>
      {width > 768 && (
        <div>
          <img src="/src/assets/main.svg" alt="Image" />
        </div>
      )}
    </div>
  );
}

export default Signin;
