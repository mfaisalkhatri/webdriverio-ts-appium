import Gestures from "../../../tests/helpers/Gestures";

class SwipePage {
  get cardTitle1() {
    const selector =
      'new UiSelector().text("FULLY OPEN SOURCE").className("android.widget.TextView")';
    return $(`android=${selector}`);
  }

  get cardTitle2() {
    const selector =
      'new UiSelector().text("GREAT COMMUNITY").className("android.widget.TextView")';
    return $(`android=${selector}`);
  }

  async greatCommunityText(): Promise<string> {
    return await this.cardTitle2.getText();
  }

  async checkifCommunityTextIsDisplayed() {
    if (await this.cardTitle1.isDisplayed()) {
      const selector =
        'new UiSelector().text("FULLY OPEN SOURCE").className("android.widget.TextView")';

      const elemRect = driver.getElementRect(
        await $(`android=${selector}`).elementId
      );
      console.log("value of elemRect ", elemRect);

      const elemXCenter = Math.round(
        (await elemRect).x + (await elemRect).width / 2
      );

      console.log("Element X center ", elemXCenter);
      const elemYCenter = Math.round(
        (await elemRect).y + (await elemRect).height / 2
      );

      console.log("Element Y center ", elemYCenter);

      const newXPosition = 300;
      Gestures.swipe(
        { x: elemXCenter, y: elemYCenter },
        { x: newXPosition, y: elemYCenter }
      );
    }
  }
}

export default new SwipePage();
