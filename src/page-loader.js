import createHomePage from './home-page';
import createMenuPage from './menu-page';

const homePage = createHomePage();
const menuPage = createMenuPage();

function loadPage(page, container) {
  container.firstChild?.remove();
  switch (page) {
    case 'home':
      container.appendChild(homePage);
      break;
    case 'menu':
      container.appendChild(menuPage);
      break;
  }
}

export default loadPage;
