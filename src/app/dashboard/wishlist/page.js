"use client";
import style from "./wishlist.module.css";
import { sidebarLinks } from "../../../../public/data/dashboard-links";
import Sidebar from "../my-profile/components/sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
export default function Wishlist() {
  const { totalItems } = useSelector((state) => state.cart);
  console.log("total items in the cart are:", totalItems);
  return (
    <div>
      <div className={style.scontainer}>
        {sidebarLinks.map((obj) => {
          console.log("helleo");
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
        <div className={style.infocontainer}>
          <div className={style.heading}>Your Wishlist</div>
        </div>
      </div>
    </div>
  );
}
