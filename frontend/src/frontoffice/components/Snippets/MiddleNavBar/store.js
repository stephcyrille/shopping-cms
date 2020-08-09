import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
	item_quantity: 0,
	loggedIn: false,
};

const actions = { name: "navBarCartCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("NAVBAR_CART__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));


actions.setItem = createAction("NAVBAR_CART__SET_PRODUCT_QUANTITY");
store.on(actions.setItem, (state, value) => ({
  ...state, item_quantity: value
}));

actions.setLoggedIn = createAction("NAVBAR_CART__SET_LOGGED_IN");
store.on(actions.setLoggedIn, (state, value) => ({
  ...state, loggedIn: value
}));


export { store as navBarCartCStore, actions as navBarCartCStoreActions };
