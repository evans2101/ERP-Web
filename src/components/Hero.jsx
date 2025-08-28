import { useState } from "react";
import "../styles/Hero.scss";
import illustration from "../assets/analytics.svg";
import LoginModal from "./LoginModal";
import Navbar from "./Navbar"; // ⬅️ Tambahan

const Hero = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <header className="hero">
            <Navbar onLoginClick={() => setShowLogin(true)} /> {/* ⬅️ Gantikan nav */}
            <div className="hero-content">
                <div className="text">
                    <h1>Mudah Kelola Usaha Anda</h1>
                    <p>Mencatat barang masuk, keluar, dan keuntungan dalam satu platform.</p>
                    <em>"Excepteur sint occaecat cupidatat non proident"</em>
                </div>
                <img src={illustration} alt="Analytics" />
            </div>
            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        </header>
    );
};

export default Hero;
