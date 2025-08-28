// Pricing.jsx
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

const Pricing = () => (
    <section id="pricing">
        <h2>Pricing</h2>
        <div className="pricing-cards">
            {tiers.map((tier) => (
                <div className="card" key={tier.title}>
                    <h3>{tier.title}</h3>
                    <p>{tier.price}</p>
                    <ul>
                        {tier.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default Pricing;
