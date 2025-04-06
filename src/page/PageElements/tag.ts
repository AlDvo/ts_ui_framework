import { BasePage } from "../..";

export class Tags extends BasePage{
    readonly title = this.root.locator('.title');
    readonly tagList = this.root.locator('.product-tags-list');

    async getTagList(){
        const list: string [] =  [];
        for(const loc of await this.tagList.locator('.tag').all()) {
            const tag = await loc.locator('.producttag').innerText();
            list.push(tag);
        }
        return list;
    }
    async clickTag(item: string){
        await this.tagList.getByRole('link', {name: item}).click();
    }
}