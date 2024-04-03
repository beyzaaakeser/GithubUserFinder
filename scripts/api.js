export class Github {
  constructor() {
    this.client_id = '8f9284b5310fa0db4af8';
    this.client_secret = '0a65724a7eaa1c6d19cb741d97a5971b11d1cdb9';
    this.per_page = 10;
  }
  async fetchUserData(username) {
    const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const data = await profileRes.json();
    return data;
  }
}
