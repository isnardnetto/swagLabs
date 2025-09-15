export class LoginPage{
    constructor(page){
        this.page = page;
    }

    async login(username , password){
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
    }


}