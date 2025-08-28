import { useEffect, useState } from "react";
import "../styles/Contact.scss";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("contact");
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
        <section id="contact" className="contact-section">
            <div className={`container ${isVisible ? "visible" : ""}`}>
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
