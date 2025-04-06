import { FramePage } from ".";
import { Button } from "../..";

export class RegisterResultPage extends FramePage {

    readonly title = this.root.locator('.page-title');

    readonly result = this.root.locator('.result');
    readonly continueButton = new Button(this.root.locator('.register-continue-button'));
}