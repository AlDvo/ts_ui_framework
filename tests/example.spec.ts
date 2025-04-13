import { ProductDetails, test, MainPage, RegisterResultPage, expect, SearchPage } from "../src";


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('go to Search page', async ({ mainPage, page }) => {
  await mainPage.searchField.setValue('Phone');
  await mainPage.searchButton.clickButton();

  const searchPage = new SearchPage(page);
  await expect(searchPage.searchInput).toBeVisibleComp();
  await expect(searchPage.searchInput).not.toBeHiddenComp();
  await searchPage.advancedSearch.setValue(true);
  await searchPage.category.setValue('Digital downloads');
  console.log(await searchPage.getSelectValue());
  
  await searchPage.productTabe.openItemDetails('Phone Cover');

  const productDetails = new ProductDetails(page);
  await expect(productDetails.productName.innerText()).resolves.toEqual('Phone Cover');
});

test('register user', async ({ registerPage, page }) => {
  const bio = await registerPage.fillAllFilled('male')
  await registerPage.register.clickButton();

  const registerResult = new RegisterResultPage(page);
  await expect(registerResult.continueButton).toBeVisibleComp();
  await expect(registerResult.continueButton).toBeDisabledComp();
  await expect(registerResult.headerLinks.account.getButtonName()).resolves.toEqual(bio.email);
  await registerResult.continueButton.clickButton();
});

test('authorizated user', async ({ loginUser, page }) => {
  await loginUser.headerLinks.account.clickButton();
});
