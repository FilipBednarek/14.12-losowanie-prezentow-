const addGift = document.querySelector('#addGift');
const addName = document.querySelector('#addName');

let list = [];

addGift.addEventListener('click', function (e) {
  e.preventDefault();

  const giftName = document.querySelector('#giftName');
  const personName = document.querySelector('#personName');
  const display = document.querySelector('#display');
  if (giftName.value === '') {
    display.innerHTML = `Nie podano prezentów!!`;
    //console.log('Nie podano prezentów!!!');
  } else if (giftName.value.length <= 2) {
    display.innerHTML = 'nazwa prezentu jest mniejsza niz 3 litery';
  } else if (giftName.value !== '') {
    display.innerHTML = `Dodano: <i>${giftName.value}</i> do listy z prezentami`;
    list.push(giftName.value);
    console.log(list);
  }
});

addName.addEventListener('click', function (e) {
  e.preventDefault();

  display.innerHTML = `<b>${
    personName.value
  }</b> wylosowany prezent dla Ciebie to: <i>${
    list[Math.floor(Math.random() * list.length)]
  }</i>`;

  //console.log(list);
  //console.log(personName.value);

  if (personName.value == '') {
    display.innerHTML = `Wpisz poprawne imie!`;
    //console.log('nie ma imienia');
  } else if (list.length === 0) {
    display.innerHTML = `Lista z prezentami jest pusta!!!`;
  }
});
