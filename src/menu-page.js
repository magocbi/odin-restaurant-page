import veganTacos from '../images/vegan-tacos.jpg';
import tacosPastor from '../images/tacos-al-pastor.jpg';
import quesadilla from '../images/quesadilla.jpg';
import fajitas from '../images/fajitas.jpg';
import burrito from '../images/burrito.jpg';
import beefTacos from '../images/beef-tacos.jpg';

const menuList = [
  {
    name: 'vegan tacos',
    img: veganTacos,
  },
  {
    name: 'tacos al pastor',
    img: tacosPastor,
  },
  {
    name: 'quesadilla',
    img: quesadilla,
  },
  {
    name: 'fajitas',
    img: fajitas,
  },
  {
    name: 'burrito',
    img: burrito,
  },
  {
    name: 'beef tacos',
    img: beefTacos,
  },
];

function createMenuItem(name, img) {
  const item = document.createElement('li');
  item.classList.add('menu-item');
  const title = document.createElement('h3');
  title.classList.add('item-title');
  title.textContent = name;
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('item-img');
  const image = document.createElement('img');
  image.src = img;

  imgContainer.append(image);

  item.append(imgContainer, title);
  return item;
}

function createMenu(menuList) {
  const menu = document.createElement('ul');
  menu.classList.add('menu');
  menuList.forEach(({ name, img }) => {
    const item = createMenuItem(name, img);
    menu.appendChild(item);
  });
  return menu;
}

function createMenuPage() {
  const tab = document.createElement('div');
  tab.classList.add('tab-info');
  const title = document.createElement('h2');
  title.classList.add('menu-title');
  title.textContent = 'Menu';
  const menu = createMenu(menuList);
  tab.append(title, menu);

  return tab;
}

export default createMenuPage;
