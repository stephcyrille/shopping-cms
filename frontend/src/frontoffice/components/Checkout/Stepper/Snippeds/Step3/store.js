import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
	box_value: 'pay_to_go',
};

const actions = { name: "step3CStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("STEP3__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setChangeBoxValue = createAction("STEP3__SAME_INFO");
store.on(actions.setPayToGo, (state, value) => ({
  ...state, box_value: value, 
}));




export { store as step3CStore, actions as step3CStoreActions };
