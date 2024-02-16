import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { Link, useNavigate } from "react-router-dom";

import ButtonBox from "../components/ButtonBox";
import CardWrapper from "../components/CardWrapper";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import PreHeader from "../components/PreHeader";
import SubHeader from "../components/SubHeader";

function Signup() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
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
      await axios.post(`${BACKEND_URL}/user/signup`, input);
      alert("Signup Successful");
      navigate("/signin");
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
              <Header label={"Sign up to"} />
              <SubHeader label={"lorem subheader"} />
            </div>
            <div className="space-y-6">
              <InputBox
                label={"First Name"}
                type={"text"}
                id={"firstName"}
                placeholder={"Enter your First Name"}
                inputHandler={inputHandler}
              />
              <InputBox
                label={"Last Name"}
                type={"text"}
                id={"lastName"}
                placeholder={"Enter your Last Name"}
                inputHandler={inputHandler}
              />
              <InputBox
                label={"Email"}
                type={"email"}
                id={"username"}
                placeholder={"Enter your email"}
                inputHandler={inputHandler}
              />
              <InputBox
                label={"Password"}
                type={"password"}
                id={"password"}
                placeholder={"Enter your password"}
                inputHandler={inputHandler}
              />
              {/* <InputBox
                label={"Confirm Password"}
                type={"password"}
                id={"passwordConfirmation"}
                placeholder={"Enter your password"}
                inputHandler={inputHandler}
              /> */}
            </div>
            <div className="mt-5 space-y-3">
              <div>
                <ButtonBox label={"Sign Up"} onClick={onSubmit} />
              </div>
              <div className="text-center">
                Already have an account ?{" "}
                <Link
                  href="/signin"
                  className="font-bold underline cursor-pointer"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </CardWrapper>
      </div>
      {width > 768 && (
        <div>
          <img src="/main.svg" alt="Image" />
        </div>
      )}
    </div>
  );
}

export default Signup;
