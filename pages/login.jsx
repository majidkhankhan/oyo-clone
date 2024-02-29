import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { loginAlert } from "@/components/utilities/toast";
const login = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await fetch(`/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const res = await response.json();
        localStorage.setItem("token", res.token);
        const text = "Login Successfully"
        loginAlert(text)
        router.push("/");
      } else {
        console.log("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    try {
      const data = {
        name: name,
        email: email,
        password: password,
      };

      const response = await fetch(`/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const res = await response.json();
        localStorage.setItem("token", res.token);
        const text = "Signup Successfully"
        loginAlert(text)
        router.push("/");
      } else {
        console.log("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleToggleEyes = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className="bg-black">
      <div className="flex h-screen justify-center items-center bg-login-background bg-no-repeat ">
        <div className="absolute w-full top-10 px-20 flex items-center">
          <Link href="/">
            <h2 className="text-6xl font-bold mr-5 ">OYO</h2>
          </Link>
          <p className="font-bold text 2xl text-white">
            Hotels and homes across 800 cities,24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-9/12">
          <div className="text-white">
            <p className="font-bold text-5xl text-justify ">
              There’s a smarter way to OYO around
            </p>
            <p className="text-2xl mt-5 text-justify ">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="ml-20 pb-40 w-10/12 h-full  bg-white">
            <p
              className="h-10 flex items-center px-10 bg-red-600
          text-lg font-bold text-white
          "
            >
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10">
              <p className="text-2xl font-bold">Login/Signup</p>
              <p className="text-base mb-1">
                Please enter your email to continue
              </p>
              {login ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Enter your name "
                  className="border border-gray-200 w-full p-2 mb-2 "
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Ex@gmail.com"
                className="border border-gray-200 w-full p-2 mb-2 "
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type={type}
                placeholder="Enter your password"
                className="border border-gray-200 w-full p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span style={{marginLeft:"-34px",color:"#d36e6e"}}>
                <Icon
                  class="absolute"
                  icon={icon}
                  size={25}
                  onClick={handleToggleEyes}
                />
              </span>
              <button
                type="submit"
                className="w-full h-14 text-lg font-bold bg-red-500 hover:cursor-pointer
         hover:bg-red-600 text-white my-5 rounded-lg
         "
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? "Login" : "Signup"}
              </button>
              <p className="my-1 text-base">
                <span>
                  {" "}
                  {login
                    ? "Don`t have an account ?"
                    : "Already have an account ?"}
                </span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={handleToggle}
                >
                  {login ? "Signup" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
