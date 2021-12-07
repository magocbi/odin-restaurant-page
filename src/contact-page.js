const contacts = [
  {
    name: 'Restaurant',
    number: '206-694-8682',
    email: 'lacubana@fake.com',
  },
  {
    name: 'Mary T Harrel',
    number: '360-932-5351',
    email: 'mthrrel@fake.com',
    position: 'general manager',
  },
  {
    name: 'Ervin B Burkhalter',
    number: '509-994-9850',
    email: 'ebhalter@fake.com',
    position: 'assistant manager',
  },
  {
    name: 'Jeffrey T Thill',
    number: '979-215-5462',
    email: 'jthill@fake.com',
    position: 'assistant manager',
  },
  {
    name: 'Ruth J Wilmot',
    number: '302-374-6479',
    email: 'rjwilmot@fake.com',
    position: 'Executive Chef',
  },
];

function createContactCard({ name, number, email, position }) {
  const card = document.createElement('li');
  card.classList.add('contact-card');

  if (position) {
    const contactPosition = document.createElement('p');
    contactPosition.textContent = position;
    contactPosition.classList.add('position');
    card.append(contactPosition);
  }

  const contactName = document.createElement('h3');
  contactName.textContent = name;
  const contactNumber = document.createElement('p');
  contactNumber.textContent = `tel. ${number}`;
  const contactEmail = document.createElement('p');
  contactEmail.textContent = email;
  card.prepend(contactName);
  card.append(contactNumber, contactEmail);

  return card;
}

function createContactList(contacts) {
  const list = document.createElement('ul');
  list.classList.add('contact-list');
  const contactCards = contacts.map((contact) => createContactCard(contact));

  list.append(...contactCards);
  return list;
}

function createContactPage() {
  const tab = document.createElement('div');
  tab.classList.add('tab-info');
  const title = document.createElement('h2');
  title.textContent = 'Contact us';
  const contactList = createContactList(contacts);
  tab.append(title, contactList);
  return tab;
}

export default createContactPage;
