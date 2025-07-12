import "./style.css";
import { Detail } from "../../components/Detail";

export const Itinerar = ({ itineraryData }) => {
    if (!itineraryData || !Array.isArray(itineraryData)) {
        return (
            <main className="main">
                <div className="itinerary">
                    <h1 className="itinerary__heading">Itinerář</h1>
                    <p>Data se načítají nebo nejsou dostupná.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="main">
            <div className="itinerary">
                <h1 className="itinerary__heading">Itinerář</h1>
                <p className="itinerary__paragraph">Výletní dny a cíle nejsou pevně dané – budeme se rozhodovat podle počasí, energie a nálady, ale máme i konkrétní tipy, které se vážou ke dnům s volnými nebo zvýhodněnými vstupy.</p>
                <p className="itinerary__paragraph">Každý den si vybereme ten nejlepší výlet – ať už to bude městské dobrodružství, přírodní krása, nebo jen lenošení na pláži. K jednotlivým dnům je přiřadíme operativně – s ohledem na předpověď počasí i aktuální chuť vyrazit.</p>
                <h2 className="itinerary__subheading">Doporučené pořadí výletů</h2>
                <ul className="trip__list">
                    <li className="trip__item"><strong>Neděle 20. 7.</strong> Rewa – pláž a cyklovýlet</li>
                    <li className="trip__item"><strong>Pondělí 21. 7.</strong> Babie Doly, Mechelinki – pláž a pěší výlet</li>
                    <li className="trip__item"><strong>Úterý 22. 7.</strong> Gdaňsk – muzeum a historické centrum, případně pláž</li>
                    <li className="trip__item"><strong>Středa 23. 7.</strong> Gdyně – centrum města, přístav, akvárium, Orlowo – molo a pláž</li>
                    <li className="trip__item"><strong>Čtvrtek 24. 7.</strong> ZOO Gdaňsk, Sopoty – pláž</li>
                    <li className="trip__item"><strong>Pátek 25. 7.</strong> Hel – výlet lodí, pláž</li>
                </ul>
                {/* detail */}
                {itineraryData.map((trip) => (
                    <Detail key={trip.id} data={trip} />
                ))}
            </div>
        </main>
    );
}
