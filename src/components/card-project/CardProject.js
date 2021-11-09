import { Card, Col, Row } from "react-bootstrap"
import "./CardProject.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CardProject({ product }) {
    const openProject = (url) => {
        window.open(url);
    }
    useEffect(() => {
        Aos.init({
            duration: 500
        });
    }, []);
    return (
        <div data-aos="zoom-in">
            <Card body className="card-project" onClick={() => openProject(product.url)}>
                <Row>
                    <Col md={6} sm={12} className="card-project-col-left">
                        <img src={product.image} alt="" className="img img-fluid" />
                    </Col>
                    <Col md={6} sm={12} className="card-project-col-right">
                        <div className="card-project-title">{product.productName}</div>
                        <div className="card-project-content">{product.description}</div>
                        <div className="card-project-title-tech-stack">Tech Stack</div>
                        <div className="card-project-content-tech-stack">
                            {product.techStack.map((tech, idx) => <img key={idx} src={tech} alt="" className="tech-stack" />)}
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default CardProject