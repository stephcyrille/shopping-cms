import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    products: [],
    banner: {},
    cover: {},
    categories: [],
    feature_products: [],
    product_flash_sale: [],
    loading: false,
};

const actions = { name: "homeCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("HOME__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setProducts = createAction("HOME__SET_PRODUCTS");
store.on(actions.setProducts, (state, value) => ({
  ...state, products: value
}));

actions.setHomeBanner = createAction("HOME__SET_HOME_BANNER");
store.on(actions.setHomeBanner, (state, value) => ({
  ...state, banner: value
}));

actions.setHomeCover = createAction("HOME__SET_HOME_ARTICLE_COVER");
store.on(actions.setHomeCover, (state, value) => ({
  ...state, cover: value
}));

actions.setFeatureProducts = createAction("HOME__SET_HOME_FEATURE ARTICLE");
store.on(actions.setFeatureProducts, (state, value) => ({
  ...state, feature_products: value
}));

actions.setProductFlashSale = createAction("HOME__SET_HOME_PRODUCT_FLASH_SALE");
store.on(actions.setProductFlashSale, (state, value) => ({
  ...state, product_flash_sale: value
}));

actions.setHomeCategories = createAction("HOME__SET_HOME_CATEGORIES");
store.on(actions.setHomeCategories, (state, value) => ({
  ...state, categories: value
}));

actions.setLoading = createAction("HOME__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));

export { store as homeCStore, actions as homeCStoreActions };
