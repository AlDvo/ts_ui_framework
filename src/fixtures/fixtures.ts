import { test as base } from '@playwright/test';
import { expect, LoginPage, MainPage, RegisterPage, user } from '..';

type MyFixtures = {
    mainPage: MainPage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
    loginUser: MainPage; 
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        await page.goto('');
        return await use(new MainPage(page));
    },

    loginPage: async ({ mainPage, page }, use) => {
        await expect(mainPage.headerLinks.logIn).toBeVisibleComp();
        await mainPage.headerLinks.logIn.clickButton();
        return  await use(new LoginPage(page));
    },

    loginUser: async({loginPage, page}, use) =>{
        await expect(loginPage.logIn).toBeVisibleComp();
        await loginPage.logInUser(user.email, user.password);
        const mainPage = new MainPage(page);
        await expect(mainPage.headerLinks.account.getButtonName()).resolves.toEqual(user.email);
        return await use(mainPage);   
    },

    registerPage: async ({ mainPage, page }, use) => {
        await expect(mainPage.headerLinks.logIn).toBeVisibleComp();
        await mainPage.headerLinks.register.clickButton();
        return  await use(new RegisterPage(page));
    },
});
