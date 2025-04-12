import { BaseComponent } from "./base-component";

export class Dropdown extends BaseComponent {
    async setValue(value: string){
        await this.root.click();
        await this.root.getByText(value).click();
    }
    async getValue(){
       return await this.root.locator('option', {has: this.root.locator('selected=selected') }).innerText()
    }
}