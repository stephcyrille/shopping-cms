import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    varieties: [],
    id_initial : 1,
};

const actions = { name: "addProductStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("ADD_PRODUCT__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.addVariety = createAction("ADD_PRODUCT_ADD_VARIETY");
store.on(actions.addVariety, (state, value) => ({
  ...state, varieties: value
}));

actions.increaseId = createAction("ADD_PRODUCT_INCREASE ID");
store.on(actions.increaseId, (state, value) => ({
  ...state, id_initial: value
}));




export { store as addProductStore, actions as addProductStoreActions };
