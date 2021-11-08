import { Col, Container, Row, Card } from "react-bootstrap";
import TitleSection from '../../components/title-section/TitleSection';
import dataCertificates from "./data";
import "./Certificate.css";

function Certificates() {

    const openCertificate = (url) => {
        window.open(url);
    }
    return (
        <div className="certificates">
            <Container>
                <TitleSection>Certificates</TitleSection>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {dataCertificates.map((certificate) => (
                        <Col>
                            <Card onClick={() => openCertificate(certificate.url)} className="card-certificate">
                                <Card.Img variant="top" src={certificate.image} className="img-certificate" />
                                <Card.Body>
                                    <Card.Title>{certificate.title}</Card.Title>
                                    <Card.Text>
                                        {certificate.subtitle}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Certificates;