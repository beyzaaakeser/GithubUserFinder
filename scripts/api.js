export class Github {
  constructor() {
    this.client_id = '8f9284b5310fa0db4af8';
    this.client_secret = '0a65724a7eaa1c6d19cb741d97a5971b11d1cdb9';
    this.per_page = 10;
  }
  // api'den kullanici bilgilerini alma --> apiden bilgi alma islemi gecikmeli olabilecek bir islem oldugu icin fonksiyonu async yaptik
  async fetchUserData(username) {
    // parametre olarak gelen kullanici adina gore istek attik. istegin gelisini await ile beklettik 
    const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    //kullanici repolarini almak icin istek attik    
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    console.log(repoRes);

    // apiden aldigimiz cevabi json yapisina cevirdik. json yapisina cevirme islemi de uzun surebilecegi icin await ile beklettik once cevabi almayi bekledi yani
    const data = await profileRes.json();
    const repos = await repoRes.json();
    
    // fonksiyonun cagirildigi yere bilgileri gonderme
    return {data,repos};
  }
}
