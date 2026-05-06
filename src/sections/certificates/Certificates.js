import TitleSection from "../../components/title-section/TitleSection";
import dataCertificates from "./data";
import "./Certificate.css";

function Certificates() {
    const certificationItems = dataCertificates.filter((certificate) => certificate.type === "Sertifikasi");
    const hkiItems = dataCertificates.filter((certificate) => certificate.type === "Hak Kekayaan Intelektual");

    return (
        <section className="certificates" id="certificates">
            <div className="certificates-layout">
                <div className="certificates-heading" data-aos="fade-right">
                    <TitleSection
                        eyebrow="Credentials"
                        subtitle="Bagian ini dibuat seperti evidence wall: sertifikasi teknis sebagai kartu visual, HKI sebagai ledger dokumen yang ringkas."
                        variant="dark"
                        align="left"
                    >
                        Sertifikasi & HKI
                    </TitleSection>
                    <div className="certificate-counts" aria-label="Ringkasan kredensial">
                        <div>
                            <strong>{certificationItems.length}</strong>
                            <span>Sertifikasi</span>
                        </div>
                        <div>
                            <strong>{hkiItems.length}</strong>
                            <span>HKI</span>
                        </div>
                    </div>
                </div>

                <div className="certificates-showcase">
                    <div className="certificate-gallery" aria-label="Sertifikasi teknis">
                        {certificationItems.map((certificate, idx) => (
                            <a
                                href={certificate.url}
                                target="_blank"
                                rel="noreferrer"
                                className="card-certificate card-certificate--visual"
                                data-aos="fade-up"
                                data-aos-delay={(idx % 4) * 70}
                                key={`${certificate.issuer}-${certificate.title}`}
                            >
                                <div className="certificate-image-wrap">
                                    <img src={certificate.image} className="img-certificate" alt={certificate.imageAlt} />
                                </div>
                                <div className="certificate-body">
                                    <div className="certificate-meta">
                                        <span>{certificate.issuer}</span>
                                        <span>{certificate.type}</span>
                                    </div>
                                    <h3>{certificate.title}</h3>
                                    <p>{certificate.subtitle}</p>
                                    <span className="certificate-link">Lihat kredensial <span aria-hidden="true">↗</span></span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="hki-ledger" aria-label="Daftar dokumen HKI" data-aos="fade-up">
                        <span className="hki-ledger__label">HKI Ledger</span>
                        {hkiItems.map((certificate, idx) => (
                            <a
                                href={certificate.url}
                                target="_blank"
                                rel="noreferrer"
                                className="hki-ledger__item"
                                key={`${certificate.issuer}-${certificate.title}`}
                            >
                                <span>{String(idx + 1).padStart(2, "0")}</span>
                                <strong>{certificate.title}</strong>
                                <small>{certificate.subtitle}</small>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certificates;
