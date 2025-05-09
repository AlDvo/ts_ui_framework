import { BasePage, Button } from "../..";

export class HeaderLinks extends BasePage{

    readonly account = new Button(this.root.locator('.account'));
    readonly register = new Button(this.root.locator('.ico-register'));
    readonly logIn = new Button(this.root.locator('.ico-login'));
    readonly logOut = new Button(this.root.locator('.ico-logout'));
    readonly shoppingCart = new Button(this.root.locator('.ico-cart'));
    readonly wishlist = new Button(this.root.locator('.ico-wishlist'));
}