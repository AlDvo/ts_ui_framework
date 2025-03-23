import { test as base } from '@playwright/test';
import { MainPage } from '../page/PageObject';

type MyFixtures = {
    openMainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
    openMainPage: async ({ page }, use) => {
        // Set up the fixture.
        await page.goto('');
        return new MainPage(page);
    },
});