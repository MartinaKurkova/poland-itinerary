import "./style.css";

export const Home = () => {
    return (
        <main className="main">
            {/* Úvod */}
            <section className="section section--intro">
                <h1 className="section__heading heading">Naše dovolená u Baltského moře</h1>
                <p className="section__text">
                    Letos nás čeká výjimečné dobrodružství – vyrážíme do Polska k Baltskému moři, do malebné přímořské vesničky Rewa, která leží v oblasti Trojměstí (Trójmiasto)...
                </p>
                <p className="section__text">
                    Do Polska se vydáme vlakem, což slibuje už samo o sobě zajímavý zážitek...
                </p>
                <img className="section__image" src="/img/poland.jpg" alt="Poland Beach"/>
            </section>

            {/* Doprava */}
            <section className="section section--transport">
                <div className="section__box">
                    <h2 className="section__heading heading">Plán cesty: Rewa</h2>
                    <p className="section__text">Naše dovolená začíná cestou vlakem z Kolína až do přímořské Rewy. Podíváme se, jak vypadá cesta Baltic Expressem, čím se dá pohodlně cestovat v Trojměstí i jaké aplikace se hodí při plánování výletů. Praktické informace o jízdenkách, cenách i místní dopravě na jednom místě.</p>
                    <a href="/Doprava" className="section__button">Více info</a>
                </div>
                <div className="section__image-box">
                    <img src="/img/train.jpg" alt="train poland" className="section__image" />
                </div>
            </section>

            {/* Ubytování */}
            <section className="section section--apartment">
                <div className="section__box">
                    <h2 className="section__heading heading">Rodinné zázemí u moře</h2>
                    <p className="section__text">Prostorný apartmán s vlastní zahradou, kuchyní i vybavením pro děti bude naším domovem během pobytu u Baltu.</p>
                    <a href="/Ubytovani" className="section__button">Více info</a>
                </div>
                <div className="section__image-box">
                    <img src="/img/acco.jpg" alt="accomodation poland" className="section__image" />
                </div>
            </section>

            {/* Slovníček */}
            <section className="section section--dictionary">
                <div className="section__box">
                    <h2 className="section__heading heading">Polský slovníček</h2>
                    <p className="section__text">Praktická slovíčka na cesty, nákupy i dobrodružství v polském městě i přírodě. S výslovností pro snadnější domluvu.</p>
                    <a href="/Slovnicek" className="section__button">Více info</a>
                </div>
                <div className="section__image-box">
                    <img src="/img/ice.jpg" alt="zmrzlina" className="section__image" />
                </div>
            </section>

            {/* Itinerář */}
            <section className="section section--itinerary">
                <div className="section__box">
                    <h2 className="section__heading heading">Plán cesty k moři</h2>
                    <p className="section__text">Inspirativní tipy na výlety v oblasti Trojměstí a Helské kosy. Program si přizpůsobíme podle nálady a počasí.</p>
                    <a href="/Itinerar" className="section__button">Více info</a>
                </div>
                <div className="section__image-box">
                    <img src="/img/iti.jpg" alt="gdansk poland" className="section__image" />
                </div>
            </section>
        </main>
    );
};
