import { elements } from "./helpers.js";

export class UI {
    constructor(){
        this.profile = elements.profile;
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

    // render profile fonksiyonu
    renderProfile(res){
        console.log(res)
        const created_at = new Date(res.created_at).toLocaleDateString()
        this.profile.innerHTML = `
        <div class="row border p-4 my-4 rounded-3">
        <div class="col-md-3">
          <img
            src="${res.avatar_url}"
            alt=""
            class="img-fluid rounded shadow img"
          />
          <a target="_blank" href="${res.html_url}" class="btn btn-primary w-100 mt-4">Profili Göster</a>
        </div>
        <div class="col-md-9 gap-3" id="profileButton">
          <span class="badge fs-6 bg-primary">Açık Repolar:${res.public_repos}</span>
          <span class="badge fs-6 bg-secondary">Açık Gistler:${res.public_gists}</span>
          <span class="badge fs-6 bg-success">Takipçiler:${res.followers} </span>
          <span class="badge fs-6 bg-info">Takip Edilenler:${res.following} </span>

          <ul class="list-group mt-3">
            <li class="list-group-item">Hakkında: ${res.bio}</li>
            <li class="list-group-item">Şirket: ${res.company}</li>
            <li class="list-group-item">Website: ${res.blog}</li>
            <li class="list-group-item">Konum:${res.location}</li>
            <li class="list-group-item">Hesap Oluşturma:${created_at}</li>
          </ul>
        </div>
      </div>
        `
    }

}