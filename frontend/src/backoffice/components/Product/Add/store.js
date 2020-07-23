import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    varieties: [],
    // varieties: [
    //   {
    //     id : 0,
    //     color: 'Noir',
    //     size: 'XXL',
    //     quantity: 4,
    //     picture1: '/static/images/accessories.png',
    //     picture2: '/static/images/bag.jpg',
    //     picture3: '/static/images/product3.jpg',
    //     picture4: '/static/images/beauty.jpg',
    //   },
    // ],

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
