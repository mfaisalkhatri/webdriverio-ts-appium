class HomePage {

  get swipeMenu() {
    return $('~Swipe');
  }

  async getTitle(): Promise<string> {
    const selector =
      'new UiSelector().text("WEBDRIVER").className("android.widget.TextView")';
    const title = await $(`android=${selector}`);
    return await title.getText();
  }

  get loginMenu() {
    return $("~Login");
  }

  async openLoginScreen(): Promise<void> {
    await this.loginMenu.click();
  }

  async openSwipeMenu():Promise<void> {
    await this.swipeMenu.click();
  }
}
export default new HomePage();
