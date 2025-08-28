import { useEffect, useState } from "react";
import "../styles/Pricing.scss";

const tiers = [
    {
        title: "Basic",
        price: "Rp 50.000 / bulan",
        features: ["Barang masuk", "Barang keluar", "Catat keuntungan"],
    },
    {
        title: "Business",
        price: "Rp 150.000 / bulan",
        features: [
            "Barang masuk & keluar",
            "Catat keuntungan",
            "Analisa penjualan (chart)",
            "Support 7x24 jam",
        ],
    },
    {
        title: "Entrepreneur",
        price: "Rp 300.000 / bulan",
        features: [
            "Semua fitur Tier 2",
            "Export ke Excel",
            "AI prediksi penghasilan",
        ],
    },
];

const Pricing = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("pricing");
            if (!section) return;

            const top = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight * 0.85) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="pricing" className={`pricing-section ${isVisible ? "visible" : ""}`}>
            <div className="pricing-container">
                <h2>Pricing</h2>
                <div className="pricing-cards">
                    {tiers.map((tier, index) => (
                        <div
                            className="card"
                            key={tier.title}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <h3>{tier.title}</h3>
                            <p>{tier.price}</p>
                            <ul>
                                {tier.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
