import createHomePage from './home-page';

const container = document.getElementById('content');

const homePage = createHomePage();

function loadPage(page) {
  container.firstChild?.remove();
  container.appendChild(page);
}

console.log('works');

window.addEventListener('DOMContentLoaded', () => loadPage(homePage));
