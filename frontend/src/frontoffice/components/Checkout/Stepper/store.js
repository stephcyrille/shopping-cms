import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    same_info: false,
    major: false,
    newsletter: false,
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




export { store as stepperCStore, actions as stepperCStoreActions };
