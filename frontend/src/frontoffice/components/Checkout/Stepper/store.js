import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
  same_info: false,
  major: false,
  newsletter: false,

  // For cart invoice details
  cart: {},
  cart_sub_total: 0,
  cart_total: 0,
  cart_delivery_price: 0,
  loading: false,
};

const actions = { name: "stepperCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("STEPPER__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setSameInfo = createAction("STEPPER__SAME_INFO");
store.on(actions.setSameInfo, (state, value) => ({
  ...state, same_info: value
}));

actions.setMajor = createAction("STEPPER__MAJOR");
store.on(actions.setMajor, (state, value) => ({
  ...state, major: value
}));

actions.setNewsletter = createAction("STEPPER__SET_NEWSLETTER");
store.on(actions.setNewsletter, (state, value) => ({
  ...state, newsletter: value
}));


// For cart invoice details
actions.setCart = createAction("CHECKOUT_STEPPER__SET_CART");
store.on(actions.setCart, (state, value) => ({
  ...state, cart: value
}));

actions.setCartSubTotal = createAction("CHECKOUT_STEPPER__SET_SUB_TOTAL");
store.on(actions.setCartSubTotal, (state, value) => ({
  ...state, cart_sub_total: value
}));

actions.setCartTotal = createAction("CHECKOUT_STEPPER__SET_TOTAL");
store.on(actions.setCartTotal, (state, value) => ({
  ...state, cart_total: value
}));

actions.setCartDeliveryPrice = createAction("CHECKOUT_STEPPER__SET_DELIVERY_PRICE");
store.on(actions.setCartDeliveryPrice, (state, value) => ({
  ...state, cart_delivery_price: value
}));

actions.setLoading = createAction("CHECKOUT_STEPPER__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));



export { store as stepperCStore, actions as stepperCStoreActions };
