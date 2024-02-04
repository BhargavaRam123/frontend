"use client";
import Link from "next/link";
import Sec1button from "../components/homecomponents/sec1button";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { loginIn } from "../services/operations/authApi";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  function hidepass() {
    sethide(!hide);
  }

  function handleonsubmit(e) {
    e.preventDefault();
    console.log("email and password are:", email, password);
    dispatch(loginIn(email, password, router));
  }

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hide, sethide] = useState(true);
  return (
    <>
      <form onSubmit={(e) => handleonsubmit(e)}>
        <div className="logincontainer">
          <div className="leftlogin">
            <div className="heading">Welcome Back</div>
            <div className="normal">
              Build skills for today, tomorrow, and beyond. Education to
              future-proof your career.
            </div>
            <div className="iname1">
              <div className="heading1">Email Address</div>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                  //   console.log(email, password);
                }}
              />
            </div>
            <div className="iname1">
              <div className="heading1">Password</div>
              <input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type={hide === false ? "text" : "password"}
              />
              {hide === true ? (
                <FaEye
                  style={{
                    color: "white",
                    position: "relative",
                    bottom: "39px",
                    left: "95%",
                  }}
                  onClick={() => {
                    hidepass();
                  }}
                />
              ) : (
                <FaRegEyeSlash
                  style={{
                    color: "white",
                    position: "relative",
                    bottom: "39px",
                    left: "95%",
                  }}
                  onClick={() => {
                    hidepass();
                  }}
                />
              )}
              {/* <div className="normal forgotpass "> */}
              <Link
                href="/forgotpassword"
                className="normal forgotpass"
                style={{ textDecoration: "none" }}
              >
                Forgot Password
              </Link>
              {/* </div> */}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Sec1button text="Log In" classname="sec1b1" />
            </div>
          </div>
          <div className="rightlogin">
            <Image
              src="/assets/Images/login.webp"
              layout="responsive"
              width={560}
              height={500}
            />
          </div>
        </div>
      </form>
    </>
  );
}
