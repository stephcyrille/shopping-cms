import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    trending_product: [],
    clothing_types: [],
    nav_pictures: [],
    shoes_types: [],
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

actions.setNavPictures = createAction("MEGA_NAV__SET_NAV_PICTURES");
store.on(actions.setNavPictures, (state, value) => ({
  ...state, nav_pictures: value
}));

actions.setClothTypes = createAction("MEGA_NAV__SET_CLOTHING_TYPE");
store.on(actions.setClothTypes, (state, value) => ({
  ...state, clothing_types: value  
}));  

actions.setShoesTypes = createAction("MEGA_NAV__SET_SHOES_TYPE");
store.on(actions.setShoesTypes, (state, value) => ({
  ...state, shoes_types: value  
}));  

actions.setLoading = createAction("MEGA_NAV__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));

export { store as megaMenuCStore, actions as megaMenuCStoreActions };
