import { BasePage } from "../../base-page";

export class Menu extends BasePage {
    async selectMenu(menu: string) {
        await this.root.getByRole('link', { name: menu }).click();
    }

    async getMenuBlockName() {
        return await this.root.allInnerTexts();
    }
}

export class BlockElement extends Menu {
    readonly title = this.root.locator('.title');
    readonly listItem = this.root.locator('.listbox');
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