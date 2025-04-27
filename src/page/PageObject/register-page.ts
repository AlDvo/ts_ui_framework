import { FramePage } from ".";
import { Button, Input, Radio, User } from "../..";

export class RegisterPage extends FramePage {

    readonly title = this.root.locator('.page-title');

    readonly genderMaleRadioButton = new Radio(this.root.locator('.gender').getByText('Male', { exact: true }));
    readonly genderFemaleRadioButton = new Radio(this.root.locator('.gender').getByText('Female', { exact: true }));

    readonly firstNameInput = new Input(this.root.locator('id=FirstName'));
    readonly lastNameInput = new Input(this.root.locator('id=LastName'));
    readonly emailInput = new Input(this.root.locator('id=Email'));

    readonly passwordInput = new Input(this.root.locator('id=Password'));
    readonly confirmPasswordInput = new Input(this.root.locator('id=ConfirmPassword'));

    readonly register = new Button(this.root.locator('.register-next-step-button'));

    async fillAllFieled(user: User) {
        user.gender === 'male' 
            ? await this.genderMaleRadioButton.setValue(true) 
            : await this.genderFemaleRadioButton.setValue(true);

        await this.firstNameInput.setValue(user.firstName);
        await this.lastNameInput.setValue(user.lastName);
        await this.emailInput.setValue(user.email);

        await this.passwordInput.setValue(user.password);
        await this.confirmPasswordInput.setValue(user.password);

        return user;
    }
}