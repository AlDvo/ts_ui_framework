import { FramePage } from ".";
import { Button, CheckBox, Dropdown, Input, ProductGrid} from "../..";

export class SearchPage extends FramePage {

    readonly searchInput = new Input(this.root.locator('.search-text'));
    readonly searchButton = new Button(this.root.locator('.search-button'));

    readonly advancedSearch = new CheckBox(this.root.locator('id=As'));

    readonly category = new Dropdown(this.root.locator('id=Cid'));
    readonly searchSubCategories = new CheckBox(this.root.getByRole('checkbox', {name: 'Isc'}));
    readonly manufacturer = new Dropdown(this.root.locator('id=Mid'));

    readonly priceFrom = new Input(this.root.locator('.price-from'));
    readonly priceTo = new Input(this.root.locator('.price-to'));

    readonly searchProductDescription = new CheckBox(this.root.getByRole('checkbox', {name: 'Sid'}));

    readonly sortBy = new Dropdown(this.root.locator('.product-sorting'));
    readonly displayProduct = new Dropdown(this.root.locator('.product-page-size'));

    readonly productTabe = new ProductGrid(this.page ,this.root.locator('.search-results'));

    async getSelectValue() {
        let value = Number(await this.category.root.inputValue())
        value = value > 5 ? value - 1 : value

        return (await this.category.getValue()).split('\n')[value];
    }
}