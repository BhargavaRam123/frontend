"use client";
import { IoReloadCircleOutline } from "react-icons/io5";
import style from "../forgotpassword/forgotpassword.module.css";
import style1 from "./verifyemail.module.css";
import Sec1button from "../components/homecomponents/sec1button";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import signup from "../services/operations/authApi";
import { sendOtp } from "../services/operations/authApi";
import { useRouter } from "next/navigation";
export default function Verifyemail() {
  const router = useRouter();
  const { signupData } = useSelector((state) => state.auth);
  // console.log(signupData);
  const {
    firstName,
    lastName,
    email,
    password,
    confirmpassword,
    selectedelement,
  } = signupData || {};
  useEffect(() => {
    if (!signupData) {
      // router.push("/signup");
    }
  }, []);
  const accountType = selectedelement;
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  function handleonsubmit(e) {
    e.preventDefault();
    dispatch(
      signup(
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
        accountType,
        otp,
        router
      )
    );
  }
  return (
    <form
      action=""
      onSubmit={(e) => {
        handleonsubmit(e);
      }}
    >
      <div className={style.maincontainer}>
        <div className={style.container}>
          <div className={style.heading}>Verify Email</div>
          <div className={style.normal}>
            A verfication code has been sent to you. Enter the code below
          </div>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input {...props} className={style1.otpinput} />
            )}
          />
          <Sec1button text="Verify Email" classname="sec1b1" />
          <div className={style1.resend}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <FaArrowLeft style={{ color: "white" }} />
              <Link
                href="/login"
                className={style.heading1wa}
                style={{ textDecoration: "none" }}
              >
                Back To Login
              </Link>
            </div>
            <div
              onClick={() => {
                dispatch(sendOtp(email));
              }}
              style={{
                display: "flex",
                alignItems: "center",
                color: "#45A0C0",
                cursor: "pointer",
              }}
            >
              <IoReloadCircleOutline
                style={{ color: "#45A0C0", fontSize: "20px" }}
              />
              <div
                className={style.normal}
                style={{ color: "#45A0C0", fontSize: "18px" }}
              >
                Resend It
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
