import Sec1span from "./sec1span"
import Sec1button from "./sec1button"
import Codeboxanimation from "./codeboxanimation"
function Sec2main() {
    var b1 = `<!DOCTYPE html>\n<html>\n< head ><title>Example</title>\n<linkrel="stylesheet"href= "styles.css" >\n</head >\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/" > Three</a >\n</nav >`
    return (<>
        <div className="sec2container">
            <div className="sec2innercontainer">
                <h1>
                    Unlock Your <Sec1span text="coding potential" /> with our online courses
                </h1>
                <div>Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</div>
                <div className="bcontainer2">
                    <Sec1button text="Try it Yourself" classname="sec1b1" />
                    <Sec1button text="Learn more" classname="sec1b2" />
                </div>
            </div>
            <div><Codeboxanimation text={b1} clr="#F7D239" />
            </div>
        </div>
    </>)
}

export default Sec2main