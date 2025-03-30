import { test, expect } from '../src';
import { MainPage, menuInformationName, menuTopName } from '../src';

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

test('example', async ({ openMainPage, page }) => {
  await openMainPage.productTable.openItemDetails('Simple Computer');
  const name = await openMainPage.productDetails.attributes.getAttributeList();
  await openMainPage.productDetails.attributes.getAtrributeOptions();
  console.log(await openMainPage.productDetails.productReview.getButtonName());
  console.log(await openMainPage.productDetails.productTags.getTagList());
  await openMainPage.productDetails.productTags.clickTag('computer');
  


});
