import { BasePage } from "../..";

export class Attributes extends BasePage {
    readonly attributeName = this.root.locator('.text-prompt');
    readonly attributeOptions = this.root.locator('.option-list');

    async getAttributeList() {
        let name: string[] = [];
        for (const atr of await this.attributeName.all()) {
            name.push(await atr.innerText());
        }
        return name;
    }

    async getAtrributeOptions() {
        let attributes = new Map();
        const name = await this.getAttributeList();
        
        for (let index = 0; index < (await this.attributeOptions.all()).length; index++) {
            const options = (await this.attributeOptions.nth(index).allInnerTexts()).at(0)!.split('\n');
            attributes.set(name[index], options);
        }
        return attributes;
    }
}