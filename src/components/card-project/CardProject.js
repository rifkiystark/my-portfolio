import "./CardProject.css";

function CardProject({ product, index, featured = false, compact = false }) {
    const hasProjectUrl = Boolean(product.url);
    const projectId = `project-${index + 1}`;
    const cardClassName = [
        "card-project",
        featured ? "card-project--featured" : "",
        compact ? "card-project--compact" : "",
    ].filter(Boolean).join(" ");

    return (
        <article id={projectId} className={cardClassName} data-aos="fade-up" data-aos-delay={index * 70}>
            <div className="card-project__media">
                <span className="card-project__number">{String(index + 1).padStart(2, "0")}</span>
                <div className="card-project__screen">
                    <img src={product.image} alt={product.imageAlt} className="card-project-image" />
                </div>
            </div>

            <div className="card-project__body">
                <div className="card-project-meta">
                    <span>{product.category}</span>
                    <span>{product.role}</span>
                </div>
                <h3 className="card-project-title">{product.productName}</h3>
                <p className="card-project-highlight">{product.highlight}</p>
                <p className="card-project-content">{product.description}</p>

                <div className="card-project__footer">
                    <div className="card-project-tech-row">
                        <span className="card-project-title-tech-stack">Stack</span>
                        <div className="card-project-content-tech-stack" aria-label={`Tech stack ${product.productName}`}>
                            {product.techStack.map((tech) => (
                                <span className="tech-stack-chip" key={tech.name} title={tech.name}>
                                    <img src={tech.icon} alt={tech.name} className="tech-stack" />
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {hasProjectUrl ? (
                        <a className="project-link" href={product.url} target="_blank" rel="noreferrer">
                            {product.ctaLabel}
                            <span aria-hidden="true">↗</span>
                        </a>
                    ) : (
                        <span className="project-link project-link--muted">{product.ctaLabel}</span>
                    )}
                </div>
            </div>
        </article>
    );
}

export default CardProject;
