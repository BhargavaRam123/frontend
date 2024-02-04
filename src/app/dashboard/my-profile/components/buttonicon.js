import { CiEdit } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
function Buttonicon(props) {
  return (
    <div>
      <button
        className={props.classname}
        style={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {props.text}
        {props.text === "Edit" ? (
          <CiEdit style={{ color: "black" }} />
        ) : (
          <MdOutlineFileUpload />
        )}
      </button>
    </div>
  );
}
export default Buttonicon;
