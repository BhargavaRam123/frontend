"use client";
import style from "../myprofile.module.css";
import Buttonicon from "./buttonicon";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Myprofilep2({ data }) {
  const router = useRouter();
  console.log("data is :", data[0]);
  return (
    <div className={style.p1}>
      <div>
        <div className={style.sec2container}>
          <div className={style.normal}>About</div>
          <div className={style.snormal}>
            {data[0].additionalDetails.about === null
              ? "Write Something about yourself"
              : data[0].additionalDetails.about}
          </div>
          <div className={style.normal}>Account Type:{data[0].accountType}</div>
        </div>
      </div>

      <div
        onClick={() => {
          router.push("/dashboard/settings");
        }}
      >
        <Buttonicon text="Edit" classname="sec1b1" />
      </div>
    </div>
  );
}
