import "./style.css";

export const Detail = ({ data }) => {
    return (
        <div className="detail detail--collapsed">
            <div className="detail__image-container">
                <img src={`http://localhost:4000${data.image}`} alt={data.name} className="detail__image"/>
                <h2 className="detail__heading-overlay">{data.name}</h2>
                <button className="detail__toggle">
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-times"></i>
                </button>
            </div>

            <div className="detail__text">
                <h3 className="detail__day">{data.day}</h3>
                <h4 className="detail__section-heading">Kam se vydat:</h4>
                <ul className="detail__list">
                {data.tips.map((tip, index) => (
                    <li key={index} className="detail__item">
                    {tip.item && (
                        <div><i class="fas fa-map-marker-alt"></i> <strong>{tip.item}</strong></div>
                    )}
                    {tip.address && (
                        <div><strong>Adresa:</strong> {tip.address}</div>
                    )}
                    {tip.description && (
                        <div><strong>Popis:</strong> {tip.description}</div>
                    )}
                    {tip.entry && (
                        <div><strong>Vstupné:</strong> {tip.entry}</div>
                    )}
                    {tip.transport && (
                        <div><strong>Doprava:</strong> {tip.transport}</div>
                    )}
                    {tip.public && (
                        <div><strong>MHD:</strong> {tip.public}</div>
                    )}
                    {tip.ticket && (
                        <div><strong>Jízdné:</strong> {tip.ticket}</div>
                    )}
                    {tip.map && (
                        <a className="detail__link" href={tip.map}> Mapa</a>
                    )}
                    {tip.link && (
                        <a className="detail__link" href={tip.link}> Odkaz</a>
                    )}
                    </li>
                ))}
                </ul>

                <h4 className="detail__section-heading">Něco k jídlu:</h4>
                <ul className="detail__list">
                {data.food.map((food, index) => (
                    <li key={index} className="detail__item">
                    {food.item && (
                        <div><i class="fas fa-map-marker-alt"></i> <strong>{food.item}</strong></div>
                    )}
                    {food.address && (
                        <div><strong>Adresa:</strong> {food.address}</div>
                    )}
                    {food.description && (
                        <div><strong>Popis:</strong> {food.description}</div>
                    )}
                    {food.map && (
                        <a className="detail__link" href={food.map}> Mapa</a>
                    )}
                    {food.link && (
                        <a className="detail__link" href={food.link}> Odkaz</a>
                    )}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}