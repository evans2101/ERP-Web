import "../styles/About.scss";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container-about">
                <h2>Tentang ERP Startup</h2>
                <p>
                    Kami adalah platform ERP berbasis web yang membantu para pengusaha
                    mencatat barang masuk dan keluar, memantau keuntungan harian, dan menganalisis
                    performa bisnis mereka. Dengan sistem TIER kami, setiap pengusaha dapat memilih
                    paket yang sesuai dengan kebutuhan bisnisnya, dari basic hingga fitur canggih
                    seperti prediksi AI.
                </p>
                <p>
                    Misi kami adalah membuat manajemen bisnis menjadi lebih mudah, efisien,
                    dan terintegrasi — semua dalam satu sistem.
                </p>
            </div>
        </section>
    );
};

export default About;
