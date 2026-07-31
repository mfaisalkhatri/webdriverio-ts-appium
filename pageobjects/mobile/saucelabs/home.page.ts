class HomePage {
  get moreLink() {
    return $("~More");
  }
  get loginLink() {
    return $("~Login Button");
  }
  get logoutLink() {
    return $("~LogOut-menu-item");
  }

  async openMoreLink(): Promise<void> {
    await this.moreLink.click();
  }

  async openLoginPage(): Promise<void> {
    await this.loginLink.click();
  }
}

export default new HomePage();
