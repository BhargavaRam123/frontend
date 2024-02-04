"use client";
import { sidebarLinks } from "../../../../public/data/dashboard-links";
import style from "./myprofile.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import Sidebar from "./components/sidebar";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import Confirmationmodel from "./components/confirmationmodel";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logOut } from "@/app/services/operations/authApi";
import Myprofilep1 from "./components/myprofilep1";
import Myprofilep2 from "./components/myprofilep2";
import Myprofilep3 from "./components/myprofilep3";
export default function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.profile);
  const [showmodel, setshowmodel] = useState(null);
  return (
    <>
      <div className={style.scontainer}>
        {sidebarLinks.map((obj) => {
          // console.log("helleo");
          return (
            <Sidebar
              key={obj.id}
              name={obj.name}
              path={obj.path}
              icon={obj.icon}
              type={obj.type}
            />
          );
        })}
        <div
          style={{ height: "1px", width: "80%", backgroundColor: "white" }}
        ></div>
        <div
          className={`${style.normal} ${style.innerscontainer}`}
          style={{ display: "flex" }}
        >
          <IoSettingsOutline />
          <Link
            href="/dashboard/settings"
            className={style.normal}
            style={{ textDecoration: "none" }}
          >
            Settings
          </Link>
        </div>
        <div
          className={`${style.normal} ${style.innerscontainer}`}
          style={{ display: "flex" }}
          onClick={() => {
            setshowmodel({
              t1: "Are you Sure ?",
              t2: "You will be logged out of your account.",
              handler1: () => {
                dispatch(logOut(router));
              },
              handler2: () => {
                setshowmodel(null);
              },
            });
          }}
        >
          <IoLogOutOutline />
          <div className={style.normal}>Logout</div>
        </div>
      </div>
      <div className={style.container}>
        {showmodel && (
          <div>
            <Confirmationmodel data={showmodel} />
          </div>
        )}
        <div className={style.infocontainer}>
          <div className={style.heading}>My Profile</div>
          <Myprofilep1 data={user} />
          <Myprofilep2 data={user} />
          <Myprofilep3 data={user} />
        </div>
      </div>
    </>
  );
}
