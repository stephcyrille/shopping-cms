import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    cart: {},
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

actions.setLoading = createAction("CART__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));




export { store as cartCStore, actions as cartCStoreActions };
