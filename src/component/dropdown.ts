import { BaseComponent } from "./base-component";

export class Dropdown extends BaseComponent {
    async setValue(value: string) {
        await this.root.selectOption(value);
    }

    async getValue() {
        return await this.root.innerText();
    }
}