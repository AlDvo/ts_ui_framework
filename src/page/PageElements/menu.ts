import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base-page";

export class Menu extends BasePage {
    constructor(page: Page, root: Locator) {
        super(page, root);
    }

    async selectMenu(menu: string) {
        await this.root.getByRole('link', { name: menu }).click();
    }

    async getMenuName() {
        return await this.root.allInnerTexts();
    }
}

export class InformationMenu extends Menu {
    constructor(page: Page, root: Locator) {
        super(page, root);
    }


}

export enum menuTopName {
    books = 'Books',
    computers = 'Computers',
    electronics = 'Electronics',
    apparel = 'Apparel & Shoes',
    digital = 'Digital downloads',
    jewelry = 'Jewelry',
    card = 'Gift Cards'
}

export enum menuInformationName {
    sitemap = 'Sitemap',
    shipping = 'Shipping & Returns',
    notice = 'Privacy Notice',
    conditions = 'Conditions of Use',
    aboutUs = 'About us',
    contactUs = 'Contact us'
}

export enum menuCustomerName {
    Search = 'Search',
    News = 'News',
    Blog = 'Blog',
    products = 'Recently viewed products',
    compareProductsList = 'Compare products list',
    newProducts = 'New products'
}


export enum menuAccountName {
    account = 'My account',
    Orders = 'Orders',
    Addresses = 'Addresses',
    cart = 'Shopping cart',
    Wishlist = 'Wishlist',
}
export enum menuFollowUsName {
    Facebook = 'Facebook',
    Twitter = 'Twitter',
    RSS = 'RSS',
    YouTube = 'YouTube',
    Google = 'Google+',
}