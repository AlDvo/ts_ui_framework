import { Locator, Page } from "@playwright/test";

export abstract class BasePage{
    readonly page: Page;
    readonly root: Locator;
    constructor(page: Page, root: Locator){
        this.page = page;
        this.root = root;
    }
}