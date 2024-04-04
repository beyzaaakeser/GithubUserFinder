import { elements } from "./helpers.js";

export class UI {
    constructor(){
        
    }
    // uyari mesaji olusturma
    showAlert(message, className){
        const div =document.createElement("div")
        div.className = className;
        div.textContent = message;
        elements.warning.appendChild(div);
        // uyariyi ekrandan silme fonksiyonunu showAlert fonksiyonu calistiktan 3 saniye sonra calistir
        setTimeout(()=>{
            this.clearAlert();
        },3000) 
    }
    // uyariyi ekrandan silme
    clearAlert(){
       const currentAllert =  document.querySelector(".alert");
       if(currentAllert){
        currentAllert.remove()
       }
    }
}