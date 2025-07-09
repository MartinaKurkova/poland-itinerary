import "./style.css";

export const Hero = ({ name, date }) => (
        <section className="hero">
            <h2 className="hero__heading">{name}</h2>
            <h3 className="hero__subheading">{date}</h3>
            <a href="/Itinerar" className="hero__button">Itinerář</a>
        </section>
    )
