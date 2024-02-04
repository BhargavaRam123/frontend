import Codeboxanimation from "./codeboxanimation"
import Sec1span from "./sec1span"
import Sec1button from "./sec1button"
function Sec3main() {
    var b = `<!DOCTYPE html>
    <html>
    <head><title>Example</title><linkrel="stylesheet"href="styles.css">
    </head>
    <body>
    <h1><a href="/">Header</a>
    </h1>
    <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
    </nav>`
    return (<>
        <div className="sec3container">
            <div><Codeboxanimation text={b} clr="#F1F2FF" /></div>
            <div className="sec3scontainer">
                <h1>Start <Sec1span text="coding in seconds" /> </h1>
                <p>Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
                <div>
                    <Sec1button text="Continue Lesson" classname="sec1b1" />
                    <Sec1button text="Learn more" classname="sec1b2" />
                </div>
            </div>
        </div>
    </>)
}

export default Sec3main