import { test as base } from '@playwright/test';
import { MainPage } from '..';

type MyFixtures = {
    mainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        // Set up the fixture.
        await page.goto('');
        return await use(new MainPage(page));
    },
});

export { expect } from '@playwright/test';