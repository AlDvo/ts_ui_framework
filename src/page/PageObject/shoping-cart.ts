import { Page } from "@playwright/test";
import { BasePage, Button, CheckBox, Dropdown, HeaderLinks, Input, Menu } from "../..";

export class ShopingCart extends BasePage {
    constructor(page: Page) {
        super(page, page.locator('.master-wrapper-page'));
    }
    readonly shopingCartPage = this.root.locator('.shopping-cart-page');

    readonly headerLinks = new HeaderLinks(this.page, this.root.locator('.header-links'));

    readonly searchField = new Input(this.root.locator('.search-box-text'));
    readonly searchButton = new Button(this.root.locator('.search-box-button'));

    readonly headerMenu = new Menu(this.page, this.root.locator('.top-menu'));

    readonly cartTable = this.shopingCartPage.locator('.class');

    readonly updateButton = new Button(this.shopingCartPage.locator('.update-cart-button'));
    readonly continueShoping = new Button(this.shopingCartPage.locator('.continue-shopping-button'));

    readonly couponeCodeInput = new Input(this.shopingCartPage.locator('.discount-coupon-code'));
    readonly couponeCodeButton = new Button(this.shopingCartPage.locator('.apply-discount-coupon-code-button'));
    readonly couponeCodeMessage = this.shopingCartPage.locator('.coupon-box').locator('.message');

    readonly giftCardCodeInput = new Input(this.shopingCartPage.locator('.gift-card-coupon-code'));
    readonly giftCardCodeButton = new Button(this.shopingCartPage.locator('.apply-gift-card-coupon-code-button'));
    readonly giftCardCodeMessage = this.shopingCartPage.locator('.giftcard-box').locator('.message');


    readonly countryDropdown = new Dropdown(this.shopingCartPage.locator('.country-input'));
    readonly stateDropdown = new Dropdown(this.shopingCartPage.locator('.state-input'));
    readonly zipCode = new Input(this.shopingCartPage.locator('.zip-input'));
    readonly estimateShippingButton = new Button(this.shopingCartPage.locator('.estimate-shipping-button'));

    readonly totalInfo = this.shopingCartPage.locator('.cart-total');
    readonly termsServiceCheckbox = new CheckBox(this.shopingCartPage.locator('id=termsofservice'));
    readonly checkoutButton = new Button(this.shopingCartPage.locator('.checkout-button'));
}