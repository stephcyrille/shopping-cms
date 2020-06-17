import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    products: [],
    loading: false,
};

const actions = { name: "allProductsCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("ALL_PRODUCTS__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setProducts = createAction("ALL_PRODUCTS__SET_PRODUCTS");
store.on(actions.setProducts, (state, value) => ({
  ...state, products: value
}));

actions.setLoading = createAction("ALL_PRODUCTS__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));

export { store as allProductsCStore, actions as allProductsCStoreActions };
