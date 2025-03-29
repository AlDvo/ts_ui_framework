import { Page } from "@playwright/test";
import { BasePage, Button, Input, Attributes } from "../..";

export class ProductDetails extends BasePage {
    constructor(page: Page) {
        super(page, page.locator('.product-details-page'));
    }

    readonly fullDescription = this.root.locator('.full-description');
    readonly shortDescription = this.root.locator('.short-description');
    readonly productName = this.root.locator('.product-name');

    readonly stock = this.root.locator('.stock');

    readonly price = this.root.locator('.prices');

    readonly quantity = new Input(this.root.locator('.qty-input'));
    readonly addToCard = new Button(this.root.locator('.add-to-cart-button'));
    readonly addToWishList = new Button(this.root.locator('.add-to-wishlist-button'));
    readonly emailFriend = new Button(this.root.locator('.email-a-friend-button'));
    readonly compareList = new Button(this.root.locator('.add-to-compare-list-button'));

    readonly attributes = new Attributes(this.page, this.root);
}