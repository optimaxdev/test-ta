import { Constants } from '../types/cart';
import { addItem, decrementQuantity, deleteItem, getItemsRequest, incrementQuantity } from './cart';

describe('actions', () => {
  it('should create an action for delete by id', () => {
    const id = 1;
    const expectedAction = {
      type: Constants.DELETE_ITEM,
      payload: id,
    };
    expect(deleteItem(id)).toEqual(expectedAction);
  });

  it('should create an action for add item', () => {
    const cartItem = {
      id: 3,
      name: 'item 3',
      price: 1000,
      quantity: 2
    }
    
    const expectedAction = {
      type: Constants.ADD_ITEM,
      payload: cartItem,
    };
    expect(addItem(cartItem)).toEqual(expectedAction);
  });

  it('should create an action for increment quantity', () => {
    const id = 3;
    
    const expectedAction = {
      type: Constants.INCREMENT_QUANTITY,
      payload: id,
    };
    expect(incrementQuantity(id)).toEqual(expectedAction);
  });

  it('should create an action for decrement quantity', () => {
    const id = 3;
    
    const expectedAction = {
      type: Constants.DECREMENT_QUANTITY,
      payload: id,
    };
    expect(decrementQuantity(id)).toEqual(expectedAction);
  });

  it('should create an action for get items request', () => {
    const expectedAction = {
      type: Constants.GET_ITEMS_REQUEST
    };
    expect(getItemsRequest()).toEqual(expectedAction);
  });
});