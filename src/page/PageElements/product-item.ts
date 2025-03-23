import { Locator, Page } from "@playwright/test";
import { BasePage, Button } from "../..";

export class ProductItem extends BasePage{
    constructor (page: Page, root: Locator){
        super(page, root.locator('.item-box'));
    }

    readonly picture = this.root.locator('.picture');
    readonly titleProduct = this.root.locator('.product-title');
    readonly actualPrice = this.root.locator('.actual-price');
    readonly addToCard = new Button(this.root.locator('.product-box-add-to-cart-button'));

    async openItemDetails(item: string){
        await this.titleProduct.filter({hasText: item}).waitFor({state: 'attached', timeout: 15000});
        await this.titleProduct.filter({hasText: item}).click();
    }
    async addToCardItem(item: string){
        await this.root.filter({hasText: item}).waitFor({state: 'attached', timeout: 15000});
        await this.addToCard.clickButton();
    }
}