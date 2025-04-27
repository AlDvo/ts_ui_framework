import { BasePage, Button } from "../..";

export class TabSection extends BasePage{
    readonly title = this.root.locator('.step-title');

    readonly backButton = new Button(this.root.locator('.back-link'));
    readonly continueButton = new Button(this.root.locator('value=Continue'));
    readonly checkoutData = this.root.locator('.checkout-data');

}