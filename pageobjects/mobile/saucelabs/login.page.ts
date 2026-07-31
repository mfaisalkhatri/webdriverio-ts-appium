class LoginPage {
  get inputuserName() {
    return $("-ios predicate string:type == 'XCUIElementTypeTextField'");
  }

  get inputPassword() {
    return $("-ios predicate string:type == 'XCUIElementTypeSecureTextField'");
  }

  get loginButton() {
    return $("-ios class chain:**/XCUIElementTypeButton[`name == 'Login'`]");
  }

  get selectUserNameText() {
    return $("~Select a username from the list below");
  }
  get selectBobCredentials() {
    return $(
      "-ios class chain:**/XCUIElementTypeButton[`name == 'bob@example.com'`]",
    );
  }

  //async login(username: string, password: string) {
  async login() {
    //    await this.inputuserName.setValue(username);
    //    await this.inputPassword.setValue(password);
    await this.selectBobCredentials.click();
    await this.loginButton.click();
  }
}

export default new LoginPage();
