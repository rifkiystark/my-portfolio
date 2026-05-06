import myProfile from "../../images/my-profile.png";
import "./Cover.css";

const contactLinks = [
    { label: "Github", href: "https://github.com/rifkiystark" },
    { label: "Email", href: "mailto:ananda.rifkiy32@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anandarifkiy/" },
    { label: "WhatsApp", href: "https://wa.me/+62895417459300" },
];

const stackItems = ["Golang", "Microservices", "Event-Driven", "TypeScript", "Docker"];

function Cover() {
    return (
        <section className="section-cover" id="home">
            <div className="cover-panel cover-panel--identity" data-aos="fade-right">
                <div className="cover-id-card">
                    <img src={myProfile} alt="Ananda Rifkiy Hasan" className="img-header" />
                    <div className="profile-stamp">
                        <span>Based in Indonesia</span>
                        <strong>Fullstack Developer</strong>
                    </div>
                </div>
                <div className="cover-contact-card">
                    <span>Connect</span>
                    <nav aria-label="Link kontak dan profil">
                        {contactLinks.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="cover-panel cover-panel--statement" data-aos="fade-up" data-aos-delay="100">
                <p className="cover-kicker">Portfolio / Product-minded engineer</p>
                <h1 className="title-header">Ananda Rifkiy Hasan</h1>
                <p className="subtitle-header">
                    Saya merancang dan membangun aplikasi web, backend API, serta Android dengan perhatian pada alur produk, integrasi layanan, dan sistem yang mudah dipakai.
                </p>
                <div className="cover-actions">
                    <a className="cover-button cover-button--primary" href="#projects">Masuk ke Workroom</a>
                    <a className="cover-button cover-button--ghost" href="mailto:ananda.rifkiy32@gmail.com">Diskusi Project</a>
                </div>
            </div>

            <div className="cover-panel cover-panel--stack" data-aos="fade-left" data-aos-delay="180">
                <div className="stack-board" aria-label="Keahlian utama">
                    <span className="stack-board__label">Core Stack</span>
                    {stackItems.map((item, index) => (
                        <span key={item} className="stack-board__item" style={{ "--delay": `${index * 55}ms` }}>
                            {item}
                        </span>
                    ))}
                </div>
                <div className="cover-metric-grid" aria-label="Ringkasan portfolio">
                    <div>
                        <strong>06</strong>
                        <span>Project utama</span>
                    </div>
                    <div>
                        <strong>14</strong>
                        <span>Sertifikasi & HKI</span>
                    </div>
                    <div>
                        <strong>03</strong>
                        <span>Platform: Web, API, Android</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cover;
