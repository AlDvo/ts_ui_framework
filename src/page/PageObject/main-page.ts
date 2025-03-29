import { Page } from "@playwright/test";
import { BasePage, BlockElement, Button, Menu, Input, InformationMenu, ProductGrid, ProductDetails } from "../..";



export class MainPage extends BasePage {
    constructor(page: Page) {
        super(page, page.locator('.master-wrapper-page'));
    }

    readonly searchField = new Input(this.root.locator('.search-box-text'));
    readonly searchButton = new Button(this.root.locator('.search-box-button'));

    readonly headerMenu = new Menu(this.page, this.root.locator('.top-menu'));

    readonly categories = new BlockElement(this.page, this.root.locator('.block-category-navigation'));
    readonly manufactures = new BlockElement(this.page, this.root.locator('.block-manufacturer-navigation'));
    readonly popularTags = new BlockElement(this.page, this.root.locator('.block-popular-tags'));
    readonly newsletter = new BlockElement(this.page, this.root.locator('.block-newsletter'));
    readonly communityPool = new BlockElement(this.page, this.root.locator('.block-poll'));

    readonly productTable = new ProductGrid(this.page, this.root);
    readonly productDetails = new ProductDetails(this.page);

    readonly footerMenuInfo = new InformationMenu(this.page, this.root.locator('.information'));
    readonly footerMenuCustomer = new InformationMenu(this.page, this.root.locator('.customer-service'));
    readonly footerMenuAccount = new InformationMenu(this.page, this.root.locator('.my-account'));
    readonly footerMenuFollow = new InformationMenu(this.page, this.root.locator('.follow-us'));
}