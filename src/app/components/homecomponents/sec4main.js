import Sec1button from "./sec1button"
import Sec1span from "./sec1span"
function Sec4main() {
    return (<>
        <div className="sec4p1">
            <Sec1button text="Explore Full Catlog" classname="sec1b1" />
            <Sec1button text="Learn More" classname="sec1b2" />
        </div>
        <div className="sec4p2">
            <div style={{ width: "500px" }}>
                <h1 style={{ color: "#2c333f" }}>
                    Get the Skills you need for a <Sec1span text="Job that is in demand" />
                </h1>
            </div>
            <div className="sec4p2inner">
                <div style={{ color: "#2c333f" }}>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                <Sec1button text="Learn more" classname="sec1b1" />
            </div>
        </div>
    </>)
}
export default Sec4main