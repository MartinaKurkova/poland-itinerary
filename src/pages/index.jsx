import { render } from '@czechitas/render';
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { resolveRoute } from "./router";
import "../global.css";
import './index.css';

let itineraryData = [];

const fetchData = async () => {
  const response = await fetch("http://localhost:4000/api/trips");
  const json = await response.json();
  itineraryData = json.data;
};

const app = () => {
  const path = window.location.pathname;
  const PageComponent = resolveRoute(path);

  return (
    <div className="app">
      <Header name="K Baltu!" />
      <Hero name="Dovolená v Polsku" date="19.&mdash;26. 7. 2025"/>
      <main>{PageComponent({ itineraryData })}</main>
      <Footer />
    </div>
  );
};

// hamburger menu
const initHamburgerMenu = () => {
  const hamMenu = document.querySelector(".menu__hamburger");
  const menu = document.querySelector(".menu");

  if (hamMenu && menu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active"); 
      menu.classList.toggle("menu--hidden");
      menu.classList.toggle("menu--visible");
    });
  }
};

// toggle detail
const initDetailToggle = () => {
  const toggles = document.querySelectorAll(".detail__toggle");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const detail = toggle.closest(".detail");
      detail.classList.toggle("detail--collapsed");
      detail.classList.toggle("detail--active");
    });
  });
};

// hlavní render funkce
const renderApp = async () => {
  await fetchData(); // nejdřív načti data
  document.querySelector('#root').innerHTML = render(app());

  initHamburgerMenu();
  initDetailToggle();
};

// první načtení
renderApp();

// nerefresh navigace – musí být taky async!
document.addEventListener('click', async (e) => {
  const link = e.target.closest('a');
  if (link?.hostname === window.location.hostname && link.getAttribute('href')?.startsWith('/')) {
    e.preventDefault();
    window.history.pushState({}, '', link.href);
    await renderApp();
  }
});
