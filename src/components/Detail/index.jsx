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
                <h4 className="detail__section-heading">Tipy na výlety:</h4>
                <ul className="detail__list">
                {data.tips.map((tip, index) => (
                    <li key={index} className="detail__item">
                    {tip.item}
                    <a className="detail__link" href={tip.link}> Odkaz</a>
                    </li>
                ))}
                </ul>

                <h4 className="detail__section-heading">Na kolik nás to vyjde:</h4>
                <ul className="detail__list">
                {data.money.map((money, index) => (
                    <li key={index} className="detail__item">
                    {money.item}
                    <a className="detail__link" href={money.link}> Odkaz</a>
                    </li>
                ))}
                </ul>

                <h4 className="detail__section-heading">Kam na jídlo:</h4>
                <ul className="detail__list">
                {data.food.map((food, index) => (
                    <li key={index} className="detail__item">
                    {food.venue}
                    <a className="detail__link" href={food.link}> Odkaz</a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}