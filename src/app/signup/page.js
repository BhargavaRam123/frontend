"use client"
import { useState } from "react"
import Sec1button from "../components/homecomponents/sec1button"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";
import { setSignupData, setLoading, setToken } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../utils/constants";
import { sendOtp } from "../services/operations/authApi";
import { useRouter } from "next/navigation";

export default function Signup() {
    const { loading } = useSelector((state) => state.auth)
    const router = useRouter()
    const dispatch = useDispatch()
    const [formdata, setformdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const { firstName, lastName, email, password, confirmpassword } = formdata

    function handlechange(e) {
        setformdata((pd) => {
            return {
                ...pd,
                [e.target.name]: e.target.value
            }
        })
        console.log("hey the formdata is:", formdata)
    }
    function handleonsubmit(e) {
        e.preventDefault()
        if (password !== confirmpassword) {
            toast.error("Password Do Not Match")
            return
        }

        const signupdata = {
            ...formdata,
            selectedelement,
        }

        dispatch(setSignupData(signupdata))


        dispatch(sendOtp(formdata.email, router))

        // reseting data
        setformdata({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: ""
        })
        setelement(ACCOUNT_TYPE.STUDENT)
    }
    function updateelement(e) {
        setelement((e.target).innerHTML)
    }
    function hidepass() {
        sethide(!hide)
    }
    console.log("loading value", loading)
    const [hide, sethide] = useState(true)
    const [selectedelement, setelement] = useState("Student")
    return loading ? (<div style={{ display: "flex", height: "80vh", justifyContent: "center", paddingTop: "50px" }}>
        <div className="loader"></div>
    </div>) :
        (<>
            <form onSubmit={handleonsubmit}>

                <div className="logincontainer">
                    <div className="leftlogin">
                        <div className="heading">Join the millions learning to code with StudyNotion for free</div>
                        <div className="normal">Build skills for today, tomorrow, and beyond. Education to future-proof your career.</div>
                        <div className="selectionbar normal">
                            <div onClick={(e) => {
                                updateelement(e)
                            }} className={selectedelement === "Student" ? "selectionbarinner" : ""}>Student</div>
                            <div onClick={(e) => {
                                updateelement(e)
                            }} className={selectedelement === "Instructor" ? "selectionbarinner" : ""}>Instructor</div>
                        </div>
                        <div className="name">
                            <div className="iname1">
                                <div className="heading1">First Name</div>
                                <input type="text" name="firstName" value={firstName} onChange={handlechange} />
                            </div>
                            <div className="iname1">
                                <div className="heading1">Last Name</div>
                                <input type="text" name="lastName" value={lastName} onChange={handlechange} />
                            </div>
                        </div>
                        <div className="email">
                            <div className="iname1">
                                <div className="heading1">Email Address</div>
                                <input type="text" style={{ width: "98%" }} name="email" value={email} onChange={handlechange} />
                            </div>
                        </div>
                        <div className="password">
                            <div className="iname1">
                                <div className="heading1">Create Password</div>
                                <input name="password" value={password} type={hide === false ? "text" : "password"} onChange={handlechange} />
                                {hide === true ? <FaEye style={{ color: "white", position: "relative", bottom: "39px", left: "90%" }} onClick={() => { hidepass() }} /> :
                                    <FaRegEyeSlash style={{ color: "white", position: "relative", bottom: "39px", left: "90%" }}
                                        onClick={() => { hidepass() }} />}
                            </div>
                            <div className="iname1">
                                <div className="heading1">Confirm Password</div>
                                <input value={confirmpassword} name="confirmpassword" type={hide === false ? "text" : "password"} onChange={handlechange} />
                                {hide === true ? <FaEye style={{ color: "white", position: "relative", bottom: "39px", left: "90%" }} onClick={() => { hidepass() }} /> :
                                    <FaRegEyeSlash style={{ color: "white", position: "relative", bottom: "39px", left: "90%" }}
                                        onClick={() => { hidepass() }} />}
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Sec1button text="Create Account" classname="sec1b1" type="submit" />
                        </div>
                    </div>
                    <div className="rightlogin">
                        <Image src="/assets/Images/signup.webp"
                            layout="responsive"
                            height={500}
                            width={560}
                        />

                    </div>
                </div>
            </form>
        </>)
}