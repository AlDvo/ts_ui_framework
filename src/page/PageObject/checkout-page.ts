import { Page } from "@playwright/test";
import { BasePage, Button, CheckBox, Dropdown, HeaderLinks, Input, Menu, TabSection } from "../..";

export class CheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page, page.locator('.master-wrapper-page'));
    }
    readonly checkoutPage = this.root.locator('.checkout-page');

    readonly headerLinks = new HeaderLinks(this.page, this.root.locator('.header-links'));

    readonly searchField = new Input(this.root.locator('.search-box-text'));
    readonly searchButton = new Button(this.root.locator('.search-box-button'));

    readonly headerMenu = new Menu(this.page, this.root.locator('.top-menu'));

    readonly billingAddress = new TabSection(this.page, this.checkoutPage.locator('id=opc-billing'));
    readonly billingAddressSelect = new Dropdown(this.billingAddress.root.locator('.address-select'));
    
    readonly shippingAddress = new TabSection(this.page, this.checkoutPage.locator('id=opc-shipping'));
    readonly pickUpinStore = new CheckBox(this.shippingAddress.root.locator('id=PickUpInStore'));

    readonly shippingMethod = new TabSection(this.page, this.checkoutPage.locator('id=opc-shipping_method'));
    readonly shippingMethodList = this.shippingMethod.root.locator('.method-list');
    
    readonly paymentMethod = new TabSection(this.page, this.checkoutPage.locator('id=opc-payment_method'));
    readonly paymentMethodList = this.paymentMethod.root.locator('.method-list');

    readonly paymentInformation = new TabSection(this.page, this.checkoutPage.locator('id=opc-payment_info'));

    readonly confirmOrder = new TabSection(this.page, this.checkoutPage.locator('id=opc-confirm_order'));
    readonly orderSummaryContent = this.confirmOrder.root.locator('.order-summary-content');
    
}