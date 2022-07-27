const { test, expect } = require('@playwright/test');
const { DyrtPage } = require('../page_objects/theDyrt.page');
const faker = require('faker');
const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
let dyrtPage;

//* Runs before every test
test.beforeEach(async ({ page }) => {
  dyrtPage = new DyrtPage(page);
  await page.goto('https://thedyrt.com/');
});

//* Test suite theDyrt
test.describe("theDyrt homepage", () => {

    //* Test case Registration
    test("User should be able to register an account", async ({ page }) => {
      await dyrtPage.clickOnJoinBtn.click();
      await dyrtPage.clickOnJoinWithEmailBtn.click();
      await dyrtPage.typeYourNameInTheNameField.fill(randomName);
      await dyrtPage.typeYourEmailInTheEmailField.fill(randomEmail);
      await dyrtPage.typeYourPasswordInThePassField.fill(randomPassword);
      await dyrtPage.clickToAgree.click();
      await dyrtPage.clickOnGreenJoinBtn.click();
    });

    //* Test case Login
    test("User should be able to login with correct credentials", async ({ page }) => {
      await dyrtPage.clickOnWhiteSignInBtn.click();
      await dyrtPage.typeInYourEmail.fill('j.haneke@gmail.com');
      await dyrtPage.typeInYourPassword.fill('hanekeke');
      await dyrtPage.clickOnGreenSignInBtn.click();
      await expect(page).toHaveURL('https://thedyrt.com/signin?redirect=https://thedyrt.com/signin?redirect=https://thedyrt.com/');
    });
});