"use client";
import style from "../settings.module.css";
import Buttonicon from "../../my-profile/components/buttonicon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Settingsp3 from "./settingsp3";
import { Updateprofile } from "@/app/services/operations/profileApi";

export default function Settingsp2({ data }) {
  const genders = [
    "Male",
    "Female",
    "Non-Binary",
    "Prefer not to say",
    "Other",
  ];
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  //   const router = useRouter();
  const dispatch = useDispatch();
  console.log("user list is:", user);
  const [userdata, setuserdata] = useState({
    firstName: user[0].firstName,
    lastName: user[0].lastName,
    dob: user[0].additionalDetails.dateofBirth,
    gender: user[0].additionalDetails.gender,
    contactnumber: user[0].additionalDetails.contactNumber,
    about: user[0].additionalDetails.about,
  });
  function handleonchange(e) {
    setuserdata((p) => {
      console.log("previous data is:", p);
      return { ...p, [e.target.name]: e.target.value };
    });
  }

  function handleonsubmit(e) {
    e.preventDefault();
    // console.log("handle on submit is called:", token);
    console.log(gender);
    dispatch(
      Updateprofile(
        firstName,
        lastName,
        dob,
        contactnumber,
        about,
        gender,
        token
      )
    );
  }
  const { firstName, lastName, dob, gender, contactnumber, about } = userdata;
  return (
    <div className={style.p2}>
      <div className={style.ipcontainer}>
        <div className={style.normal}>First Name</div>
        <div>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={handleonchange}
          />
        </div>
        <div className={style.normal}>Date of Birth</div>
        <div>
          <input type="date" value={dob} name="dob" onChange={handleonchange} />
        </div>
        <div className={style.normal}>Contact Number</div>
        <div>
          <input
            type="text"
            value={contactnumber}
            name="contactnumber"
            onChange={handleonchange}
            placeholder="Enter Your Contact Number"
          />
        </div>
      </div>
      <div className={style.ipcontainer}>
        <div className={style.normal}>Last Name</div>
        <div>
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={handleonchange}
          />
        </div>
        <div className={style.normal}>Gender</div>
        <div>
          <select onChange={handleonchange} name="gender">
            {genders.map((ele, i) => {
              return (
                <option key={i} value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <div className={style.normal}>About</div>
        <div>
          <input
            type="text"
            value={about}
            name="about"
            onChange={handleonchange}
            placeholder="Enter Bio Details"
          />
        </div>
        <form onSubmit={(e) => handleonsubmit(e)} className={style.savet}>
          <Settingsp3 />
        </form>
      </div>
    </div>
  );
}
