import { Locator, Page } from "@playwright/test";
import { BasePage } from "../..";

export class BlockElement extends BasePage{
    constructor (page: Page, root: Locator){
        super(page, root);
    }

    readonly title = this.root.locator('.title');
    readonly listItem = this.root.locator('.listbox');
}