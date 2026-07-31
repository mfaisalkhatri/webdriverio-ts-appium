import HomePage from "../../pageobjects/mobile/saucelabs/home.page";
import LoginPage from "../../pageobjects/mobile/saucelabs/login.page";

describe("IOS Mobile automation tests", () => {
  it("should login into the app successfully", async () => {
    await HomePage.openMoreLink();
    await HomePage.openLoginPage();

    await LoginPage.login();
    await HomePage.openMoreLink();
    expect (await HomePage.logoutLink).toBeDisplayedInViewport();
  });
});
