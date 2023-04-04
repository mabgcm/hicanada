import React from "react";
import { Button, Container } from "reactstrap";

const EduHeader = () => {
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
                    backgroundImage: "url(" + require("assets/img/eduheader.jpg") + ")"
                }}
                className="page-header"
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1 className="text-light">Education in Canada</h1>
                        <h4><strong className="text-light">With these insider tips, you can unlock the secrets of Canada's education system and transform your academic journey!</strong></h4>
                        <br />
                        <Button
                            href="https://www.youtube.com/watch?v=DC0fTMJKzlc"
                            className="btn-round mr-1"
                            color="neutral"
                            target="_blank"
                            outline
                        >
                            <i className="fa fa-play" />
                            Overview
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default EduHeader