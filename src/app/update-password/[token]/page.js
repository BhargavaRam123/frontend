"use client";
import style from "../../forgotpassword/forgotpassword.module.css";
import Sec1button from "@/app/components/homecomponents/sec1button";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import style1 from "./updatepassword.module.css"
import { useDispatch } from "react-redux";
import { changepassword } from "@/app/services/operations/authApi";
export default function Updatepassword({params}) {

  const token = params.token
  const dispatch = useDispatch()
    const [formdata, setformdata] = useState({
        password: "",
        confirmpassword: ""
    })
    const [hide, sethide] = useState(true)
    function hidepass() {
        sethide(!hide)
    }
    const { password, confirmpassword } = formdata
    function handlechange(e) {
        setformdata((pd) => {
            return {
                ...pd,
                [e.target.name]: e.target.value
            }
        })
        console.log("hey the formdata is:", formdata)
    }
  function handleonsubmit(e) {
    e.preventDefault()
    dispatch(changepassword(password,confirmpassword,token))
  }
  return (
    <form
      onSubmit={(e) => {
        handleonsubmit(e);
      }}
    >
      <div className={style.maincontainer}>
        <div className={style.container} style={{"width":"auto"}}>
          <div className={style.heading}>Choose new password</div>
          <div className={style.normal}>
            Almost done. Enter your new password and youre all set.
          </div>

          <div className={style1.password}>
            <div className={style1.iname1}>
              <div className={style1.heading1}>Create new Password</div>
              <input
                name="password"
                value={password}
                type={hide === false ? "text" : "password"}
                onChange={handlechange}
              />
              {hide === true ? (
                <FaEye
                  style={{
                    color: "white",
                    position: "relative",
                    bottom: "39px",
                    left: "90%",
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
                    left: "90%",
                  }}
                  onClick={() => {
                    hidepass();
                  }}
                />
              )}
            </div>
            <div className={style1.iname1}>
              <div className={style1.heading1}>Confirm new Password</div>
              <input
                value={confirmpassword}
                name="confirmpassword"
                type={hide === false ? "text" : "password"}
                onChange={handlechange}
              />
              {hide === true ? (
                <FaEye
                  style={{
                    color: "white",
                    position: "relative",
                    bottom: "39px",
                    left: "90%",
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
                    left: "90%",
                  }}
                  onClick={() => {
                    hidepass();
                  }}
                />
              )}
            </div>
          </div>
          <Sec1button text="Reset Password" classname="sec1b1" />
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
