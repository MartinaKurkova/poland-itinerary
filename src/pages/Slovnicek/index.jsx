import "./style.css";

export const Slovnicek = () => {
    return (
        <main className="main">
            <div className="text">
            <h2 className="table__heading">Základní slovíčka na dovolenou</h2>
            <table className="table" cellpadding="5" cellspacing="0">
                <thead>
                <tr>
                    <th>Česky</th>
                    <th>Polsky</th>
                    <th>Výslovnost</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Ahoj</td><td>Cześć</td><td>Čeść</td></tr>
                <tr><td>Dobrý den</td><td>Dzień dobry</td><td>Džeň dobri</td></tr>
                <tr><td>Na shledanou</td><td>Do widzenia</td><td>Do vidženja</td></tr>
                <tr><td>Prosím</td><td>Proszę</td><td>Proše</td></tr>
                <tr><td>Děkuji</td><td>Dziękuję</td><td>Dženkuié</td></tr>
                <tr><td>Ano</td><td>Tak</td><td>Tak</td></tr>
                <tr><td>Ne</td><td>Nie</td><td>Ňe</td></tr>
                <tr><td>Promiňte</td><td>Przepraszam</td><td>Psheprášam</td></tr>
                <tr><td>Kde je...?</td><td>Gdzie jest...?</td><td>Gdje jest...?</td></tr>
                <tr><td>Toaleta</td><td>Toaleta</td><td>Toaleta</td></tr>
                <tr><td>Voda</td><td>Woda</td><td>Voda</td></tr>
                <tr><td>Jídlo</td><td>Jedzenie</td><td>Jedzenje</td></tr>
                <tr><td>Pomoc</td><td>Pomoc</td><td>Pomots</td></tr>
                <tr><td>Telefon</td><td>Telefon</td><td>Telefon</td></tr>
                <tr><td>Hotel</td><td>Hotel</td><td>Hotel</td></tr>
                <tr><td>Pláž</td><td>Plaża</td><td>Plaža</td></tr>
                <tr><td>Restaurace</td><td>Restauracja</td><td>Restavratsja</td></tr>
                <tr><td>Pomoc</td><td>Pomoc</td><td>Pomots</td></tr>
                </tbody>
            </table>
            {/* obchod */ }
            <h2 className="table__heading">Slovíčka na nákup</h2>
            <table className="container" cellpadding="5" cellspacing="0">
                <thead>
                <tr>
                    <th>Česky</th>
                    <th>Polsky</th>
                    <th>Výslovnost</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Obchod</td><td>Sklep</td><td>Sklep</td></tr>
                <tr><td>Trh</td><td>Targ</td><td>Targ</td></tr>
                <tr><td>Kolik to stojí?</td><td>Ile to kosztuje?</td><td>Ile to koštuje?</td></tr>
                <tr><td>Levný</td><td>Tani</td><td>Tani</td></tr>
                <tr><td>Dražší</td><td>Droższy</td><td>Drožši</td></tr>
                <tr><td>Sleva</td><td>Rabat</td><td>Rabat</td></tr>
                <tr><td>Zboží</td><td>Towar</td><td>Tovar</td></tr>
                <tr><td>Ovoce</td><td>Owoce</td><td>Ovotse</td></tr>
                <tr><td>Zelenina</td><td>Warzywa</td><td>Varživa</td></tr>
                <tr><td>Chléb</td><td>Chleb</td><td>Hleb</td></tr>
                <tr><td>Maso</td><td>Mięso</td><td>Mjen-so</td></tr>
                <tr><td>Mléko</td><td>Mleko</td><td>Mleko</td></tr>
                <tr><td>Voda</td><td>Woda</td><td>Voda</td></tr>
                <tr><td>Cukr</td><td>Cukier</td><td>Cu-kjer</td></tr>
                <tr><td>Sýr</td><td>Ser</td><td>Ser</td></tr>
                <tr><td>Platít</td><td>Płacić</td><td>Pła-čich</td></tr>
                <tr><td>Kde je pokladna?</td><td>Gdzie jest kasa?</td><td>Gdje jest kasa?</td></tr>
                </tbody>
            </table>
            {/* cestovani */}
            <h2 className="table__heading">Slovíčka na cestování MHD / vlaky</h2>
            <table className="container" cellpadding="5" cellspacing="0">
                <thead>
                <tr>
                    <th>Česky</th>
                    <th>Polsky</th>
                    <th>Výslovnost</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Autobus</td><td>Autobus</td><td>Autobus</td></tr>
                <tr><td>Tramvaj</td><td>Tramwaj</td><td>Tramvaj</td></tr>
                <tr><td>Vlak</td><td>Pociąg</td><td>Po-čong</td></tr>
                <tr><td>Jízdenka</td><td>Bilet</td><td>Bilet</td></tr>
                <tr><td>Jízdní řád</td><td>Rozkład jazdy</td><td>Roz-kwad jazdý</td></tr>
                <tr><td>Zastávka</td><td>Przystanek</td><td>Pšys-tanek</td></tr>
                <tr><td>Nástupiště</td><td>Peron</td><td>Peron</td></tr>
                <tr><td>Odjezd</td><td>Odjazd</td><td>Od-jazd</td></tr>
                <tr><td>Příjezd</td><td>Przyjazd</td><td>Pšy-jazd</td></tr>
                <tr><td>Kolik stojí jízdenka?</td><td>Ile kosztuje bilet?</td><td>Ile koštuje bilet?</td></tr>
                <tr><td>Kde je zastávka?</td><td>Gdzie jest przystanek?</td><td>Gdje jest pšys-tanek?</td></tr>
                <tr><td>Chci koupit jízdenku</td><td>Chcę kupić bilet</td><td>Hce kupić bilet</td></tr>
                <tr><td>Kdy odjíždí vlak?</td><td>Kiedy odjeżdża pociąg?</td><td>Kjedy odježdža po-čong?</td></tr>
                <tr><td>Vlakové nádraží</td><td>Dworzec kolejowy</td><td>Dvorzec kolejovî</td></tr>
                </tbody>
            </table>
            {/* zoo  */}
            <h2 className="table__heading">Návštěva zoo, muzea a památek</h2>
            <table className="container" cellpadding="5" cellspacing="0">
                <thead>
                <tr>
                    <th>Česky</th>
                    <th>Polsky</th>
                    <th>Výslovnost</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Vstupenka</td><td>Bilet wstępu</td><td>Bilet vstempu</td></tr>
                <tr><td>Kolik stojí vstup?</td><td>Ile kosztuje wstęp?</td><td>Ile koštuje vstemp?</td></tr>
                <tr><td>Otevřeno</td><td>Otwarte</td><td>Otvarte</td></tr>
                <tr><td>Zavřeno</td><td>Zamknięte</td><td>Zamkňente</td></tr>
                <tr><td>Průvodce</td><td>Przewodnik</td><td>Pshevodnik</td></tr>
                <tr><td>Výstava</td><td>Wystawa</td><td>Vystava</td></tr>
                <tr><td>Expozice</td><td>Ekspozycja</td><td>Ekspozitsja</td></tr>
                <tr><td>Děti</td><td>Dzieci</td><td>Džecí</td></tr>
                <tr><td>Informace</td><td>Informacja</td><td>Informatsja</td></tr>
                </tbody>
            </table>
        </div>
  </main>
    )
}