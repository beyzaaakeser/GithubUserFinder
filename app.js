import { Github } from './scripts/api.js';
import { elements } from './scripts/helpers.js';
import { UI } from './scripts/ui.js';

// Github classinin ornegini olusturma
const github = new Github();
// UI classinin ornegini olusturma
const ui = new UI();

const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;
  if (value === '') return;
  if (value) {
    github.fetchUserData(value).then((res) => {
      if(res.message === "Not Found"){
        ui.showAlert("Aradiginiz Kullanici Bulunamadi.","alert alert-danger");
      }else{
        ui.showAlert("Aradiginiz kullanici bulundu.", "alert alert-success")
      }
    });
  }
};
elements.searchBtn.addEventListener("click", getInput);
