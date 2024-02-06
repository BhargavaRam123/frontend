import { useEffect, useState } from "react";
import style from "../addcourse.module.css";
import { apiconnector } from "@/app/services/apiconnector";
import { categories } from "@/app/services/apis";
import Uploadfile from "./uploadfile";
import { FaAngleRight } from "react-icons/fa";
import Requirementfield from "./requirementfield";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
export default function Inputform() {
  const {
    register,
    handleSubmit,
    setValue,
    getValue,
    formState: { errors },
  } = useForm();
  const { course, editCourse } = useSelector((state) => state.coursestage);
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
    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }
  }, []);
  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTitle !== course.courseName ||
      //currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      //currentValues.courseImage !== course.thumbnail ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString()
    )
      return true;
    else return false;
  };

  const onSubmit = async (data) => {
    //   if (editCourse) {
    //     if (isFormUpdated()) {
    //       const currentValues = getValues();
    //       const formData = new FormData();
    //       formData.append("courseId", course._id);
    //       if (currentValues.courseTitle !== course.courseName) {
    //         formData.append("courseName", data.courseTitle);
    //       }
    //       if (currentValues.courseShortDesc !== course.courseDescription) {
    //         formData.append("courseDescription", data.courseShortDesc);
    //       }
    //       if (currentValues.coursePrice !== course.price) {
    //         formData.append("price", data.coursePrice);
    //       }
    //       if (currentValues.courseBenefits !== course.whatYouWillLearn) {
    //         formData.append("whatYouWillLearn", data.courseBenefits);
    //       }
    //       if (currentValues.courseCategory._id !== course.category._id) {
    //         formData.append("category", data.courseCategory);
    //       }
    //       if (
    //         currentValues.courseRequirements.toString() !==
    //         course.instructions.toString()
    //       ) {
    //         formData.append(
    //           "instructions",
    //           JSON.stringify(data.courseRequirements)
    //         );
    //       }
    //       setLoading(true);
    //       const result = await editCourseDetails(formData, token);
    //       setLoading(false);
    //       if (result) {
    //         setStep(2);
    //         dispatch(setCourse(result));
    //       }
    //     } else {
    //       toast.error("NO Changes made so far");
    //     }
    //     console.log("PRINTING FORMDATA", formData);
    //     console.log("PRINTING result", result);
    //     return;
    //   }
    //   //create a new course
    //   const formData = new FormData();
    //   formData.append("courseName", data.courseTitle);
    //   formData.append("courseDescription", data.courseShortDesc);
    //   formData.append("price", data.coursePrice);
    //   formData.append("whatYouWillLearn", data.courseBenefits);
    //   formData.append("category", data.courseCategory);
    //   formData.append("instructions", JSON.stringify(data.courseRequirements));
    //   formData.append("status", COURSE_STATUS.DRAFT);
    //   setLoading(true);
    //   console.log("BEFORE add course API call");
    //   console.log("PRINTING FORMDATA", formData);
    //   const result = await addCourseDetails(formData, token);
    //   if (result) {
    //     setStep(2);
    //     dispatch(setCourse(result));
    //   }
    //   setLoading(false);
    //   console.log("PRINTING FORMDATA", formData);
    //   console.log("PRINTING result", result);
  };

  var levels = ["All", "Beginner", "Intermediate", "Advance"];
  var language = ["English", "Hindi"];
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className={style.inputformc}>
        <div className={style.inner}>
          <div className={style.heading1}>Course Title</div>
          <div>
            <input
              type="text"
              id="courseTitle"
              placeholder="Enter Course Name"
              {...register("courseTitle", { required: true })}
            />
            {errors.courseTitle && <span>Course title is required</span>}
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Course Short Description</div>
            <textarea
              id="courseShortDesc"
              {...register("courseShortDesc", { required: true })}
              placeholder="Enter Course Description"
              cols="9"
              rows="1"
            ></textarea>
            {errors.courseShortDesc && <span>Course Description Required</span>}
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Course Price</div>
            <textarea
              id="coursePrice"
              {...register("coursePrice", {
                required: true,
                valueAsNumber: true,
              })}
              placeholder="Enter Course Price"
              cols="1"
              rows="7"
            ></textarea>
            {errors.coursePrice && <span>Course Price is Required</span>}
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Course Category</div>
            <select
              id="courseCategory"
              defaultValue=""
              {...register("courseCategory", { required: true })}
            >
              <option>Choose a Category</option>
              {sublinks.map((o) => {
                return <option>{o.name}</option>;
              })}
            </select>
            {errors.courseCategory && <span>Course Category is Required</span>}
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Course Level</div>
            <select>
              <option>Choose a Level</option>
              {levels.map((o) => {
                return <option>{o}</option>;
              })}
            </select>
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Course Language</div>
            <select>
              <option>Choose a Language</option>
              {language.map((o) => {
                return <option>{o}</option>;
              })}
            </select>
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Tags </div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Course Thumbnail</div>
            <Uploadfile />
          </div>
        </div>
        <div>
          <div className={style.inner}>
            <div className={style.heading1}>Benefits of the course</div>
            <textarea
              id="benifits"
              {...register("courseBenifits", { required: true })}
              cols="30"
              rows="10"
            ></textarea>
            {errors.courseBenefits && <span>Course Benifits required</span>}
          </div>
        </div>
        <Requirementfield
          name="courseRequirements"
          register={register}
          errors={errors}
          setValue={setValue}
          getValue={getValue}
        />
        <div>
          <button className={style.btnstyle}>
            Next
            <FaAngleRight />
          </button>
        </div>
      </div>
    </form>
  );
}
