import Image from "next/image"
function Timelinesec() {

    var arr = [
        {
            Logo: "/assets/TimeLineLogo/Logo1.svg",
            title: "Leadership",
            description: "Fully committed to the success company"
        },
        {
            Logo: "/assets/TimeLineLogo/Logo2.svg",
            title: "Leadership",
            description: "Fully committed to the success company"
        },
        {
            Logo: "/assets/TimeLineLogo/Logo3.svg",
            title: "Leadership",
            description: "Fully committed to the success company"
        },
        {
            Logo: "/assets/TimeLineLogo/Logo4.svg",
            title: "Leadership",
            description: "Fully committed to the success company"
        },
    ]

    return (<>
        <div className="timelinecontainer">
            <div className="timelinesteps">
                {
                    arr.map((obj) => {
                        return (
                            <div className="timelineeach">
                                <div className="timelineimg">
                                    <Image src={obj.Logo} height={25} width={25} />
                                </div>

                                <div className="timelinecontent">
                                    <h4>{obj.title}</h4>
                                    <div style={{ fontSize: "18px" }}>{obj.description}</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="timelinephoto">
                <div className="timelinephoto1">
                    <Image src="/assets/Images/TimelineImage.png"
                        // layout="responsive"
                        fill
                        className="objectcover"
                    // width="622" height="470"
                    />
                </div>
                <div className="overimage">
                    <div className="leftc">
                        <div style={{ fontSize: "30px" }}>10</div>
                        <div style={{ color: "#04A77B" }}>YEARS OF EXPERIENCE</div>
                    </div>
                    <div className="line"></div>
                    <div className="rightc">
                        <div style={{ fontSize: "30px" }}>250</div>
                        <div style={{ color: "#04A77B" }}>TYPE OF COURSES</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Timelinesec