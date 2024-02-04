function Cardcomp(props) {
    return (<>
        <div className="card">
            <div style={{ paddingLeft: "30px", fontSize: "23px" }}>
                {props.heading}
            </div>
            <div style={{ padding: "30px", lineHeight: "1.5", color: "#77707F" }}>
                {props.description}
            </div>
            <div className="innercard">
                <div>{props.level}</div>
                <div>{props.lessionNumber}</div>
            </div>
        </div>
    </>)
}
export default Cardcomp