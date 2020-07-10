import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    gender: 'female',
};

const actions = { name: "registrationCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("REGISTRATION__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setChangeBoxValue = createAction("REGISTRATION__SAME_INFO");
store.on(actions.setChangeBoxValue, (state, value) => ({
  ...state, gender: value, 
}));




export { store as registrationCStore, actions as registrationCStoreActions };
