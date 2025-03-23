import { Locator, Page } from "@playwright/test";
import { BasePage } from "../..";
import { ProductItem } from "./product-item";

export class ProductGrid extends BasePage {
    constructor(page: Page, root: Locator) {
        super(page, root.locator('.product-grid'));
    }

    readonly itemList = this.root;

    async getListItems() {
        let items: string[] = [];
        for (const el of await (new ProductItem(this.page, this.itemList)).titleProduct.all()) {
            items.push(await el.innerText());
        }
        return items;
    }


    async openItemDetails(name: string) {
        const item = await this.getListItem(name);
        await item.openItemDetails(name);
    }
    async addToCardItem(name: string) {
        const item = await this.getListItem(name);
        await item.addToCardItem(name);
    }

    async getListItem(name: string) {
        const list = await this.itemList.all();
        return new ProductItem(this.page, list.filter(el => el.getByRole('heading', { name: name })).at(0)!);
    }

}