import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    orders: [],
    loading: false,
};

const actions = { name: "orderCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("ORDER__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setOrders = createAction("ORDER__SET_ORDERS");
store.on(actions.setOrders, (state, value) => ({
  ...state, orders: value
}));

actions.setLoading = createAction("ORDER__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));

export { store as orderCStore, actions as orderCStoreActions };
