import React from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    UncontrolledTooltip,
} from "reactstrap";

const Asylum = () => {
    return (
        <div>
            <p className="mb-4"><strong>Asylum seekers in Canada are people who have fled their home countries because they fear persecution or danger. They are seeking protection and refugee status in Canada so that they can live in safety and freedom. Asylum seekers may come from various countries around the world, and they may have experienced persecution due to their race, religion, political beliefs, nationality, or membership in a particular social group.</strong></p>

            <p className="mb-4"><strong>When asylum seekers arrive in Canada, they can make a claim for refugee protection. This claim will be reviewed by the Immigration and Refugee Board of Canada to determine if the individual meets the criteria for refugee status. Asylum seekers can arrive in Canada through a regular port of entry or by crossing the border irregularly.</strong></p>

            <p className="mb-4"><strong>Canada has a long tradition of providing refuge to people who are fleeing persecution or danger in their home countries. Asylum seekers in Canada have access to legal, medical, and social services while their claims are being processed. Canada also has programs to help refugees settle in their new communities and to integrate into Canadian society.</strong></p>
            <Container className="mb-5">
                <Row>
                    <Col md='4' className="text-center my-auto" >
                        <Button
                            className="btn-round"
                            color="danger"
                            href="https://youtu.be/XpJ9gkqZLzU"
                            target='_blank'
                        >
                            How to Claim
                        </Button>
                    </Col>
                    <Col md='4' className="text-center" >
                        <h6>watch more about Refugee Criteria</h6>
                        <nav aria-label="Page navigation example"  >
                            <Pagination style={{ display: 'flex', justifyContent: 'center' }}>
                                <PaginationItem>
                                    <PaginationLink
                                        href="https://youtu.be/N1zCRD5j6cg"
                                        id="video1"
                                        target='_blank'

                                    >
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="bottom"
                                    target="video1"
                                >
                                    Refugee Status Determination (RSD)
                                </UncontrolledTooltip>

                                <PaginationItem>
                                    <PaginationLink
                                        href="https://youtu.be/HmaLaY-Q7EQ"
                                        id="video2"
                                        target='_blank'
                                    >
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="bottom"
                                    target="video2"
                                >
                                    UNHCR Interview Preparation
                                </UncontrolledTooltip>

                                <PaginationItem>
                                    <PaginationLink
                                        href="https://youtu.be/JLqEFmVMgWU"
                                        id="video3"
                                        target='_blank'
                                    >
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="bottom"
                                    target="video3"
                                >
                                    How to Launch an Appeal
                                </UncontrolledTooltip>




                            </Pagination>
                        </nav>
                    </Col>
                    <Col md='4' className="text-center my-auto">
                        <Button
                            className="btn-round"
                            color="danger"
                            href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2017/03/claiming_asylum_incanadawhathappens.html"
                            target='_blank'
                        >
                            Procedure
                        </Button>
                    </Col>
                </Row>
            </Container></div>
    )
}

export default Asylum