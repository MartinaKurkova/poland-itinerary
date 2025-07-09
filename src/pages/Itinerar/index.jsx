import "./style.css";
import { Detail } from "../../components/Detail";

export const Itinerar = ({ itineraryData }) => {
    return (
        <main className="main">
            <div className="itinerary">
                <h1 className="itinerary__heading">Itinerář</h1>
                <p className="itinerary__paragraph">Výletní dny a cíle nejsou pevně dané – budeme se rozhodovat podle počasí, energie a nálady, ale máme i konkrétní tipy, které se vážou ke dnům s volnými nebo zvýhodněnými vstupy.</p>
                <p className="itinerary__paragraph">Každý den si vybereme ten nejlepší výlet – ať už to bude městské dobrodružství, přírodní krása, nebo jen lenošení na pláži. K jednotlivým dnům je přiřadíme operativně – s ohledem na předpověď počasí i aktuální chuť vyrazit.</p>
                {/* detail */}
                {itineraryData.map((trip) => (
                    <Detail key={trip.id} data={trip} />
                ))}
            </div>
        </main>
    )
}