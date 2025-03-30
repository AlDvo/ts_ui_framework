import { Locator, Page } from "@playwright/test";
import { BasePage, Button } from "../..";

export class Tags extends BasePage{
    constructor (page: Page, root: Locator){
        super(page, root.locator('.product-tags-box'));
    }

    readonly title = this.root.locator('.title');
    readonly tagList = this.root.locator('.product-tags-list');

    async getTagList(){
        const list: string [] =  [];
        for(const loc of await this.tagList.locator('.tag').all()) {
            const tag = await loc.locator('.producttag').innerText();
            list.push(tag);
        }
        return list;
    }
    async clickTag(item: string){
        await this.tagList.getByRole('link', {name: item}).click();
    }
}