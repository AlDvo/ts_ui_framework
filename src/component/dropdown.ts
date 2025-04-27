import { BaseComponent } from "./base-component";

export class Dropdown extends BaseComponent {
    async setValue(value: string) {
        await this.root.selectOption(value);
    }

    async getValue() {
        return await this.root.innerText();
    }

    async getOptions(){
        return (await this.root.allInnerTexts())[0].split('\n').map(el => el.replace('\\n', ''));
    }
}