exports.DyrtPage = class DyrtPage {
  constructor(page) {
    this.page = page;
    // Register
    this.clickOnJoinBtn = page.locator('text=Join').nth(1);
    this.clickOnJoinWithEmailBtn = page.locator('text=Join with Email Submitted');
    //this.clickOnJoinWithEmailBtn = page.locator('.AppButton_button__submitted-label__2oLHd').nth(0);
    this.typeYourNameInTheNameField = page.locator('input[name="name"]');
    this.typeYourEmailInTheEmailField = page.locator('input[name="email"]');
    this.typeYourPasswordInThePassField = page.locator('input[name="password"]');
    this.clickToAgree = page.locator('div:nth-child(7) > .AppInput_input__checkbox__Chczn > .AppInput_input__checkbox-container__1zqLo > .AppIcon_app-icon__SefzZ > span');
    this.clickOnGreenJoinBtn = page.locator('text=Join Submitted');
    this.clickOnSignInBtn = page.locator('a:has-text("Sign In")').nth(1).click();

    // Login
    this.clickOnWhiteSignInBtn = page.locator('a:has-text("Sign In")').nth(1);
    this.typeInYourEmail = page.locator('input[name="username"]');
    this.typeInYourPassword = page.locator('input[name="password"]');
    this.clickOnGreenSignInBtn = page.locator('text=Sign In Submitted');
  }
};