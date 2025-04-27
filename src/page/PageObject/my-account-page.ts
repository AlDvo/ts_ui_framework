import { Page } from "@playwright/test";
import { BasePage, BlockElement, Button, CheckBox, Dropdown, HeaderLinks, Input, Menu, Radio, User } from "../..";
import { faker } from "@faker-js/faker";

export class MyAccountPage extends BasePage {
    constructor(page: Page) {
        super(page, page.locator('.master-wrapper-page'));
    }
    readonly headerLinks = new HeaderLinks(this.page, this.root.locator('.header-links'));

    readonly searchField = new Input(this.root.locator('.search-box-text'));
    readonly searchButton = new Button(this.root.locator('.search-box-button'));

    readonly headerMenu = new Menu(this.page, this.root.locator('.top-menu'));

    readonly accountNavigation = new BlockElement(this.page, this.root.locator('.block-account-navigation'));

    readonly customerInfoPage = this.root.locator('.customer-info-page');
    readonly genderMaleRadioButton = new Radio(this.customerInfoPage.locator('.gender').getByText('Male'));
    readonly genderFemaleRadioButton = new Radio(this.customerInfoPage.locator('.gender').getByText('Female'));
    readonly firstNameInput = new Input(this.customerInfoPage.locator('id=FirstName'));
    readonly lastNameInput = new Input(this.customerInfoPage.locator('id=LastName'));
    readonly emailInput = new Input(this.customerInfoPage.locator('id=Email'));

    readonly saveButton = new Button(this.customerInfoPage.locator('.save-customer-info-button'));

    readonly customerAddresses = this.root.locator('.address-list-page');
    readonly addNewAddresses = new Button(this.customerAddresses.locator('.add-address-button'));

    readonly addressEditPage = this.root.locator('.address-edit-page');
    readonly firstNameAddress = new Input(this.addressEditPage.locator('id=Address_FirstName'));
    readonly lastNameAddress = new Input(this.addressEditPage.locator('id=Address_LastName'));
    readonly emailAddress = new Input(this.addressEditPage.locator('id=Address_Email'));
    readonly companyAddress = new Input(this.addressEditPage.locator('id=Address_Company'));
    readonly countryAddress = new Dropdown(this.addressEditPage.locator('id=Address_CountryId'));
    readonly stateAddress = new Input(this.addressEditPage.locator('id=Address_StateProvinceId'));
    readonly cityAddress = new Input(this.addressEditPage.locator('id=Address_City'));
    readonly address1Address = new Input(this.addressEditPage.locator('id=Address_Address1'));
    readonly address2Address = new Input(this.addressEditPage.locator('id=Address_Address2'));
    readonly zipAddress = new Input(this.addressEditPage.locator('id=Address_ZipPostalCode'));
    readonly phoneAddress = new Input(this.addressEditPage.locator('id=Address_PhoneNumber'));
    readonly faxAddress = new Input(this.addressEditPage.locator('id=Address_FaxNumber'));

    readonly saveAddressButton = new Button(this.addressEditPage.locator('.save-address-button'));

    async fillCustomerFieled(user: User) {
    
            await this.firstNameAddress.setValue(user.firstName);
            await this.lastNameAddress.setValue(user.lastName);
            await this.emailAddress.setValue(user.email);
            await this.companyAddress.setValue(user.company!);

            let listOptions = await this.countryAddress.getOptions();
            await this.countryAddress.setValue(listOptions.at(faker.number.int({min:0, max : listOptions.length}))!);
            
            await this.cityAddress.setValue(user.city!);
            await this.address1Address.setValue(user.address1!);
            await this.address2Address.setValue(user.address2!);
            await this.zipAddress.setValue(user.zip!);
            await this.phoneAddress.setValue(user.phone!);
            await this.faxAddress.setValue(user.fax!);
        }
}