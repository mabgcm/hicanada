import React from "react";
import { Button, Container } from "reactstrap";

const EmploymentHeader = () => {

    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });


    return (
        <>
            <div
                style={{
                    backgroundImage: "url(" + require("assets/img/employment.jpeg") + ")"
                }}
                className="page-header"
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1 className="text-light">Employment in Canada</h1>
                        <h4><strong className="text-light">Secrets to Employment Success in Canada: Your Ultimate Guide for Newcomers!</strong></h4>
                        <br />
                        <Button
                            href="https://youtu.be/Zx_y8rcYm_M"
                            className="btn-round mr-1"
                            color="neutral"
                            target="_blank"
                            outline
                        >
                            <i className="fa fa-play" />
                            Have an Idea
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default EmploymentHeader