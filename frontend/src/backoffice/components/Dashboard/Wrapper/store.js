import { createAction, createReducer } from "redux-act";

const initialState = {
  sidebarOpen: false,
};

const actions = { name: "DashboardWrapperCStoreActions" };
const store = createReducer({}, initialState); // stores are called reducers


actions.setSidebarOpen = createAction("DASHBOARD_WRAPPER_SET_SIDEBAR_OPEN");
store.on(actions.setSidebarOpen, (state, value) => ({
  ...state,
  sidebarOpen: value
}));

export {
  store as dashboardWrapperCStore,
  actions as dashboardWrapperCStoreActions
};
