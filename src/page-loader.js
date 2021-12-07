import createContactPage from './contact-page';
import createHomePage from './home-page';
import createMenuPage from './menu-page';

const homePage = createHomePage();
const menuPage = createMenuPage();
const contactPage = createContactPage();

function loadPage(page, container) {
  container.firstChild?.remove();
  switch (page) {
    case 'home':
      container.appendChild(homePage);
      break;
    case 'menu':
      container.appendChild(menuPage);
      break;
    case 'contact':
      container.appendChild(contactPage);
      break;
  }
}

export default loadPage;
