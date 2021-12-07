import loadPage from './page-loader';

const container = document.getElementById('content');
const tabs = document.querySelectorAll('[data-tab]');

function selectTabHandler(e) {
  tabs.forEach((tab) => tab.classList.remove('selected'));
  const selectedTab = e.target.dataset.tab;
  loadPage(selectedTab, container);
}

window.addEventListener('DOMContentLoaded', () =>
  loadPage('contact', container)
);
tabs.forEach((tab) => tab.addEventListener('click', selectTabHandler));
