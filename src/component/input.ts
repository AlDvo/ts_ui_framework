import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class Input extends BaseComponent {
    async setValue(value: string){
        await this.root.fill(value);        
    }
    async getValue(){
       return await this.root.innerText(); 
    }
}