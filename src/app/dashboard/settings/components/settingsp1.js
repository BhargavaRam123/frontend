"use client";
import style from "../settings.module.css";
import Buttonicon from "../../my-profile/components/buttonicon";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Settingsp1({ data }) {
  const router = useRouter();
  return (
    <div className={style.p1}>
      <div className={style.p1inner}>
        <div className={style.innerimagestyle}>
          <Image src={data[0].image} fill />
        </div>
        <div>
          <div className={style.normal}>Change Profile Picture</div>
          <div className={`${style.normal} ${style.picontainer}`}>
            <div className={style.select}>
              <label for="files">Select</label>
            </div>
            <Buttonicon text="upload" classname="sec1b1" />
            <input
              type="file"
              name="hi"
              id="files"
              style={{ visibility: "hidden" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
