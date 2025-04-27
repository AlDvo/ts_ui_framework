import { test as base } from '@playwright/test';
import { expect, LoginPage, MainPage, menuAccountName, MyAccountPage, RegisterPage, userForAuthentication } from '..';

type MyFixtures = {
    mainPage: MainPage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
    loginUser: MainPage;
    addressFeildForAccount: MyAccountPage;
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        await page.goto('');
        return await use(new MainPage(page));
    },

    loginPage: async ({ mainPage, page }, use) => {
        await expect(mainPage.headerLinks.logIn).toBeVisibleComp();
        await mainPage.headerLinks.logIn.clickButton();
        return await use(new LoginPage(page));
    },

    loginUser: async ({ loginPage, page }, use) => {
        await expect(loginPage.logIn).toBeVisibleComp();
        await loginPage.logInUser(userForAuthentication.email, userForAuthentication.password);
        const mainPage = new MainPage(page);
        await expect(mainPage.headerLinks.account.getButtonName()).resolves.toEqual(userForAuthentication.email);
        return await use(mainPage);
    },

    registerPage: async ({ mainPage, page }, use) => {
        await expect(mainPage.headerLinks.logIn).toBeVisibleComp();
        await mainPage.headerLinks.register.clickButton();
        return await use(new RegisterPage(page));
    },

    addressFeildForAccount: async ({ mainPage, page }, use) => {
        await expect(mainPage.headerLinks.logOut).toBeVisibleComp();
        await mainPage.footerMenuAccount.selectMenu(menuAccountName.account);
        const myAccount = new MyAccountPage(page);
        await myAccount.accountNavigation.selectMenu('Addresses');
        return await use(myAccount);
    },
});
