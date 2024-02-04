"use client"
import React from "react"
import Sec1span from "./sec1span"
import Cardcomp from "./cardcomp"
import { HomePageExplore } from "../../../../public/data/homepage-explore"
function Cardsection() {
    const paths = [
        "Free",
        "New to coding",
        "Most popular",
        "Skills paths",
        "Career paths"]
    const [selectedelement, setelement] = React.useState(paths[0])
    function updateelement(e) {
        setelement((e.target).innerHTML)
        // console.log(e)
        // console.log(selectedelement)
    }
    return (<>
        <div className="cardsectioncontainer">
            <div className="cardsectionheading">Unlock the <Sec1span text="power of Code" /></div>
            <div className="cardsectiondescription">Learn to build anything you can imagine</div>
            <div className="selector">
                {
                    paths.map((x) => {
                        return (
                            <div className={selectedelement === x ? "selectore" : ""} onClick={(e) => {
                                updateelement(e)
                            }}>
                                {x}
                            </div>)
                    })
                }
            </div>
            <div className="cards">
                {
                    (HomePageExplore.filter((x) => {
                        {/* console.log(x.tag) */ }
                        return x.tag === selectedelement
                    })[0].courses).map((e) => {
                        {/* console.log(e) */ }
                        return (<Cardcomp heading={e.heading} description={e.description} level={e.level}
                            lessionNumber={e.lessionNumber}
                        />)
                    })
                }
            </div>
        </div>
    </>)
}
export default Cardsection