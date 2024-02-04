"use client";
import style from "../myprofile.module.css";
import Buttonicon from "./buttonicon";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Myprofilep1({ data }) {
  const router = useRouter();
  return (
    <div className={style.p1}>
      <div className={style.p1inner}>
        <div className={style.innerimagestyle}>
          <Image src={data[0].image} fill />
        </div>
        <div>
          <div className={style.normal}>
            {data[0].firstName} {data[0].lastName}
          </div>
          <div className={style.normal}>{data[0].email}</div>
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
