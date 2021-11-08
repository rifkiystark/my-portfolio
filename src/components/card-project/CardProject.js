import { Card, Col, Row } from "react-bootstrap"
import "./CardProject.css"

function CardProject({product}) {
    return (
        <Card body className="card-project">
            <Row>
                <Col md={6} sm={12} className="card-project-col-left">
                    <img src={product.image} alt="" />
                </Col>
                <Col md={6} sm={12} className="card-project-col-right">
                    <div className="card-project-title">{product.productName}</div>
                    <div className="card-project-content">{product.description}</div>
                    <div className="card-project-title-tech-stack">Tech Stack</div>
                    <div className="card-project-content-tech-stack">
                        { product.techStack.map((tech) => <img src={tech} alt="" className="tech-stack" />)}
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default CardProject