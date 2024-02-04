"use client";
import { sidebarLinks } from "../../../../public/data/dashboard-links";
import style from "./settings.module.css";
import Sidebar from "../my-profile/components/sidebar";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Settingsp1 from "./components/settingsp1";
import Settingsp2 from "./components/settingsp2";
import { useSelector } from "react-redux";
import Settingsp3 from "./components/settingsp3";
import { useState } from "react";
export default function Settings() {
  const pathname = usePathname();
  const { user } = useSelector((state) => state.profile);
  const [showmodel, setshowmodel] = useState(null);
  return (
    <div>
      <div className={style.scontainer}>
        {sidebarLinks.map((obj) => {
          // console.log("hello");
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
          className={
            pathname === "/dashboard/settings"
              ? `${style.normal} ${style.innerscontainer} ${style.clickproperties}`
              : `${style.normal} ${style.innerscontainer}`
          }
          style={{ display: "flex" }}
        >
          <IoSettingsOutline />
          <Link
            href="/dashboard/settings"
            className={
              pathname === "/dashboard/settings"
                ? `${style.normal} ${style.clickproperties}`
                : `${style.normal}`
            }
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
        <div className={style.infocontainer}>
          <div className={style.heading}>Edit Profile</div>
          <Settingsp1 data={user} />
          <Settingsp2 data={user} />
        </div>
      </div>
    </div>
  );
}
