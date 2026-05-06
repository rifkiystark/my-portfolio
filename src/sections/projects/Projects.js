import CardProject from "../../components/card-project/CardProject";
import TitleSection from "../../components/title-section/TitleSection";
import "./Projects.css";
import dataProducts from "./data";

function Projects() {
    const [featuredProject, ...supportingProjects] = dataProducts;

    return (
        <section className="projects" id="projects">
            <div className="projects-layout">
                <aside className="projects-intro" data-aos="fade-right">
                    <TitleSection
                        eyebrow="Workroom"
                        subtitle="Kumpulan project saya susun seperti case-study docket: ada fokus utama, ringkasan peran, stack, dan akses cepat ke detail project."
                        align="left"
                    >
                        Proyek Terpilih
                    </TitleSection>
                    <div className="projects-index" aria-label="Daftar project">
                        {dataProducts.map((project, index) => (
                            <a key={project.productName} href={`#project-${index + 1}`}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                {project.productName}
                            </a>
                        ))}
                    </div>
                </aside>

                <div className="projects-board">
                    <CardProject product={featuredProject} index={0} featured />
                    <div className="projects-board__label">
                        <span>Project lainnya</span>
                        <strong>Build log</strong>
                    </div>
                    <div className="projects-bento">
                        {supportingProjects.map((product, idx) => (
                            <CardProject key={product.productName} product={product} index={idx + 1} compact />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
