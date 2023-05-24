import React from "react";
import { Button, Container } from "reactstrap";

const TransportHeader = () => {

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
                    backgroundImage: "url(" + require("assets/img/transport.jpeg") + ")"
                }}
                className="page-header"
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1 className="text-light">Transportation in Canada</h1>
                        <h4><strong className="text-light">Essential Tips for Comfortable and Affordable Travel in Canada</strong></h4>
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

export default TransportHeader