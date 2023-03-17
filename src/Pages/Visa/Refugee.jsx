import React from 'react';
import {
    Button,
    Modal,
    Container,
    Row,
    Col,
} from "reactstrap";

const Refugee = () => {


    const [modal8, setModal8] = React.useState(false);
    const [modal9, setModal9] = React.useState(false);
    const [modal10, setModal10] = React.useState(false);

    const toggleModal8 = () => {
        setModal8(!modal8);
    };
    const toggleModal9 = () => {
        setModal9(!modal9);
    };
    const toggleModal10 = () => {
        setModal10(!modal10);
    };

    return (
        <div>
            <p><strong>Refugees are individuals who have been forced to flee their home country due to persecution, war, or violence. They are granted legal status in Canada if they are found to be a Convention refugee or a person in need of protection.</strong></p>
            <Container>
                <Row className="text-center">
                    <Col md="4">
                        <div className="info mt-5">
                            <div className="icon icon-danger">
                                {/* <GiBackpack /> */}
                            </div>
                            <div className="description">
                                <h5 className="info-title">Government-Assisted Refugees (GARs)</h5>
                                <p className="description">
                                    <strong>These are refugees who are referred to Canada by the United Nations Refugee Agency (UNHCR) or other designated referral organizations, and who are resettled in Canada with financial and other assistance from the Canadian government.</strong>
                                </p>
                                <Button className="btn-link" color="danger"
                                    onClick={toggleModal8}>
                                    Learn more
                                </Button>
                                <Modal isOpen={modal8} toggle={toggleModal8}>
                                    <div className="modal-header">
                                        <button
                                            aria-label="Close"
                                            className="close"
                                            type="button"
                                            onClick={toggleModal8}
                                        >
                                            <span aria-hidden={true}>×</span>
                                        </button>
                                        <h5
                                            className="modal-title text-center"
                                            id="exampleModalLabel1"
                                        >
                                            Government-Assisted Refugees
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Government-Assisted Refugees (GARs) are refugees who are identified and referred to Canada by the United Nations Refugee Agency (UNHCR) or other designated referral organizations. Once they arrive in Canada, they receive financial and settlement support from the Canadian government for up to one year. This includes help with housing, food, and other basic necessities, as well as language training, employment assistance, and other services to help them integrate into Canadian society. GARs are usually the most vulnerable refugees, such as those who are at risk of persecution or violence, and who are unable to support themselves.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info mt-5">
                            <div className="icon icon-danger">
                                {/* <GiBookshelf /> */}
                            </div>
                            <div className="description">
                                <h5 className="info-title">Privately Sponsored Refugees (PSRs)</h5>
                                <p>
                                    <strong>These are refugees who are sponsored by private individuals, groups or organizations, such as community or faith-based groups, and who are provided with financial and settlement support for their first year in Canada.</strong>
                                </p>
                                <Button className="btn-link" color="danger" onClick={toggleModal9}>
                                    Learn more
                                </Button>
                                <Modal isOpen={modal9} toggle={toggleModal9}>
                                    <div className="modal-header">
                                        <button
                                            aria-label="Close"
                                            className="close"
                                            type="button"
                                            onClick={toggleModal9}
                                        >
                                            <span aria-hidden={true}>×</span>
                                        </button>
                                        <h5
                                            className="modal-title text-center"
                                            id="exampleModalLabel2"
                                        >
                                            Privately Sponsored Refugees
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Privately Sponsored Refugees (PSRs) are refugees who are sponsored by private individuals, groups, or organizations in Canada. Sponsors commit to providing financial, emotional, and settlement support to the refugees for up to one year, including help with housing, food, and other basic needs, as well as language training, employment assistance, and other services to help them integrate into Canadian society. PSRs are often family members or friends of the sponsors, but can also be sponsored by community or faith-based groups.</p>
                                    </div>
                                    {/* <div className="modal-footer">
                                        <Button
                                            className="btn-link"
                                            color="danger"
                                            type="button"
                                            href='https://youtu.be/ppjAfA63_ak'
                                            target='_blank'
                                        >
                                            Watch More
                                        </Button>
                                    </div> */}
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info mt-5">
                            <div className="icon icon-danger">
                                {/* <MdWork /> */}
                            </div>
                            <div className="description">
                                <h5 className="info-title">Blended Visa Office-Referred Refugees (BVORs)</h5>
                                <p>
                                    <strong>These refugees are referred to Canada by the UNHCR or other designated referral organizations, and resettled in Canada with both financial support from the Canadian government and sponsorship from private individuals, groups or organizations.</strong>
                                </p>
                                <Button className="btn-link" color="danger" onClick={toggleModal10}>
                                    Learn more
                                </Button>
                                <Modal isOpen={modal10} toggle={toggleModal10}>
                                    <div className="modal-header">
                                        <button
                                            aria-label="Close"
                                            className="close"
                                            type="button"
                                            onClick={toggleModal10}
                                        >
                                            <span aria-hidden={true}>×</span>
                                        </button>
                                        <h5
                                            className="modal-title text-center"
                                            id="exampleModalLabel2"
                                        >
                                            Blended Visa Office-Referred Refugees
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Blended Visa Office-Referred Refugees (BVORs) are refugees who are referred to Canada by the United Nations Refugee Agency (UNHCR) or other designated referral organizations, and who are resettled in Canada with both financial support from the Canadian government and sponsorship from private individuals, groups or organizations. The government provides up to six months of financial support, while the sponsor provides settlement support for up to one year. This category of refugees is intended to increase the number of refugees resettled in Canada and to encourage private sponsorship.</p>
                                    </div>
                                    {/* <div className="modal-footer">
                                        <Button
                                            className="btn-link"
                                            color="danger"
                                            type="button"
                                            href='https://www.canadavisa.com/canada-pnp-finder-and-tracker.html'
                                            target='_blank'
                                        >
                                            Check PNP Finder
                                        </Button>
                                    </div> */}
                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Refugee