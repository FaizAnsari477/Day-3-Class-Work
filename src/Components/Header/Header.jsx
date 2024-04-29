import "./Style.css"
import reactImg from "../../assets/react.svg"

function Header() {
    return (
        <div>
            <nav className="navbarItems">
                <section className="sectionOne">
                    <img src={reactImg} alt="Logo"/>
                    <h1>GeekFoods</h1>
                </section>
                <section>
                    <ul className="navLinks">
                        <li className="homeButton">Home</li>
                        <li>Quote</li>
                        <li>Restaurants</li>
                        <li>Foods</li>
                        <li>Contact</li>
                    </ul>
                </section>
                <section>
                    <button className="navButton"> Get Started </button>
                </section>
            </nav>
        </div>
    );
}

export default Header
