import { Github } from './scripts/api.js';
import { elements } from './scripts/helpers.js';
import { UI } from './scripts/ui.js';

const github = new Github();
const ui = new UI();
ui.showAlert('Kullanici Bulunamadi',"alert alert-danger");
const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;
  console.log('tiklanildi');
  if (value === '') return;
  if (value) {
    github.fetchUserData(value);
  }
};
elements.searchBtn.addEventListener('click', getInput);
