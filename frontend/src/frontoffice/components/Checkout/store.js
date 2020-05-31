import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    loading: false,
};

const actions = { name: "checkoutCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("CHECKOUT__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setLoading = createAction("CHECKOUT__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));




export { store as checkoutCStore, actions as checkoutCStoreActions };
