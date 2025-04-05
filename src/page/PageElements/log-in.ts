import { BasePage, Button, CheckBox, Input } from "../..";

export class HeaderLinks extends BasePage {
    readonly title = this.root.locator('.page-title');

    readonly registerButton = new Button(this.root.locator('.register-button'));

    readonly validationErrorSummary = this.root.locator('.validation-summary-errors');
    readonly validationErrorField = this.root.locator('.field-validation-error');

    readonly emailInput = new Input(this.root.locator('.email'));
    readonly passwordInput = new Input(this.root.locator('.password'));
    readonly rememberMe = new CheckBox(this.root.getByRole('checkbox', { name: 'RememberMe' }));

    readonly forgotPassword = new Button(this.root.locator('.forgot-password'));

    readonly logIn = new Button(this.root.locator('.login-button'));
}