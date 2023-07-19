class LoginPage {

     get inputEmail () {
        return $('~input-email');
    }

     get inputPassword () {
        return $('~input-password');
    }

     get loginBtn () {
        return $("~button-LOGIN");
    }

    get OKbtn() {
        return $('id=android:id/button1');_
    }
    
     async login (emailId:string, password:string) {
        await this.inputEmail.setValue(emailId);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    async successMessageTitle():Promise<string> {
        return  (await $('id=android:id/alertTitle')).getText();
    }

    async successMessage():Promise<string> {
        return (await $('id=android:id/message')).getText();
    }

    async closePopup () {
        await this.OKbtn.click();

    }
}

export default new LoginPage();