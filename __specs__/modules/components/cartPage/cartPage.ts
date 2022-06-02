import { AddCartItemPopup, CartItem } from '@Components/cartPage/addCartItemPopup/addCartItemPopup';
import { Container } from '@Core/container';

const SELECTORS = {
    addCartItemButton: './/button[contains(text(), "Add Cart Item")]',
    addCartItemPopup: './/div[@class="modal" and contains(., "Add New Cart Item")]',
};

export class CartPageContainer extends Container {
    public async fulfill(initialState = {}): Promise<void> {
        await super.fulfill(initialState);
    }

    public async clickAddCartItemButton(): Promise<void> {
        await document.clickByXpath(SELECTORS.addCartItemButton);
    }

    public async getAddCartItemPopup(): Promise<AddCartItemPopup> {
        const [addCartItemPopupElement] = await document.waitForXpath(SELECTORS.addCartItemPopup);
        const addCartItemPopup = new AddCartItemPopup(addCartItemPopupElement);
        return addCartItemPopup;
    }

    public async addCartItem(cartItem: CartItem): Promise<void> {
        await this.clickAddCartItemButton();
        const addItemPopup = await this.getAddCartItemPopup();

        await addItemPopup.fill(cartItem);
        await addItemPopup.clickCreateItem();
    }
}
