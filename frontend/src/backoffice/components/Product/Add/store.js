import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    varieties: [],
};

const actions = { name: "addVarietyActions" };
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




export { store as addVarietyStore, actions as addVarietyActions };
