import { FramePage } from ".";
import { BlockElement, ProductGrid } from "../..";

export class MainPage extends FramePage {

    readonly popularTags = new BlockElement(this.page, this.root.locator('.block-popular-tags'));
    readonly communityPool = new BlockElement(this.page, this.root.locator('.block-poll'));

    readonly productTable = new ProductGrid(this.page, this.root.locator('.home-page-product-grid'));
}