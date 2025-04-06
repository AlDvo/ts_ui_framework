import { BasePage, Button, Input } from "../..";

export class Newsletter extends BasePage{
    readonly title = this.root.locator('.title');
    readonly emailInput = new Input(this.root.locator('.newsletter-email'));
    readonly subscribe = new Button(this.root.locator('.buttons'));
    readonly resultSubscribe = this.root.locator('.newsletter-result-block');
}