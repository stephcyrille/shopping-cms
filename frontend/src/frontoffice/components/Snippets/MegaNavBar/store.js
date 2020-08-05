import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    trending_product: [],
    loading: false,
};

const actions = { name: "megaMenuCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("MEGA_NAV__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setTrendingProducts = createAction("MEGA_NAV__SET_TRENDING_PRODUCTS");
store.on(actions.setTrendingProducts, (state, value) => ({
  ...state, trending_product: value
}));


actions.setLoading = createAction("MEGA_NAV__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));

export { store as megaMenuCStore, actions as megaMenuCStoreActions };
