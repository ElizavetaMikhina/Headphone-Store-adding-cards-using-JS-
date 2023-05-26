var cardsData = [
  {
    imgUrl: './img/Apple-BYZ-S852I.png',
    text: 'Apple BYZ S852I',
    price: 2927,
    rate: 4.7,
  },
  {
    imgUrl: './img/Apple-EarPods.png',
    text: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    imgUrl: './img/Apple-EarPods-case.png',
    text: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    imgUrl: './img/Apple-BYZ-S852I.png',
    text: 'Apple BYZ S852I',
    price: 2927,
    rate: 4.7,
  },
  {
    imgUrl: './img/Apple-EarPods.png',
    text: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    imgUrl: './img/Apple-EarPods-case.png',
    text: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    imgUrl: './img/Apple-AirPods.png',
    text: 'Apple AirPods',
    price: 9527,
    rate: 4.7,
  },
  {
    imgUrl: './img/GERLAX-GH-04.png',
    text: 'GERLAX GH-04',
    price: 6527,
    rate: 4.7,
  },
  {
    imgUrl: './img/BOROFONE-BO4.png',
    text: 'BOROFONE BO4',
    price: 7527,
    rate: 4.7,
  }
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (card) {
  var listItem = makeElement('li', 'card');

  var picture = makeElement('img', 'headphones-img');
  picture.src = card.imgUrl;
  picture.alt = card.text;
  listItem.appendChild(picture);

  var divInfo = makeElement('div', 'headphones-info');
  listItem.appendChild(divInfo);

  var titleHeadphones = makeElement('span', 'title-headphones', card.text);
  divInfo.appendChild(titleHeadphones);

  var price = makeElement('span', 'price', card.price + '₽');
  divInfo.appendChild(price);

  var divBuy = makeElement('div', 'headphones-buy');
  listItem.appendChild(divBuy);

  var rating = makeElement('span', 'rating', card.rate);
  divBuy.appendChild(rating);

  var buyClick = makeElement('a', 'buy-click');
  divBuy.appendChild(buyClick);
  buyClick.textContent = 'Купить';
  buyClick.href = '#';

  return listItem;
};

var renderCards = function (cards) {
  var cardList = document.querySelector('.cards__headphones');
  
  for (var i = 0; i < 6; i++) {
  var cardItem = createCard(cards[i]);
  cardList.appendChild(cardItem);    
  }
};

var renderCardsWireless = function (cards) {
  var cardList = document.querySelector('.cards__wireless-headphones');
  
  for (var i = 6; i < cards.length; i++) {
  var cardItem = createCard(cards[i]);
  cardList.appendChild(cardItem);    
  }
};

renderCards(cardsData);
renderCardsWireless(cardsData);
