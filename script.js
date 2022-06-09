function verifyLogin() {
  const wayToEmail = document.querySelector('#email');
  const wayToPass = document.querySelector('#pass');
  if (wayToEmail.value !== 'tryber@teste.com' && wayToPass.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const wayToLogin = document.querySelector('#login');

wayToLogin.addEventListener('click', verifyLogin);

const agreeCheck = document.getElementById('agreement');
function enableSubmit() {
  const submitBtn = document.getElementById('submit-btn');
  if (agreeCheck.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreeCheck.addEventListener('click', enableSubmit);

const wayToTexArea = document.querySelector('textarea');

function charTextArea() {
  const wayToCounter = document.querySelector('#counter');

  const charCounter = wayToTexArea.value.length;
  const test = 500 - parseInt(charCounter, 10);

  wayToCounter.innerText = test;
}

wayToTexArea.addEventListener('keyup', charTextArea);

const wayToSubBtn = document.querySelector('#submit-btn');
const wayToName = document.querySelector('#input-name');
const wayToLName = document.querySelector('#input-lastname');
const wayToEmail = document.querySelector('#input-email');
const wayToHouse = document.querySelector('#house');
// const wayToComment = document.querySelector('#textarea');
const wayToFormData = document.querySelector('#form-data'); // pai dos p's

const infosUser = {};

const primeiro = document.querySelector('#primeiro');
const segundo = document.querySelector('#segundo');
const terceiro = document.querySelector('#terceiro');
const quarto = document.querySelector('#quarto');
const quinto = document.querySelector('#quinto');
const sexto = document.querySelector('#sexto');
const setimo = document.querySelector('#setimo');

function getFamily(type, key) {
  const way = document.querySelectorAll(`.${type}`);
  for (let index = 0; index < way.length; index += 1) {
    if (way[index].checked === true) {
      infosUser[key] = way[index].value;
    }
  }
  return infosUser[key];
}

const getSubject = () => {
  const wayToSubject = document.querySelectorAll('.subject');
  for (let index = 0; index < wayToSubject.length; index += 1) {
    if (wayToSubject[index].checked === true) {
      infosUser.materias.push(` ${wayToSubject[index].value}`);
    }
  }
  return infosUser.materias;
};

const getRate = () => {
  const wayToRate = document.querySelectorAll('.rate');
  for (let index = 0; index < wayToRate.length; index += 1) {
    if (wayToRate[index].checked === true) {
      infosUser.aval = wayToRate[index].value;
    }
  }
  return infosUser.aval;
};

function returnData() {
  primeiro.innerText = `Nome: ${infosUser.nome} ${infosUser.sobrenome}`;
  segundo.innerText = `Email: ${infosUser.email}`;
  terceiro.innerText = `Casa: ${infosUser.casa}`;
  quarto.innerText = `Família: ${infosUser.familia}`;
  quinto.innerText = `Matérias: ${infosUser.materias}`;
  sexto.innerText = `Avaliação: ${infosUser.aval}`;
  setimo.innerText = `Observações: ${infosUser.coment}`;
}

const wayToForm = document.querySelector('#evaluation-form');

function saveInfos(event) {
  event.preventDefault();

  infosUser.nome = wayToName.value;
  infosUser.sobrenome = wayToLName.value;
  infosUser.email = wayToEmail.value;
  infosUser.casa = wayToHouse.value;
  infosUser.materias = [];
  infosUser.aval = '';
  infosUser.coment = wayToTexArea.value;

  getFamily('family', 'familia');
  getSubject();
  getFamily('rate', 'aval');
  getRate();
  returnData();
  wayToForm.style = 'display: none;';
  wayToFormData.style = 'display: block';
}

wayToSubBtn.addEventListener('click', saveInfos);
