import LoginPage from "../../pageobjects/mobile/webdriverio/login.page";
import HomePage from "../../pageobjects/mobile/webdriverio/home.page";
import SwipePage from "../../pageobjects/mobile/webdriverio/swipe.page";
import allureReporter from '@wdio/allure-reporter'

describe("Android Mobile automation tests", () => {
  it("should check the title on home page", async () => {
    expect(await HomePage.getTitle()).toHaveTextContaining("WEBDRIVER");
  });

  it("should login into the app successfully", async () => {
      await HomePage.openLoginScreen();
      await LoginPage.login("Test@email.com", "Pass12345");
      expect(await LoginPage.successMessageTitle()).toEqual("Success");
      expect(await LoginPage.successMessage()).toEqual("You are logged in!");
      await LoginPage.closePopup(); 
  });

  it("should be able to swipe based on element displayed", async () => {
    await HomePage.openSwipeMenu();
    await SwipePage.checkifCommunityTextIsDisplayed();
    expect(await SwipePage.greatCommunityText()).toEqual("GREAT COMMUNITY");
  });
});
