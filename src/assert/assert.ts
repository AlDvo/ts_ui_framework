import { expect as baseExpect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';
import { BaseComponent, Button } from '../component';


export const expect = baseExpect.extend({
    async toBeVisibleComp(component: BaseComponent | Locator, options?: { timeout?: 15000 }) {
        const assertionName = 'toBeVisibleComp';
        let pass: boolean;
        let matcherResult: any;
        let element = component instanceof BaseComponent ?  component.root : component
        try {
            await baseExpect(element).toBeVisible({ timeout: this.timeout });
            pass = true;
        } catch (e: any) {
            matcherResult = e.matcherResult;
            pass = false;
        }

        const message = pass
            ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
                '\n\n' +
                `Locator: ${component}\n` +
                `Expected: not ${this.utils.printExpected(`Visible`)}\n` +
                (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')
            : () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
                '\n\n' +
                `Locator: ${component}\n` +
                `Expected: ${this.utils.printExpected(component)}\n` +
                (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');

        return {
            message,
            pass,
            name: assertionName,
            actual: matcherResult?.actual,
        };
    },

    async toBeHidddenComp(component: BaseComponent | Locator, options?: { timeout?: 15000 }) {
        const assertionName = 'toBeHidddenComp';
        let pass: boolean;
        let matcherResult: any;
        let element = component instanceof BaseComponent ?  component.root : component
        try {
            await baseExpect(element).toBeHidden({ timeout: this.timeout });
            pass = true;
        } catch (e: any) {
            matcherResult = e.matcherResult;
            pass = false;
        }

        const message = pass
            ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
                '\n\n' +
                `Locator: ${component}\n` +
                `Expected: not ${this.utils.printExpected(`Hidden`)}\n` +
                (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')
            : () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
                '\n\n' +
                `Locator: ${component}\n` +
                `Expected: ${this.utils.printExpected(component)}\n` +
                (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');

        return {
            message,
            pass,
            name: assertionName,
            actual: matcherResult?.actual,
        };
    },
});