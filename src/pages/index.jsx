import { render } from '@czechitas/render';
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { resolveRoute } from "./router";
import "../global.css";
import './index.css';

const app = () => {
  const path = window.location.pathname;
  const PageComponent = resolveRoute(path);

  return (
    <div className="app">
      <Header name="K Baltu!" />
      <Hero name="Dovolená v Polsku" date="19.&mdash;26. 7. 2025"/>
      <main>{PageComponent()}</main>
      <Footer />
    </div>
  );
};

// inicializace hamburger menu
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

// vykreslení aplikace
const renderApp = () => {
  document.querySelector('#root').innerHTML = render(app());
  
  initHamburgerMenu();
};

// První vykreslení
renderApp();

// nerefresh navigace
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link?.hostname === window.location.hostname && link.getAttribute('href')?.startsWith('/')) {
    e.preventDefault();
    window.history.pushState({}, '', link.href);
    renderApp();
  }
});
