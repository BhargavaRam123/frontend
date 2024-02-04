"use client";
import style from "./enrolled-courses.module.css";
import { sidebarLinks } from "../../../../public/data/dashboard-links";
import Sidebar from "../my-profile/components/sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getuserenrolledcourses } from "@/app/services/operations/profileApi";
import { useSelector } from "react-redux";
export default function Enrolledcourses() {
  const [showmodel, setshowmodel] = useState(null);
  const [enrolledcourses, setenrolledcourses] = useState([]);
  const { token } = useSelector((state) => state.auth);
  async function getenrolledcourses() {
    try {
      const res = await getuserenrolledcourses(token);
      // console.log("return response to the client is:", res);
      setenrolledcourses(res);
    } catch (error) {
      console.log("error occured in getenrolledcourses:", error.message);
    }
  }
  useEffect(() => {
    getenrolledcourses();
  }, []);
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
      <div>
        {enrolledcourses.length === 0 ? (
          <div className={style.container}>
            <div className={style.infocontainer}>
              <div className={style.heading}>
                You have not enrolled in any course
              </div>
            </div>
          </div>
        ) : (
          <div className={style.container}>
            <div className={style.infocontainer}>
              <div className={style.heading}>Enrolled Courses</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
