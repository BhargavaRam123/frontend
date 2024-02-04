import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import Sec1span from "./sec1span.js"
function sec1comp() {
    return (
        <div> <div className="container">
            <div className='linkstyle'><Link href={"/signup"} style={{ textDecoration: 'inherit' }}>
                <div className='innerlink'>Become an Instructor <FaArrowRight />  </div>
            </Link></div>
            <div className='sec1h1'>Empower your Future with <Sec1span text="Coding Skills" /></div>
            <div className='sec1h2'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors</div>
        </div>
        </div>
    )
}
export default sec1comp
