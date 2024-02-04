"use client"
import { TypeAnimation } from 'react-type-animation';
function Codeboxanimation(props) {
    const blockvalue = props.text
    return (<>
        <div className="codebox1">
            <div className='insidecodebox'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
            </div>
            <div>

                <TypeAnimation
                    sequence={[blockvalue, 5000, ""]}
                    repeat={Infinity}
                    style={
                        {
                            whiteSpace: "pre-line",
                            display: "block",
                            lineHeight: "1.8",
                            color: props.clr
                        }
                    }
                />
            </div>
            {/* </p> */}
        </div>

    </>)
}
export default Codeboxanimation