import { Container } from "react-bootstrap";
import CardProject from "../../components/card-project/CardProject";
import TitleSection from "../../components/title-section/TitleSection";
import "./Projects.css"
import dataProducts from './data';

function Projects() {
    return (
        <div className="projects">
            <Container>
                <TitleSection>Projects</TitleSection>
                <div className="wrapper-card-project">
                    {dataProducts.map((product) =>
                        <CardProject product={product} />
                    )}
                </div>

            </Container>
        </div>
    )
}

export default Projects;