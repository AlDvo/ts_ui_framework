import { BaseComponent } from "./base-component";

export class CheckBox extends BaseComponent {
    async setValue(value: boolean){
        await this.root.setChecked(value)
    }
    async getValue(){
       return await this.root.isChecked();
    }
}