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
    
     async login (emailId:string, password:string) {
        await this.inputEmail.setValue(emailId);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    async successMessageTitle():string {
        return  (await $('id=android:id/alertTitle')).getText();
    }

    async successMessage():string {
        return (await $('id=android:id/message')).getText();
    }
}

export default new LoginPage();