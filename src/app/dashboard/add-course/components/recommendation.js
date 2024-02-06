import style from "../addcourse.module.css";
import { AiFillThunderbolt } from "react-icons/ai";
export default function Recommendation() {
  return (
    <div className={style.rcontainer}>
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          alignItems: "center",
          gap: "7px",
        }}
      >
        <AiFillThunderbolt style={{ color: "orange" }} />
        Course Upload Tips
      </div>
      <div>
        <ul>
          <li>Set the Course Price option or make it free.</li>
          <li>Standard size for the course thumbnail is 1024x576.</li>
          <li>Video section controls the course overview video.</li>
          <li>Course Builder is where you create & organize a course.</li>
          <li>
            Add Topics in the Course Builder section to create lessons, quizzes,
            and assignments.
          </li>
          <li>
            Information from the Additional Data section shows up on the course
            single page.
          </li>
          <li>Make Announcements to notify any important</li>
          <li>Notes to all enrolled students at once.</li>
        </ul>
      </div>
    </div>
  );
}
