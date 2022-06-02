import { Component } from '@Core/component';

export type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

const SELECTORS = {
    name: '[data-testid="input-name"]',
    price: '[data-testid="input-price"]',
    quantity: '[data-testid="input-quantity"]',

    createItemButton: './/button[contains(text(), "Создать")]',
};

export class AddCartItemPopup extends Component {
    public async fill(item: CartItem): Promise<void> {
        const selectorToProperty = new Map<keyof CartItem, string>([
            ['name', SELECTORS.name],
            ['price', SELECTORS.price],
            ['quantity', SELECTORS.quantity],
        ]);

        for (const [key, selector] of selectorToProperty) {
            const [inputElement] = await this.element.waitForQuerySelector(selector);
            const input = new Component(inputElement);
            input.input(item[key].toString());
        }
    }

    public async clickCreateItem(): Promise<void> {
        await this.element.clickByXpath(SELECTORS.createItemButton);
    }
}
