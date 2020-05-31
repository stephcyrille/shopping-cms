import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    cart: {},
    cart_sub_total: 0,
    cart_total: 0,
    cart_delivery_price: 0,
    loading: false,
};

const actions = { name: "cartCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("CART__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setCart = createAction("CART__SET_PRODUCT_QUANTITY");
store.on(actions.setCart, (state, value) => ({
  ...state, cart: value
}));

actions.setCartSubTotal = createAction("CART__SET_SUB_TOTAL");
store.on(actions.setCartSubTotal, (state, value) => ({
  ...state, cart_sub_total: value
}));

actions.setCartTotal = createAction("CART__SET_TOTAL");
store.on(actions.setCartTotal, (state, value) => ({
  ...state, cart_total: value
}));

actions.setCartDeliveryPrice = createAction("CART__SET_DELIVERY_PRICE");
store.on(actions.setCartDeliveryPrice, (state, value) => ({
  ...state, cart_delivery_price: value
}));

actions.setLoading = createAction("CART__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));




export { store as cartCStore, actions as cartCStoreActions };
