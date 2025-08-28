import "../styles/Home.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Pricing />
            <Contact />
        </div>
    );
};

export default Home;
