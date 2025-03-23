import { Locator } from "@playwright/test";

export abstract class BaseComponent {
    constructor(locator: Locator) {
        this.root = locator;
    }
    readonly root: Locator;
    async isVisible() {
        return await this.root.isVisible();
    }
    async isHidden() {
        return await this.root.isHidden();
    }
    async isEditable() {
        return await this.root.isEditable();
    }

    async isDisabled() {
        return await this.root.isDisabled();
    }
}