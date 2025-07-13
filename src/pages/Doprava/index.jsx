import "./style.css";

export const Doprava = () => {
    return (
        <main className="main">
            <section className="trip">
                <h1 className="trip__heading">Cesta Baltic expressem</h1>
                <p className="trip__paragpraph">Naše cesta do Polska začne v Kolíně, odkud vyrazíme vlakem Baltic Express přímo směrem na sever. Tento spoj nás pohodlně doveze až do Gdyně, jednoho z měst v oblasti Trojměstí. Odtud budeme pokračovat autobusem do Rewy, našeho cílového přímořského letoviska.</p>
                {/* cesta tam */}
                <h2 className="trip__subheading">Kolín&mdash;Rewa</h2>
                <ul className="trip__list">
                    <li className="trip__item"><strong>Kolín hl. n.:</strong> 7.32 h, <a href="https://www.cd.cz/vlak/264/19.7.2025/5453414/7.32/5100010/15.58/">EC 264 Baltic Express</a>, vůz 349, místa 71, 72, 73, 78</li>
                    <li className="trip__item"><strong>Gdynia Glówna:</strong> 15.58 h</li>
                    <li className="trip__item"><strong>Dworzec PKP Gdynia Glówna:</strong> hala 02, autobus 146: 16.52 h / 18.02 h</li>
                    <li className="trip__item"><strong>Rewa Bosmańska:</strong> 17.32 h / 18.42 h</li>
                </ul>
            </section>

            <section className="poland">
                {/* Polsko */}
                <div className="trip__box">
                    <h2 className="trip__subheading--box">Cestování po Polsku</h2>
                    <p className="trip__paragpraph">K cestování po Polsku budeme využívat veřejnou dopravu – MHD, autobusy a vlaky.</p>
                    <p className="trip__paragpraph">Děti do čtyř let cestují zdarma (v Gdyni do sedmi let).</p>
                    {/* MHD */}
                    <h3 className="table__heading">MHD</h3> 
                    <table className="table" cellpadding="5" cellspacing="0">
                    <thead className="table__head">
                        <tr>
                        <th>Cena*</th>
                        <th>Platnost</th>
                        <th>Poznámka</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>4,80 zl</td><td>jednorázový lístek</td><td>papírový: 5,20 zl</td></tr>
                        <tr><td>6 zl</td><td>75 min</td><td>přestupní</td></tr>
                        <tr><td>22 zl</td><td>24 hod</td><td>Gdaňsk</td></tr>
                        <tr><td>24 zl</td><td>24 hod</td><td>Gdyně</td></tr>
                         <tr><td>30 zl</td><td>24 hod </td><td>Gdyně + vlaky</td></tr>
                        <tr><td>34 zl</td><td>24 hod</td><td>Gdyně, Gdaňsk + vlaky</td></tr>
                    </tbody>
                    </table>
                    <p className="trip__paragraph">* Dětský lístek stojí vždy 50 % ceny dospělého.</p>
                    {/* vlaky */}
                    <h3 className="table__heading">Vlaky</h3> 
                    <table className="table" cellpadding="5" cellspacing="0">
                    <thead className="table__head">
                        <tr>
                        <th>Cena*</th>
                        <th>Platnost</th>
                        <th>Dětský</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>5,50 zl</td><td>1&ndash;6 km</td><td>3,46 zl</td></tr>
                        <tr><td>6,50 zl</td><td>7&ndash;12 km</td><td>4,09 zl</td></tr>
                        <tr><td>7,70 zl</td><td>13&ndash;18 km</td><td>4,85 zl</td></tr>
                        <tr><td>9,6 zl</td><td>19&ndash;24 km</td><td>6,05 zl</td></tr>
                        <tr><td>11 zl</td><td>25&ndash;30 km</td><td>6,93 zl</td></tr>
                    </tbody>
                    </table>
                    <p className="trip__paragraph">* Dětský lístek stojí vždy 63 % ceny dospělého.</p>
                    <p className="trip__paragraph">Papírové jízdenky je třeba označit před nástupem do vlaku v označovači (nacházejí se v tunelech, nádražních budovách či na nástupištích). Platnost jízdenky je tři hodiny od okamžiku označení. </p>
                    {/* Tipy */}
                    <h3 className="table__heading">Kde koupit jízdenky</h3> 
                    <p className="trip__paragraph">Nejpohodlnějším způsobem vyhledávání spojů a nákupu jízdenek jsou mobilní aplikace. Pro městskou hromadnou dopravu se skvěle hodí aplikace Jakdojade, zatímco pro vlaky je výborná aplikace Koleo. V obou si lze nabít peněženku a platit přímo z ní.</p>
                    <div className="trip__buttons">
                        <a href="https://jakdojade.pl/gdynia" className="trip__button">Jakdojade</a>
                        <a href="https://koleo.pl/" className="trip__button">Koleo</a>
                    </div>
                </div>
            </section>
        
                {/* cesta domu */}
                <section className="trip">
                <h2 className="trip__subheading">Rewa&mdash;Kolín</h2>
                <ul className="trip__list">
                    <li className="trip__item"><strong>Rewa Bosmańska:</strong> autobus 146: 9.50 h</li>
                    <li className="trip__item"><strong>Dworzec PKP Gdynia Glówna:</strong> hala 03, 10.29 h</li>
                    <li className="trip__item"><strong>Gdynia Glówna:</strong> 12.00 h, <a href="https://www.cd.cz/vlak/265/26.7.2025/5100010/12.00/5453414/20.25/">IC 265 Baltic express</a>, vůz 349, místa 31, 32, 33, 38</li>
                    <li className="trip__item"><strong>Kolín hl. n.:</strong> 20.25 h</li>
                </ul>
            </section>
    </main>
    )
}