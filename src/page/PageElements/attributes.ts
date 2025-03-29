import { Locator, Page } from "@playwright/test";
import { BasePage } from "../..";

export class Attributes extends BasePage {
    constructor(page: Page, root: Locator) {
        super(page, root.locator('.attributes'));
    }

    readonly attributeName = this.root.locator('.text-prompt');

    async getAttributeList() {
        let name: string[] = [];
        for (const atr of await this.attributeName.all()) {
            name.push(await atr.innerText());
        }
        return name;
    }

    async getAtrributeOptions(attribute: string){
        const op = await this.attributeName.filter({hasText: attribute}).locator('.option-list').allInnerTexts()
        console.log(op);
        
    }
}