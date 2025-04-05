import { BasePage, Button } from "../..";

export class HeaderLinks extends BasePage{
    readonly register = new Button(this.root.locator('.ico-register'));
    readonly logIn = new Button(this.root.locator('.ico-login'));
    readonly shoppingCart = new Button(this.root.locator('.ico-cart'));
    readonly wishlist = new Button(this.root.locator('.ico-wishlist'));
}