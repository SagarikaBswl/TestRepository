const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async openUrl (urlInput) {
        
        await browser.maximizeWindow();
        await browser.url(urlInput);
        await browser.waitUntil(async function () {
            return await browser.getTitle() == "How Much to Save for Retirement | Securian Financial"
        }, 8000, "Title is not displayed!")

       var title = await browser.getTitle();
       expect(title).toContain("Securian Financial")
       console.log(title + "page is loaded");
    }

    
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
