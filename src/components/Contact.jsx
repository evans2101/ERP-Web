import "../styles/Contact.scss";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Hubungi Kami</h2>
                <p>Silakan isi form di bawah ini untuk pertanyaan atau kerja sama:</p>

                <form className="contact-form">
                    <input type="text" placeholder="Nama Lengkap" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Pesan Anda..." rows="5" required></textarea>
                    <button type="submit">Kirim Pesan</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
