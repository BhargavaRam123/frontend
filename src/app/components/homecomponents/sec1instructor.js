import Image from "next/image"
import Sec1span from "./sec1span"
import Sec1button from "./sec1button"
function Sec1instructor() {
    return (<>
        <div className="maininstructor">
            <div className="maininstructorimg">
                <div className="insimg">
                    <Image src="/assets/Images/Instructor.png"
                        className="objectcover"
                        fill
                    // height={543} width={600}
                    />
                </div>
            </div>
            <div className="becomeinstructor">
                <div style={{ fontSize: "38px" }} >Become an <Sec1span text="Instructor" /> </div>
                <div style={{ color: "#838894", fontSize: "19px" }}>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</div>
                <Sec1button text="Start Learning Today" classname="sec1b1" />
            </div>
        </div>
    </>)
}
export default Sec1instructor