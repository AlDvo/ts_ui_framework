import { expect as baseExpect } from '@playwright/test';
import type { Locator } from '@playwright/test';
import { BaseComponent } from '../component';


const createCompMethod = (methodName: string) => {
    return async function (this: any, component: BaseComponent | Locator, options?: { timeout?: number }) {
        const assertionName = `${methodName}Comp`;
        let pass: boolean;
        let matcherResult: any;
        let element = component instanceof BaseComponent ? component.root : component;

        try {
            await baseExpect(element)[methodName]({ timeout: options?.timeout || 15000 });
            pass = true;
        } catch (e: any) {
            matcherResult = e.matcherResult;
            pass = false;
        }

        const message = () => createMessage(pass, assertionName, element, matcherResult);

        return {
            message,
            pass,
            name: assertionName,
            actual: matcherResult?.actual,
        };
    };
};

// Расширение expect с новыми методами
export const expect = baseExpect.extend({
    toBeVisibleComp: createCompMethod('toBeVisible'),
    toBeHiddenComp: createCompMethod('toBeHidden'),
    toBeEnabledComp: createCompMethod('toBeEnabled'),
    toBeEditableComp: createCompMethod('toBeEditable'),
    toBeDisabledComp: createCompMethod('toBeDisabled'),
});

const createMessage = (pass: boolean, assertionName: string, element: Locator, matcherResult: any) => {
    const locatorInfo = `Locator: ${element}`;
    const expectedInfo = `Expected: ${pass ? 'not ' : ''}${assertionName.charAt(0).toUpperCase() + assertionName.slice(1)}`;
    const actualInfo = matcherResult ? `Actual: ${matcherResult.actual}` : '';
    const errorMessage = matcherResult?.message ? `Error Message: ${matcherResult.message}` : 'No additional error message provided.';

    return `${locatorInfo}\n${expectedInfo}\n${actualInfo}\n${pass ? '' : errorMessage}`;
};