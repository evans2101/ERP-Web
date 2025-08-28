import { useState, useEffect } from "react";
import "../styles/Navbar.scss";

const Navbar = ({ onLoginClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <div className="logo">ERP System</div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul className={menuOpen ? "active" : ""}>
                <li><button onClick={() => { setMenuOpen(false); scrollToSection("about"); }}>ABOUT</button></li>
                <li><button onClick={() => { setMenuOpen(false); scrollToSection("pricing"); }}>PRICING</button></li>
                <li><button onClick={() => { setMenuOpen(false); scrollToSection("contact"); }}>CONTACT</button></li>
                <button className="login-btn" onClick={() => { setMenuOpen(false); onLoginClick(); }}>LOGIN</button>
            </ul>
        </nav>
    );
};

export default Navbar;
