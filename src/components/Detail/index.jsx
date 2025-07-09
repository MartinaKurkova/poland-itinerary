import "./style.css";

export const Detail = ( {name} ) => {
    return (
        <div className="app">
        <div className="detail detail--collapsed">
            <div className="detail__image-container">
                <img src="../../../img/rewa.jpg" alt="" class="detail__image"/>
                <h2 className="detail__heading-overlay">{name}</h2>
                <button className="detail__toggle">
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-times"></i>
                </button>
            </div>

            <div className="detail__text">
                <h3 className="detail__day">Neděle 20. 7.</h3>

                <h4 className="detail__section-heading">Tipy na výlety:</h4>
                <ul className="detail__list">
                <li className="detail__item">
                    Vrak lodi – kousek od apartmánu.
                    <a className="detail__link" href="https://mapy.com/s/donekojeco">Mapa</a>
                </li>
                <li className="detail__item">
                    Rozhledna v ptačí rezervaci + vyhlídková trasa okolo. Není vhodné pro kolo kvůli písku.
                    <a class="detail__link" href="https://mapy.com/s/balegabuma">Mapa</a>
                </li>
                <li className="detail__item">
                    Přírodní rezervace Beka s rozhlednou – výlet na kole.
                    <a class="detail__link" href="https://mapy.com/s/nenotofape">Mapa</a>
                </li>
                </ul>

                <h4 className="detail__section-heading">Na kolik nás to vyjde:</h4>
                <ul className="detail__list">
                <li className="detail__item">
                    Půjčovna kol Fahrrad, Morska 109, Rewa. Otevřeno každý den od 9 do 19 hodin. Cena: 30 zl/den.
                    <a class="detail__link" href="https://www.facebook.com/p/Fahrrad-Wypo%C5%BCyczalnia-Rower%C3%B3w-Rewa-100083122792546/?_rdr">Odkaz</a>
                </li>
                </ul>

                <h4 className="detail__section-heading">Kam na jídlo:</h4>
                <ul className="detail__list">
                <li className="detail__item">
                    Riffe Surfpizza, Sztormowa 4, Rewa
                    <a className="detail__link" href="https://g.co/kgs/RAjVz7Q">Odkaz</a>
                </li>
                </ul>
            </div>
        </div>

    </div>
    )
}