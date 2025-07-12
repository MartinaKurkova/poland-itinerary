import "./style.css";

export const Home = () => {
    return (
        <main className="main">
            <div className="text">
                <h1 className="text__heading">Naše dovolená u Baltského moře</h1>
                <p className="text__paragpraph">Letos nás čeká výjimečné dobrodružství – vyrážíme do Polska k Baltskému moři, do malebné přímořské vesničky Rewa, která leží v oblasti Trojměstí (Trójmiasto). Tato dovolená je pro nás výjimečná hned z několika důvodů: Miki a Šimon se poprvé podívají k moři a zároveň to bude jejich první výlet do zahraničí.</p>
                <p className="text__paragpraph">Do Polska se vydáme vlakem, což slibuje už samo o sobě zajímavý zážitek. Těšíme se na klidnou atmosféru Rewy, procházky po písečných plážích, svěží mořský vzduch a možnost navštívit i okolní města jako Gdyně, Sopoty nebo Gdaňsk. Nejvíc se ale těšíme na společný čas strávený jako rodina – bez spěchu, u moře a s novými zážitky.</p>
                <img className="text__image" src="/img/poland.jpg" alt="Poland Beach"/>
            </div>
        </main>
    )
}