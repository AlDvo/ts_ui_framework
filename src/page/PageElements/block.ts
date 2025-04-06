import { BasePage } from "../..";

export class BlockElement extends BasePage{
    readonly title = this.root.locator('.title');
    readonly listItem = this.root.locator('.listbox');
}