import "./TitleSection.css";

function TitleSection({ children, eyebrow, subtitle, variant = "light", align = "center" }) {
    return (
        <div className={`title-section title-section--${variant} title-section--${align}`}>
            {eyebrow && <span className="title-section__eyebrow">{eyebrow}</span>}
            <h2>{children}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default TitleSection;
