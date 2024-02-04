import { useEffect, useState } from "react";
import style from "../addcourse.module.css";
import { apiconnector } from "@/app/services/apiconnector";
import { categories } from "@/app/services/apis";
import Uploadfile from "./uploadfile";
export default function Inputform() {
  const [coursecreationdata, setcoursecreationdata] = useState({
    coursetitle: "",
    description: "",
    courseprice: "",
    coursecategory: "",
    courselevel: "",
    courselangauge: "",
    tags: "",
    thumbnail: "",
    benifits: "",
    requirements: "",
  });
  const [sublinks, setsublinks] = useState([]);
  async function getallcategories() {
    const result = await apiconnector("Get", categories.CATEGORIES_API);
    // console.log("result is:", result.data.category)
    console.log("categories are", result.data.category);
    setsublinks(result.data.category);
  }
  function handlechange(e) {
    setcoursecreationdata((pd) => {
      return {
        ...pd,
        [e.target.name]: e.target.value,
      };
    });
  }
  useEffect(() => {
    getallcategories();
  }, []);
  var levels = ["All", "Beginner", "Intermediate", "Advance"];
  var language = ["English", "Hindi"];
  return (
    <div className={style.inputformc}>
      <div className={style.inner}>
        <div className={style.heading1}>Course Title</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        <div className={style.heading1}>Course Short Description</div>
        <div className={style.inner}>
          <textarea name="description" cols="9" rows="1"></textarea>
        </div>
      </div>
      <div>
        <div className={style.heading1}>Course Price</div>
        <div className={style.inner}>
          <textarea name="courseprice" cols="1" rows="7"></textarea>
        </div>
      </div>
      <div>
        <div className={style.heading1}>Course Category</div>
        <div className={style.inner}>
          <select name="" id="">
            <option>Choose a Category</option>
            {sublinks.map((o) => {
              return <option>{o.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <div className={style.heading1}>Course Level</div>
        <div className={style.inner}>
          <select>
            <option>Choose a Level</option>
            {levels.map((o) => {
              return <option>{o}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <div className={style.heading1}>Course Language</div>
        <div className={style.inner}>
          <select>
            <option>Choose a Language</option>
            {language.map((o) => {
              return <option>{o}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <div className={style.heading1}>Tags </div>
        <div className={style.inner}>
          <input type="text" />
        </div>
      </div>
      <div>
        <div className={style.heading1}>Course Thumbnail</div>
        <div className={style.inner}>
          <Uploadfile />
        </div>
      </div>
      <div>
        <div className={style.heading1}>Benefits of the course</div>
        <div className={style.inner}>
          <textarea name="benifits" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div>
        <div className={style.heading1}>Requirements/Instructions</div>
        <div className={style.inner}>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
