import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userDeleteReducer,
  userChangePasswordReducer,
} from "./reducers/userReducers";
import {
  getCityDataReducer,
  getProfessionDataReducer,
  getCategoryDataReducer,
} from "./reducers/searchReducer";
import {
  providerListReducer,
  providerDataReducer,
  providerAddProfessionReducer,
  providerUpdateReducer,
  providerReviewCreateReducer,
  providerDeleteProfessionReducer,
} from "./reducers/providerReducer";
import { offerCreateReducer } from "./reducers/offerReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userChangePassword: userChangePasswordReducer,
  userDelete: userDeleteReducer,
  getCity: getCityDataReducer,
  getProfession: getProfessionDataReducer,
  getCategory: getCategoryDataReducer,
  providerList: providerListReducer,
  providerData: providerDataReducer,
  providerUpdate: providerUpdateReducer,
  providerReviewCreate: providerReviewCreateReducer,
  providerAddProfession: providerAddProfessionReducer,
  providerDeleteProfession: providerDeleteProfessionReducer,
  offerCreate: offerCreateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const middleware = [thunk];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
