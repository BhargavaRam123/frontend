"use client";
import style from "../myprofile.module.css";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import * as Icons from "react-icons/vsc";
import Link from "next/link";
export default function Sidebar(props) {
  // console.log(props);
  const pathname = usePathname();
  const { user } = useSelector((state) => state.profile);
  console.log("account type is:", user[0].accountType);
  console.log("props type is:", props.type);
  const Icon = Icons[props.icon];
  console.log(user);
  if (user[0].accountType !== props.type) return null;
  return (
    <div>
      <div
        className={
          props.path === pathname
            ? `${style.normal} ${style.innerscontainer} ${style.clickproperties}`
            : `${style.normal} ${style.innerscontainer}`
        }
        style={{ display: "flex" }}
      >
        <Icon />
        <Link
          href={props.path}
          style={{ textDecoration: "none" }}
          className={
            props.path !== pathname ? style.normal : style.clickproperties
          }
        >
          {props.name}
        </Link>
      </div>
    </div>
  );
}
