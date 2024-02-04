const BASE_URL = "http://localhost:8000/api/v1";
// process.env.REACT_APP_BASE_URL

export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
};
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASS_API: BASE_URL + "/auth/reset-password",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
};
export const profileroutes = {
  UPDATEPROFILE_API: BASE_URL + "/profile/updateProfile",
  GETENROLLEDCOURSES: BASE_URL + "/profile/getEnrolledCourses",
};
