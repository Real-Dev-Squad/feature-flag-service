import {
  UPDATE_FILTERS,
  FETCH_LIST,
  CLEAR_FILTER,
  LOADING,
  FILTER_LIST,
} from '../Actions/filters.action';
import searchFilter from '../Utils/helpers';
import { FEATURE_STATUS } from '../Constant/constant';
import { initialState } from '../Context/FilterContext';

/**
 * @function reducer to update state automatically when dispatch is called
 * @param state {object} previous state
 * @param action {object} type and payload properties
 * @return {object} new state
 */

export function FilterReducer(state, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case FETCH_LIST:
      const { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS } = action.payload;
      return {
        ...state,
        featureList: FEATURE_FLAGS,
        filteredList: FEATURE_FLAGS,
        featureFlagHeader: FEATURE_FLAGS_HEADERS,
        isLoading: false,
      };

    case UPDATE_FILTERS:
      let { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_LIST:
      let { featureList } = state;
      let { userSearchInput, featureStatus } = state.filters;

      let tempList = [...featureList];

      if (userSearchInput) {
        tempList = searchFilter(tempList, userSearchInput);
      }
      if (featureStatus !== 'all') {
        tempList = tempList.filter(
          (value) => String(value.enabled) === featureStatus
        );
      }
      return { ...state, filteredList: tempList };

    case CLEAR_FILTER:
      // Get default status from initialState
      const {
        filters: { featureStatus: status },
      } = initialState;
      return {
        ...state,
        filters: {
          userSearchInput: '',
          featureStatus: status,
        },
      };

    default:
      return { ...state };
  }
}
