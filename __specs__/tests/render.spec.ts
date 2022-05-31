import { CartPageContainer } from '@Components/cartPage/cartPage';

describe('test', () => {
    let cartPage: CartPageContainer;

    beforeAll(async () => {
        cartPage = new CartPageContainer();
        await cartPage.fulfill();
    });

    test('Debug', async () => {
        cartPage.debug();
    });
});
