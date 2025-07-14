import "./style.css";

export const Home = () => {
    return (
        <main className="main">
            <section className="intro">
                <h1 className="intro__heading heading">Naše dovolená u Baltského moře</h1>
                <p className="intro__paragpraph paragraph">Letos nás čeká výjimečné dobrodružství – vyrážíme do Polska k Baltskému moři, do malebné přímořské vesničky Rewa, která leží v oblasti Trojměstí (Trójmiasto). Tato dovolená je pro nás výjimečná hned z několika důvodů: Miki a Šimon se poprvé podívají k moři a zároveň to bude jejich první výlet do zahraničí.</p>
                <p className="intro__paragpraph paragraph">Do Polska se vydáme vlakem, což slibuje už samo o sobě zajímavý zážitek. Těšíme se na klidnou atmosféru Rewy, procházky po písečných plážích, svěží mořský vzduch a možnost navštívit i okolní města jako Gdyně, Sopoty nebo Gdaňsk. Nejvíc se ale těšíme na společný čas strávený jako rodina – bez spěchu, u moře a s novými zážitky.</p>
                <img className="intro__image image" src="/img/poland.jpg" alt="Poland Beach"/>
            </section>

            {/* doprava */}
            <section className="transport__container">
                <div className="text__box">
                    <h2 className="text__heading heading">Plán cesty: Rewa</h2>
                    <p className="text__paragraph paragraph">Naše dovolená začíná cestou vlakem z Kolína až do přímořské Rewy. Podíváme se, jak vypadá cesta Baltic Expressem, čím se dá pohodlně cestovat v Trojměstí i jaké aplikace se hodí při plánování výletů. Praktické informace o jízdenkách, cenách i místní dopravě na jednom místě.</p>
                    <a href="/Doprava" className="text__button">Více info</a>
                </div>
                <div className="image__box">
                    <img src="/img/train.jpg" alt="train poland" className="image__picture image" />
                </div>
            </section>
             <section className="apartment__container">
                <div className="apartment__box">
                    <h2 className="apartment__heading heading">Rodinné zázemí u moře</h2>
                    <p className="apartment__paragraph paragraph">Komfortní apartmán s terasou, zahradou a veškerým vybavením pro pohodlný pobyt s dětmi v srdci Rewy.</p>
                    <a href="/Ubytovani" className="text__button">Více info</a>
                </div>
                <div className="image__box">
                    <img src="/img/acco.jpg" alt="accomodation poland" className="apartment__picture image" />
                </div>
            </section>
            <section className="dictionary__container">
                <div className="text__box">
                    <h2 className="text__heading heading">Polský slovníček</h2>
                    <p className="text__paragraph paragraph">Praktická slovíčka na cesty, nákupy i dobrodružství v polském městě i přírodě. S výslovností pro snadnější domluvu.</p>
                    <a href="/Slovnicek" className="text__button">Více info</a>
                </div>
                <div className="image__box">
                    <img src="/img/ice.jpg" alt="zmrzlina" className="dictionary__picture image" />
                </div>
            </section>
            <section className="itinerary__container">
                <div className="itinerary__box">
                    <h2 className="itinerary__heading heading">Plán cesty k moři</h2>
                    <p className="itinerary__paragraph paragraph">Inspirativní tipy na výlety v oblasti Trojměstí a Helské kosy. Program si přizpůsobíme podle nálady a počasí.</p>
                    <a href="/Itinerar" className="text__button">Více info</a>
                </div>
                <div className="image__box">
                    <img src="/img/iti.jpg" alt="gdansk poland" className="itinerary__picture image" />
                </div>
            </section>
        </main>
    )
}