"use client";
import style from "../commoncomponents/styles/dropdown.module.css";
import Image from "next/image";
import { VscDashboard } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useRef, useState } from "react";
import Useonclickoutside from "./useonclickoutside";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logOut } from "@/app/services/operations/authApi";
import { useRouter } from "next/navigation";
export default function ProfileDropDown(props) {
  // console.log("props are:", props);
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const ref = useRef(false);
  Useonclickoutside(ref, () => {
    setopen(false);
  });
  function handleonclick() {
    // console.log("entering logout state");
    dispatch(logOut(router));
    setopen(false);
  }
  return (
    <>
      <div ref={ref} style={{ display: "flex", position: "relative" }}>
        <div
          className={style.dcontainer}
          onClick={() => {
            setopen(true);
            console.log(open);
          }}
        >
          <div className={style.profileicon}>
            <Image src={props.details[0].image} fill />
          </div>
          <div>
            <IoMdArrowDropdown
              style={{ color: "white", height: "23px", width: "23px" }}
            />
          </div>
        </div>
        {open && (
          <div
            className={style.dropdown}
            onClick={() => {
              setopen(false);
            }}
          >
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <VscDashboard style={{ color: "white" }} />
              <Link
                href="/dashboard/my-profile"
                className={style.normal}
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleonclick}
            >
              <RiLogoutBoxRLine style={{ color: "white" }} />
              <div className={style.normal}>Logout</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
