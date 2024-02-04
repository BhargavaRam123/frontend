"use client";
import style from "../myprofile.module.css";
import Buttonicon from "./buttonicon";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Myprofilep3({ data }) {
  const router = useRouter();
  return (
    <div className={style.p3}>
      <div className={style.personalcontainer}>
        <div className={style.personalcontaineri}>
          <div>
            <div className={style.snormal}>First Name</div>
            <div className={style.snormalw}>{data[0].firstName}</div>
          </div>
          <div>
            <div className={style.snormal}>Last Name</div>
            <div className={style.snormalw}>{data[0].lastName}</div>
          </div>
        </div>
        <div className={style.personalcontaineri}>
          <div>
            <div className={style.snormal}>Email</div>
            <div className={style.snormalw}>{data[0].email}</div>
          </div>
          <div>
            <div className={style.snormal}>Phone Number</div>
            <div className={style.snormalw}>
              {data[0].additionalDetails.contactNumber === null
                ? "Add Contact Number"
                : data[0].additionalDetails.contactNumber}
            </div>
          </div>
        </div>
        <div className={style.personalcontaineri}>
          <div>
            <div className={style.snormal}>Gender</div>
            <div className={style.snormalw}>
              {data[0].additionalDetails.gender === null
                ? "Add gender"
                : data[0].additionalDetails.gender}
            </div>
          </div>
          <div>
            <div className={style.snormal}>Date of Birth</div>
            <div className={style.snormalw}>
              {data[0].additionalDetails.dateofBirth === null
                ? "Add Date Of Birth"
                : data[0].additionalDetails.dateofBirth}
            </div>
          </div>
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
