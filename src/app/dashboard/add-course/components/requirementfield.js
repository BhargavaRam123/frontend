"use client";
import style from "../addcourse.module.css";
import { useEffect, useState } from "react";

export default function Requirementfield({
  name,
  register,
  errors,
  setValue,
  getValue,
}) {
  const [requirement, setrequirement] = useState("");
  const [requirementlist, setrequirementlist] = useState([]);
  function addRequirement() {
    console.log("requirement value is:", requirement);
    if (requirement) {
      setrequirementlist([...requirementlist, requirement]);
      setrequirement("");
    }
  }

  useEffect(() => {
    console.log("array changed", requirementlist.length);
  }, [requirementlist]);
  function remove(index) {
    const updatelist = [...requirementlist];
    updatelist.splice(index, 1);
    setrequirementlist(updatelist);
  }
  useEffect(() => {
    register(name, { required: true, validate: (value) => value.length > 0 });
  }, []);
  useEffect(() => {
    setValue(name, requirementlist);
  }, []);
  return (
    <div>
      <div className={style.inner}>
        <div className={style.heading1}>Requirements/Instructions</div>
        <input
          type="text"
          id="requirement"
          value={requirement}
          onChange={(e) => {
            setrequirement(e.target.value);
          }}
        />
        {errors[name] && <span>requirements are required</span>}
      </div>
      <div
        style={{ color: "yellow", cursor: "pointer", marginTop: "10px" }}
        onClick={addRequirement}
      >
        Add
      </div>
      {requirementlist.length > 0 && (
        <ul>
          {requirementlist.map((e, i) => (
            <li key={i}>
              <div className={style.heading}>{e}</div>
              <button
                onClick={(e) => {
                  remove(i);
                }}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
