"use client"
import Vid from "../../../../public/assets/Images/banner.mp4"
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
function Sec1vid() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        <>
            {/* <div className="vidcontainer"> */}

            {domLoaded && (
                <ReactPlayer url={Vid} playing={true} autoplay={true} playsinline={true}
                    width="1200px"
                    height="850px"
                    muted={true}
                    loop={true}
                    style={{ margin: "0", padding: "0" }}
                />
            )}
            {/* </div> */}
        </>
    )

}
export default Sec1vid