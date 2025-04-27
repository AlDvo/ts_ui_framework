import { ProductDetails, test, Gender, RegisterResultPage, expect, SearchPage, generateUser } from "../src";
import { ShopingCart } from "../src/page/PageObject/shoping-cart";


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
  await searchPage.advancedSearch.setValue(true);
  await searchPage.category.setValue('Digital downloads');
  console.log(await searchPage.getSelectValue());

  await searchPage.productTabe.openItemDetails('Phone Cover');

  const productDetails = new ProductDetails(page);
  await expect(productDetails.productName.innerText()).resolves.toEqual('Phone Cover');
});

test('register user', async ({ registerPage, page }) => {
  const user = generateUser('male');
  await registerPage.fillAllFieled(user);
  await registerPage.register.clickButton();

  const registerResult = new RegisterResultPage(page);
  await expect(registerResult.continueButton).toBeVisibleComp();
  await expect(registerResult.headerLinks.account.getButtonName()).resolves.toEqual(user.email);
  await registerResult.continueButton.clickButton();
});

test('authorizated user', async ({ loginUser }) => {
  await loginUser.headerLinks.account.clickButton();
});

test('buy product', async ({ loginUser, page }) => {
  const product = await loginUser.productTable.getListItem('14.1-inch Laptop');
  await product.openItemDetails('14.1-inch Laptop');
  const productDetails = new ProductDetails(page);
  await productDetails.addToCard.clickButton();
  await productDetails.headerLinks.shoppingCart.clickButton();

  const shopingCart = new ShopingCart(page);
  await shopingCart.termsServiceCheckbox.setValue(true);
  await shopingCart.checkoutButton.clickButton();
});

test('add address user', async ({ loginUser, addressFeildForAccount }) => {
  await loginUser;
  const user = generateUser('male');
  await expect(addressFeildForAccount.addressEditPage).toBeHidden();
  await addressFeildForAccount.addNewAddresses.clickButton();
  await expect(addressFeildForAccount.addressEditPage).toBeVisible();

  await addressFeildForAccount.fillCustomerFieled(user);
  await addressFeildForAccount.saveAddressButton.clickButton();
});
