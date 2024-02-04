import Sec1span from "./sec1span"
import Sec1button from "./sec1button"
import Image from "next/image"
function Learningimgsec() {
    return (<>
        <div className="learningcont">
            <div className="headinglearningcont">
                <h1 style={{ margin: 0 }}>
                    Your Swiss Knife for <Sec1span text="learning any language" classname="sec1b1" />
                </h1>
            </div>
            <div className="desclearningcont">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
            <div className="piclearingcont">
                <div className="pic1">
                    <Image src="/assets/Images/Know_your_progress.png"
                        fill
                        //  width={430} height={430} 
                        className="objectcover"
                    />
                </div>
                <div className="pic2">
                    <Image src="/assets/Images/Compare_with_others.png" width={430} height={430} />
                </div>
                <div className="pic3">
                    <Image src="/assets/Images/Plan_your_lessons.png" width={430} height={430} />
                </div>
            </div>
            <Sec1button text="Learn more" classname="sec1b1" />
        </div>
    </>)
}
export default Learningimgsec