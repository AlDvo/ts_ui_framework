import { ProductDetails, test, expect } from "../src";


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

test('example', async ({ mainPage, page }) => {
  await mainPage.productTable.openItemDetails('$25 Virtual Gift Card');
  const productDetails = new ProductDetails(page);

  await productDetails.quantity.setValue('3');
  await productDetails.addToCard.clickButton();
  await expect(page.locator('.bar-notification').getByTitle('Close')).toBeVisible();
});
