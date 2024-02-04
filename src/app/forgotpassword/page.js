"use client";
import style from "./forgotpassword.module.css";
import Sec1button from "../components/homecomponents/sec1button";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getpasswordresettoken } from "../services/operations/authApi";
export default function () {
  const dispatch = useDispatch();
  const [emailsent, setemailsent] = useState(false);
  const [email, setemail] = useState("");
  async function handleonsubmit(e) {
    e.preventDefault();
    dispatch(getpasswordresettoken(email, setemailsent));
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
          <div className={style.heading}>
            {emailsent ? "Check Your Email" : "Reset Password"}
          </div>
          <div className={style.normal}>
            {emailsent
              ? "We have sent the reset email to"
              : "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"}
          </div>
          <div className={style.heading1}>
            {emailsent ? email : "Email Address"}
          </div>
          {emailsent ? null : (
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          )}
          {emailsent ? (
            <Sec1button text="Resend Email" classname="sec1b1" />
          ) : (
            <Sec1button text="Reset Password" classname="sec1b1" />
          )}
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
        </div>
      </div>
    </form>
  );
}
