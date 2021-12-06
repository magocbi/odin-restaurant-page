import createHomePage from './home-page';
const homePage = createHomePage();

function loadPage(page, container) {
  container.firstChild?.remove();
  switch (page) {
    case 'home':
      container.appendChild(homePage);
      break;
  }
}

export default loadPage;
