import { test as base, expect } from '@playwright/test';
import { LoginPage, MainPage, RegisterPage } from '..';

type MyFixtures = {
    mainPage: MainPage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        await page.goto('');
        return await use(new MainPage(page));
    },

    loginPage: async ({ mainPage, page }, use) => {
        await expect(mainPage.headerLinks.logIn.root).toBeVisible();
        await mainPage.headerLinks.logIn.clickButton();
        return  await use(new LoginPage(page));
    },

    registerPage: async ({ mainPage, page }, use) => {
        await expect(mainPage.headerLinks.logIn.root).toBeVisible();
        await mainPage.headerLinks.register.clickButton();
        return  await use(new RegisterPage(page));
    },
});

export { expect } from '@playwright/test';