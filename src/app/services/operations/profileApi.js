import { apiconnector } from "../apiconnector";
import toast, { resolveValue } from "react-hot-toast";
import { profileroutes } from "../apis";
export function Updateprofile(
  firstName,
  lastName,
  dateofBirth,
  contactNumber,
  about,
  gender,
  token
) {
  return async (dispatch) => {
    const toastid = toast.loading("Updating Profile...");
    console.log("trying to pass the token:", token);
    try {
      const response = await apiconnector(
        "PUT",
        profileroutes.UPDATEPROFILE_API,
        {
          firstName,
          lastName,
          dateofBirth,
          contactNumber,
          about,
          gender,
        },
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
      toast.dismiss(toastid);
      toast.success("Updated profile!");
    } catch (error) {
      toast.dismiss(toastid);
      console.log("error in updateprofile in services:", error.message);
    }
  };
}

export async function getuserenrolledcourses(token) {
  const toastid = toast.loading("loading...");
  var result;
  try {
    const response = await apiconnector(
      "GET",
      profileroutes.GETENROLLEDCOURSES,
      null,
      { Authorization: `Bearer ${token}` }
    );
    console.log("called getuserenrolledcourses:", response);
    if (!response.data.success) throw new Error(response.data.message);
    result = response;
  } catch (error) {
    console.log(
      "error occured in the userenrolledcourses function:",
      error.message
    );
    toast.error("Could Not get Enrolled Courses");
  }
  toast.dismiss(toastid);
  toast.success("fetching done!");
  return result.data.data;
}
