import "./style.css";

export const Itinerar = () => {
    return (
        <main className="main">
            <div className="itinerary">
                <h1 className="itinerary__heading">Itinerář</h1>
                <p className="itinerary__paragraph">Výletní dny a cíle nejsou pevně dané – budeme se rozhodovat podle počasí, energie a nálady, ale máme i konkrétní tipy, které se vážou ke dnům s volnými nebo zvýhodněnými vstupy.</p>
                <p class="itinerary__paragraph">Každý den si vybereme ten nejlepší výlet – ať už to bude městské dobrodružství, přírodní krása, nebo jen lenošení na pláži. K jednotlivým dnům je přiřadíme operativně – s ohledem na předpověď počasí i aktuální chuť vyrazit.</p>
                {/* day 1 */}
                <div className="trip__container" id="day--1">
                    <div className="trip__text">
                        <h3 className="trip__name">Rewa</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}