"use state";

import { useSelector } from "react-redux";
import style from "../addcourse.module.css";
export default function Statusbar() {
  const { coursecreationstage } = useSelector((stage) => stage.coursestage);
  console.log("stage is :", coursecreationstage);
  const arr = [
    {
      id: 1,
      desc: "Course Information",
    },
    {
      id: 2,
      desc: "Course Builder",
    },
    {
      id: 3,
      desc: "Publish",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
        }}
      >
        {arr.map((o) => {
          return (
            <div className={style.line}>
              {o.id === 1 ? null : <div className={style.iline}></div>}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className={
                    coursecreationstage === o.id ? style.sround : style.round
                  }
                >
                  {o.id}
                </div>
                <div className={style.iname}>{o.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
