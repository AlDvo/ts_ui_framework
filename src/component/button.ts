import { Locator } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class Button extends BaseComponent {
    async clickButton() {
        await this.root.waitFor({state:'attached', timeout: 15000});
        await this.root.click();
    }

    async getButtonName(){
        await this.root.waitFor({state:'attached', timeout: 15000});
        return await this.root.innerText();
    }

    async isVisible() {
        return await this.root.isVisible();
    }
    async isHidden(): Promise<boolean> {
        return await this.root.isVisible();
    }
    async isEditable(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async isDisabled(): Promise<boolean> {
        return await this.root.isVisible();
    }
}