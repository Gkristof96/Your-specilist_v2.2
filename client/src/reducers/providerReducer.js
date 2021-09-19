import {
  PROVIDER_LIST_REQUEST,
  PROVIDER_LIST_SUCCESS,
  PROVIDER_LIST_FAIL,
  PROVIDER_DATA_REQUEST,
  PROVIDER_DATA_SUCCESS,
  PROVIDER_DATA_FAIL,
  PROVIDER_ADD_PROFESSION_REQUEST,
  PROVIDER_ADD_PROFESSION_SUCCESS,
  PROVIDER_ADD_PROFESSION_FAIL,
  PROVIDER_ADD_PROFESSION_RESET,
  PROVIDER_CREATE_REVIEW_REQUEST,
  PROVIDER_CREATE_REVIEW_SUCCESS,
  PROVIDER_CREATE_REVIEW_FAIL,
  PROVIDER_CREATE_REVIEW_RESET,
  PROVIDER_UPDATE_REQUEST,
  PROVIDER_UPDATE_SUCCESS,
  PROVIDER_UPDATE_FAIL,
  PROVIDER_UPDATE_RESET,
  PROVIDER_DELETE_PROFESSION_REQUEST,
  PROVIDER_DELETE_PROFESSION_SUCCESS,
  PROVIDER_DELETE_PROFESSION_FAIL,
  PROVIDER_DELETE_PROFESSION_RESET,
} from "../constants/providerConstans";

export const providerListReducer = (state = { providers: [] }, action) => {
  switch (action.type) {
    case PROVIDER_LIST_REQUEST:
      return {
        loading: true,
        providers: [],
      };
    case PROVIDER_LIST_SUCCESS:
      return {
        loading: false,
        providers: action.payload.providers,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    case PROVIDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const providerDataReducer = (
  state = { provider: { reviews: [], gallery: [], professions: [] } },
  action
) => {
  switch (action.type) {
    case PROVIDER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PROVIDER_DATA_SUCCESS:
      return {
        loading: false,
        provider: action.payload,
      };
    case PROVIDER_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const providerReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROVIDER_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PROVIDER_CREATE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PROVIDER_CREATE_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PROVIDER_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const providerAddProfessionReducer = (state = {}, action) => {
  switch (action.type) {
    case PROVIDER_ADD_PROFESSION_REQUEST:
      return { loading: true };
    case PROVIDER_ADD_PROFESSION_SUCCESS:
      return { loading: false, success: true };
    case PROVIDER_ADD_PROFESSION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PROVIDER_ADD_PROFESSION_RESET:
      return {};
    default:
      return state;
  }
};

export const providerDeleteProfessionReducer = (state = {}, action) => {
  switch (action.type) {
    case PROVIDER_DELETE_PROFESSION_REQUEST:
      return { loading: true };
    case PROVIDER_DELETE_PROFESSION_SUCCESS:
      return { loading: false, success: true };
    case PROVIDER_DELETE_PROFESSION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PROVIDER_DELETE_PROFESSION_RESET:
      return {};
    default:
      return state;
  }
};

export const providerUpdateReducer = (state = { provider: {} }, action) => {
  switch (action.type) {
    case PROVIDER_UPDATE_REQUEST:
      return { loading: true };
    case PROVIDER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        provider: action.payload,
      };
    case PROVIDER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PROVIDER_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};
