import { setLoading } from "@/app/slices/authSlice";
import toast from "react-hot-toast";
import { apiconnector } from "../apiconnector";
import { endpoints } from "../apis";
import { setUser } from "@/app/slices/profileslice";
import { setToken } from "@/app/slices/authSlice";
const { SENDOTP_API } = endpoints;
export function sendOtp(email, router) {
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiconnector("POST", SENDOTP_API, { email });
      console.log("sendotp response....", response);

      console.log(response.data.success);

      if (!response.data.success) throw new Error(response.data.message);

      toast.dismiss(toastId);
      toast.success("OTP Sent Successfully");
      router.push("/verify-email");
    } catch (error) {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

export function getpasswordresettoken(email, setemailsent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("loading...");
    try {
      const response = await apiconnector(
        "POST",
        endpoints.RESETPASSTOKEN_API,
        { email }
      );

      console.log("reset password token response....", response);

      toast.success("Reset Email Sent");
      setemailsent(true);
      toast.dismiss(toastId);
      dispatch(setLoading(false));
      // console.log("set email status",emailsent)
    } catch (error) {
      toast.dismiss(toastId);
      dispatch(setLoading(false));
      console.log("reset password token error:", error.message);
    }
  };
}

export function changepassword(password, confirmpassword, token) {
  return async (dispatch) => {
    const toastid = toast.loading("Updating your password");
    try {
      dispatch(setLoading(true));
      const response = await apiconnector("POST", endpoints.RESETPASS_API, {
        password,
        confirmpassword,
        token,
      });
      console.log(response);
      toast.dismiss(toastid);
      dispatch(setLoading(false));
      toast.success("Password Successfully Changed!");
    } catch (error) {
      toast.dismiss(toastid);
      dispatch(setLoading(false));
      console.log("error occured in changepassword funciton:", error.message);
    }
  };
}

export default function signup(
  firstName,
  lastName,
  email,
  password,
  confirmpassword,
  accountType,
  otp,
  router
) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastid = toast.loading("Signing Up...");
    try {
      const response = await apiconnector("POST", endpoints.SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
        accountType,
        otp,
      });
      console.log(response);
      toast.dismiss(toastid);
      dispatch(setLoading(false));
      toast.success("Account Created!");
      router.push("/login");
    } catch (error) {
      dispatch(setLoading(false));
      toast.dismiss(toastid);
      console.log("error occured in signup function", error.message);
    }
  };
}

export function loginIn(email, password, router) {
  return async (dispatch) => {
    const toastid = toast.loading("Logging In...");
    try {
      dispatch(setLoading(true));
      const response = await apiconnector("POST", endpoints.LOGIN_API, {
        email,
        password,
      });
      console.log("logIn response:", response);
      toast.dismiss(toastid);
      try {
        toast.dismiss(toastid);
        dispatch(setUser({ ...response.data.isuserexists }));
      } catch (error) {
        dispatch(setLoading(false));
        console.log(
          "error while dispatching in logIn function:",
          error.message
        );
      }
      dispatch(setToken(response.data.token));
      toast.success("Logged In!");
      dispatch(setLoading(false));
      router.push("/dashboard/my-profile");
    } catch (error) {
      dispatch(setLoading(false));
      toast.dismiss(toastid);
      console.log("error occured in the loginIn function:", error.message);
    }
  };
}

export function logOut(router) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    // dispatch(resetCart())
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out");
  };
}
