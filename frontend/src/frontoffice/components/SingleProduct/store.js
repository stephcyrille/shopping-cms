import { createAction, createReducer } from "redux-act";

const initialState = {
	initial_values:{},
    quantity: 1,
    loading: false,
    stock_quantity: 0,
    product_slug: null,
    single_product: {},
    active_variety: {},
    variety_id: 0,
    pic_loading: false,
    nav_cart_toggler: false,
    thumbnail_picture_key: 0,
};

const actions = { name: "singleProductCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setInitialValues = createAction("SINGLE_PRODUCT__SET_INITIAL_VALUES");
store.on(actions.setInitialValues, (state, value) => ({
	...state,
	initial_values: value
}));

actions.setProductQuantity = createAction("SINGLE_PRODUCT__SET_PRODUCT_QUANTITY");
store.on(actions.setProductQuantity, (state, value) => ({
  ...state, quantity: value
}));

actions.setStockQuantity = createAction("SINGLE_PRODUCT__SET_STOCK_QUANTITY");
store.on(actions.setStockQuantity, (state, value) => ({
  ...state, stock_quantity: value
}));

actions.setLoading = createAction("SINGLE_PRODUCT__SET_LOADING");
store.on(actions.setLoading, (state, value) => ({
  ...state, loading: value
}));

actions.setSingleProduct = createAction("SINGLE_PRODUCT__SET_SINGLE_PRODUCT");
store.on(actions.setSingleProduct, (state, value) => ({
  ...state, single_product: value
}));

actions.setActiveVariety = createAction("SINGLE_PRODUCT__SET_ACTIVE_VARIETY");
store.on(actions.setActiveVariety, (state, value) => ({
  ...state, active_variety: value
}));

actions.setVarietyID = createAction("SINGLE_PRODUCT__SET_VARIETY_ID");
store.on(actions.setVarietyID, (state, value) => ({
  ...state, variety_id: value
}));

actions.setThumbnailPictureKey = createAction("SINGLE_PRODUCT__SET_THUMBNAIL_PICTURE_KEY");
store.on(actions.setThumbnailPictureKey, (state, value) => ({
  ...state, thumbnail_picture_key: value
}));

actions.setProductSlug = createAction("SINGLE_PRODUCT__SET_PRODUCT_SLUG");
store.on(actions.setProductSlug, (state, value) => ({
  ...state, product_slug: value
}));

actions.setPicLoading = createAction("SINGLE_PRODUCT__SET_PIC_LOADING");
store.on(actions.setPicLoading, (state, value) => ({
  ...state, pic_loading: value
}));

actions.setNavCartToggler = createAction("SINGLE_PRODUCT__SET_NAV_CART_TOGGLER");
store.on(actions.setNavCartToggler, (state, value) => ({
  ...state, nav_cart_toggler: value
}));

export { store as singleProductCStore, actions as singleProductCStoreActions };
