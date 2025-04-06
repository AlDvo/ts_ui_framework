import { FramePage } from ".";
import { Button, Input, Radio } from "../..";
import { faker } from '@faker-js/faker';

export class RegisterPage extends FramePage {

    readonly title = this.root.locator('.page-title');

    readonly genderMaleRadioButton = new Radio(this.root.locator('.gender').getByText('Male'));
    readonly genderFemaleRadioButton = new Radio(this.root.locator('.gender').getByText('Female'));

    readonly firstNameInput = new Input(this.root.locator('id=FirstName'));
    readonly lastNameInput = new Input(this.root.locator('id=LastName'));
    readonly emailInput = new Input(this.root.locator('id=Email'));

    readonly passwordInput = new Input(this.root.locator('id=Password'));
    readonly confirmPasswordInput = new Input(this.root.locator('id=ConfirmPassword'));

    readonly register = new Button(this.root.locator('.register-next-step-button'));

    async fillAllFilled(gender: 'male' | 'female') {
        const bio = {
            'firstName': faker.person.firstName(gender),
            'lastName': faker.person.lastName(gender),
            'email': faker.internet.email(),
            'password': faker.internet.password({ length: 20 })
        }
        await this.firstNameInput.setValue(bio.firstName);
        await this.lastNameInput.setValue(bio.lastName);
        await this.emailInput.setValue(bio.email);

        await this.passwordInput.setValue(bio.password);
        await this.confirmPasswordInput.setValue(bio.password);

        return bio;
    }
}