import Link from "next/link";
import { FooterLink2 } from "../../../../public/data/footer-links";

function Footer() {
    // console.log(FooterLink2)
    const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
    const Resources = [
        "Articles",
        "Blog",
        "Chart Sheet",
        "Code challenges",
        "Docs",
        "Projects",
        "Videos",
        "Workspaces",
    ];
    const Plans = ["Paid memberships", "For students", "Business solutions"];
    const Community = ["Forums", "Chapters", "Events"];
    const company = ["About", "Careers", "Affiliates"]
    return (<>
        <div className="footercontainer">
            <div className="finner">
                <div className="fheading">Company</div>
                {
                    company.map((x) => {
                        return (
                            <div>
                                <Link href="/" style={{ textDecoration: "none", color: "#6e727f" }}>
                                    {x}
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
            <div className="finner">
                <div className="fheading">Resources</div>
                {
                    Resources.map((x) => {
                        return (
                            <div>
                                <Link href="/" style={{ textDecoration: "none", color: "#6e727f" }}>
                                    {x}
                                </Link>
                            </div>
                        )
                    })
                }
                <div className="fheading">Support</div>
                <div>
                    <Link href="/" style={{ textDecoration: "none", color: "#6e727f" }}>
                        Help Center
                    </Link>

                </div>
            </div>
            <div className="finner">
                <div className="fheading">Plans</div>
                {
                    Plans.map((x) => {
                        return (
                            <div>
                                <Link href="/" style={{ textDecoration: "none", color: "#6e727f" }}>
                                    {x}
                                </Link>
                            </div>
                        )
                    })
                }
                <div className="fheading">Community</div>
                {
                    Community.map((x) => {

                        return (
                            <div>
                                <Link href="/" style={{ textDecoration: "none", color: "#6e727f" }}>
                                    {x}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            {
                FooterLink2.map((x) => {
                    return (
                        <div>
                            <div className="finner">
                                <div className="fheading">{x.title}</div>
                                {
                                    (x.links).map((obj) => {
                                        {/* console.log(x) */ }
                                        return (
                                            <Link href={obj.link} style={{ textDecoration: "none", color: "#6e727f" }}>
                                                {obj.title}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </>)
}
export default Footer