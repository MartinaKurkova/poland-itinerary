import "./style.css";

export const Doprava = () => {
    return (
        <main className="main">
            <section className="trip">
                <h1 className="trip__heading">Cesta Baltic expressem</h1>
                <p className="trip__paragpraph">Naše cesta do Polska začne v Kolíně, odkud vyrazíme vlakem Baltic Express přímo směrem na sever. Tento spoj nás pohodlně doveze až do Gdyně, jednoho z měst v oblasti Trojměstí. Odtud budeme pokračovat autobusem do Rewy, našeho cílového přímořského letoviska.</p>
                {/* cesta tam */}
                <h2 className="trip__heading">Kolín&mdash;Rewa</h2>
                <ul className="trip__list">
                    <li className="trip__item">Kolín hl. n. – 7.32, Ex32 (EC 264 Baltic express), vůz 349, místa 71, 72, 73, 78</li>
                    <li className="trip__item">Gdynia Glówna – 15.58</li>
                    <li className="trip__item">Dworzec PKP Gdynia Glówna, hala 02 – bus 146 – 16.52 / 18.02</li>
                    <li className="trip__item">Rewa Bosmanska – 17.32 / 18.42</li>
                </ul>

                {/* Polsko */}
                <div className="trip__box">
                    <h2 className="trip__heading">Cestování po Polsku</h2>
                    <p className="trip__paragpraph">Po Polsku budeme k cestování využívat veřejnou dopravu – MHD, autobusy a vlaky.</p>
                    <p className="trip__paragpraph">Děti do čtyř let cestují zdarma. (V Gdyni možná do sedmi let).</p>
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
                        <tr><td>22 zl</td><td>24 hod</td><td>platí i pro vlaky</td></tr>
                        <tr><td>34 zl</td><td>24 hod</td><td>+ Gdaňsk</td></tr>
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
                </div>
        
                {/* cesta domu */}
                <h2 className="trip__heading">Rewa&mdash;Kolín</h2>
                <ul className="trip__list">
                    <li className="trip__item">Rewa Bosmanska – bus 146 – 9.50</li>
                    <li className="trip__item">Dworzec PKP Gdynia Glówna, hala 03 – 10.29</li>
                    <li className="trip__item">Gdynia Glówna – 12.00, IC 265 Baltic express, vůz 349, místa 31, 32, 33, 38</li>
                    <li className="trip__item">Kolín hl. n. – 20.25</li>
                </ul>

            </section>
    </main>
    )
}