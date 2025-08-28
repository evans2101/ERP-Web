import { useState, useEffect } from "react";
import "../styles/Hero.scss";
import illustration from "../assets/analytics.svg";
import LoginModal from "./LoginModal";
import Navbar from "./Navbar";

const Hero = () => {
    const [animate, setAnimate] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={`hero ${animate ? "animate" : ""}`}>
            <Navbar onLoginClick={() => setShowLogin(true)} />
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
