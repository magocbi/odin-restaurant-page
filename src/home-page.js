import homeImg from '../images/home-img.jpg';

function createImage(path) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('home-img');
  const img = document.createElement('img');
  img.src = path;
  imgContainer.appendChild(img);
  return imgContainer;
}

function createDescription() {
  const desc = document.createElement('p');
  desc.classList.add('desc');
  desc.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita quo magni aliquid id, commodi eligendi animi, obcaecati amet illo placeat repellendus sint vel autem magnam doloribus doloremque  facilis voluptatem.';
  return desc;
}

function createSchedule(schedule) {
  const scheduleContainer = document.createElement('div');
  scheduleContainer.classList.add('schedule');
  const title = document.createElement('h2');
  title.textContent = 'HOURS';
  const list = document.createElement('ul');
  list.classList.add('schedule-list');

  for (const [day, hours] of Object.entries(schedule)) {
    const item = document.createElement('li');
    item.textContent = `${day}: ${hours}`;
    list.appendChild(item);
  }
  scheduleContainer.append(title, list);
  return scheduleContainer;
}

function createAddress(address) {
  const locationContainer = document.createElement('div');
  locationContainer.classList.add('location');
  const title = document.createElement('h2');
  title.textContent = 'Location:';
  const location = document.createElement('p');
  location.textContent = address;
  locationContainer.append(title, location);
  return locationContainer;
}

const restaurantSchedule = {
  MON: 'CLOSED',
  TUES: '11AM - 8PM',
  WED: '11AM - 8PM',
  THUR: '11AM - 10PM',
  FRI: '11AM - 10PM',
  SAT: '11AM - 10PM',
  SUN: '11AM - 8PM',
};

const ADDRESS = '3921 Wright Court, OLA';

function createHomePage() {
  const tab = document.createElement('div');
  tab.classList.add('tab-info');
  const imgContainer = createImage(homeImg);
  const desc = createDescription();
  const info = document.createElement('div');
  info.classList.add('restaurant-info');
  const schedule = createSchedule(restaurantSchedule);
  const location = createAddress(ADDRESS);
  info.append(schedule, location);
  tab.append(imgContainer, desc, info);
  return tab;
}

export default createHomePage;
