import { Page } from "@playwright/test";
import { BasePage, Button, Input, Attributes, ProductGrid, Tags, FramePage } from "../..";

export class ProductDetails extends FramePage {

    readonly fullDescription = this.root.locator('.full-description');
    readonly shortDescription = this.root.locator('.short-description');
    readonly productName = this.root.locator('.product-name');

    readonly stock = this.root.locator('.stock');

    readonly productReview = new Button(this.root.getByRole('link', { name: 'review(s)' }));
    readonly addReview = new Button(this.root.getByRole('link', { name: 'Add your review' }));

    readonly oldPrice = this.root.locator('.old-product-price');
    readonly price = this.root.locator('.prices');

    readonly quantity = new Input(this.root.locator('.qty-input'));
    readonly addToCard = new Button(this.root.locator('.add-to-cart-button'));
    readonly addToWishList = new Button(this.root.locator('.add-to-wishlist-button'));
    readonly emailFriend = new Button(this.root.locator('.email-a-friend-button'));
    readonly compareList = new Button(this.root.locator('.add-to-compare-list-button'));

    readonly attributes = new Attributes(this.page, this.root);

    readonly productTags = new Tags(this.page, this.root);
    readonly purchasedProducts = new ProductGrid(this.page, this.root.locator('.also-purchased-products-grid'));
    readonly relatedProducts = new ProductGrid(this.page, this.root.locator('.related-products-grid'));
}