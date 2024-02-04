import { useRef } from "react";
import style from "../addcourse.module.css";
import { IoCloudUploadOutline } from "react-icons/io5";
export default function Uploadfile() {
  const fileInputref = useRef(null);
  function handleonclick() {
    fileInputref.current.click();
  }
  return (
    <div className={style.ucontainer} onClick={handleonclick}>
      <div>
        <input
          type="file"
          multiple
          style={{ display: "none" }}
          ref={fileInputref}
        />
        <IoCloudUploadOutline
          style={{ color: "yellow", width: "60px", height: "60px" }}
        />
      </div>
      <div>Drag and drop an image, or click to Browse a file</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <div>
          <ul>
            <li>Aspect ratio 16:9</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Recommended size 1024x576</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
