import "./style.css";

export const Ubytovani = () => {
  return (
    <main className="main">
      <div className="home">
        <h1 className="home__heading">Ubytování</h1>

        {/* kontakt */}
        <div className="contact__box">
          <h2 className="contact__heading">Apartamenty Rodzinne Czapla</h2>
          <h3 className="contact__subheading">Kontakt:</h3>
          <ul className="home__list">
            <li className="home__item">ul. Klebby 10, Rewa, Polsko</li>
            <li className="home__item">+48 603 780 502</li>
          </ul>
        </div>

        <iframe
          className="map__container"
          style={{ border: "none" }}
          src="https://mapy.com/s/dajubuvasa"
          width="400"
          height="280"
          frameBorder="0"
        ></iframe>

        <p className="home__paragraph">
          Během pobytu v Rewě budeme ubytovaní v Apartmánech Rodzinne Czapla, které se nacházejí asi 500 metrů od pláže a mola.
        </p>
        <p className="home__paragraph">
          Máme pronajatý dolní apartmán, který má cca 45 m², terasu 20 m² a přímý přístup do zahrady, kde je posezení s grilem a zázemí pro děti.
        </p>
        <p className="home__paragraph">
          Apartmán je moderně zařízený, plně vybavený a ideální pro rodinnou dovolenou s dětmi. Budeme mít k dispozici:
        </p>

        {/* kuchyně */}
        <h3 className="home__subheading">Kuchyňský kout:</h3>
        <ul className="home__list">
          <li className="home__item">Lednice s mrazákem</li>
          <li className="home__item">Mikrovlnná trouba</li>
          <li className="home__item">Indukční varná deska</li>
          <li className="home__item">Rychlovarná konvice</li>
          <li className="home__item">Kuchyňské nádobí (hrnce, pánve, naběračky, vařečky atd.)</li>
          <li className="home__item">Jídelní sada pro 6 osob (talíře, misky, hrnky, příbory)</li>
          <li className="home__item">Čisticí prostředky (houbička, jar, utěrka)</li>
        </ul>
        <img src="/img/kitchen.jpg" alt="apartment kitchen" className="home__image" />

        {/* ložnice */}
        <h3 className="home__subheading">Ložnice:</h3>
        <ul className="home__list">
          <li className="home__item">Manželská postel</li>
          <li className="home__item">Šatní skříň</li>
          <li className="home__item">Lůžkoviny</li>
        </ul>
        <img src="/img/bedroom.jpg" alt="apartment bedroom" className="home__image" />

        {/* obývací pokoj */}
        <h3 className="home__subheading">Obývací pokoj:</h3>
        <ul className="home__list">
          <li className="home__item">Rozkládací pohovka (možnost přistýlky)</li>
          <li className="home__item">TV s polskými programy</li>
          <li className="home__item">Stůl + židle</li>
          <li className="home__item">Klimatizace</li>
          <li className="home__item">Přístup na terasu do zahrady</li>
        </ul>
        <img src="/img/living_room.jpg" alt="apartment living room" className="home__image" />

        {/* koupelna */}
        <h3 className="home__subheading">Koupelna:</h3>
        <ul className="home__list">
          <li className="home__item">Sprchový kout</li>
          <li className="home__item">Ručníky</li>
          <li className="home__item">Fén na vlasy</li>
          <li className="home__item">Toaletní papír</li>
          <li className="home__item">Přístup k pračce</li>
          <li className="home__item">Sušák na prádlo</li>
        </ul>
        <img src="/img/bathroom.jpg" alt="apartment bathroom" className="home__image" />

        {/* dětské vybavení */}
        <h3 className="home__subheading">Dětské vybavení (na vyžádání):</h3>
        <ul className="home__list">
          <li className="home__item">Dětská postýlka</li>
          <li className="home__item">Jídelní židlička</li>
          <li className="home__item">Dětská vanička</li>
          <li className="home__item">Hračky a společenské hry</li>
        </ul>

        {/* outdoor */}
        <h3 className="home__subheading">Venkovní zázemí:</h3>
        <ul className="home__list">
          <li className="home__item">Soukromá zahrada s posezením a grilem</li>
          <li className="home__item">Altán pro společné stolování</li>
          <li className="home__item">Dětské hřiště a pískoviště</li>
          <li className="home__item">Uzavřený a monitorovaný dvůr</li>
          <li className="home__item">Parkování přímo u objektu (zdarma)</li>
          <li className="home__item">Uzamykatelný prostor pro kola</li>
        </ul>
        <img src="/img/outdoor.webp" alt="apartment outdoor" className="home__image" />

        {/* informace */}
        <h3 className="home__subheading">Důležité informace:</h3>
        <ul className="home__list">
          <li className="home__item">Příjezd: mezi 15:00 a 20:00 (je potřeba se ohlásit min. 1 hodinu předem)</li>
          <li className="home__item">Odjezd: do 11:00 (nahlásit odjezd nejméně 1 hodinu předem)</li>
          <li className="home__item">Noční klid: 22:00–7:00</li>
          <li className="home__item">Ztráta klíčů: poplatek 150 zł</li>
          <li className="home__item">
            Platba předem za celý pobyt (v hotovosti v PLN) – Kauce 15 % se platí po rezervaci (vratnost závisí na době případného zrušení)
          </li>
          <li className="home__item">Turistický poplatek: 1,80 zł/osoba/noc (platí se na místě)</li>
        </ul>
        <img src="/img/apartment1.webp" alt="apartment Rewa" className="home__image" />

        <h3 className="home__subheading">Doplatek:</h3>
        <ul className="home__list">
          <li className="home__item">Ještě je třeba doplatit 2083 zl za ubytování.</li>
        </ul>
      </div>
    </main>
  );
};
