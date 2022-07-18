import {
  UPDATE_FILTERS,
  FETCH_LIST,
  CLEAR_FILTER,
  LOADING,
  FILTER_LIST,
} from '../Actions/filters.action';

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
        tempList = tempList.filter(
          (value) =>
            value.createdBy
              .toLowerCase()
              .includes(userSearchInput.toLowerCase()) ||
            value.featureFlag
              .toLowerCase()
              .includes(userSearchInput.toLowerCase()) ||
            value.repository
              .toLowerCase()
              .includes(userSearchInput.toLowerCase())
        );
      }
      if (featureStatus !== 'all') {
        tempList = tempList.filter(
          (value) => String(value.enabled) === featureStatus
        );
      }
      return { ...state, filteredList: tempList };

    case CLEAR_FILTER:
      return {
        ...state,
        filters: {
          userSearchInput: '',
          featureStatus: 'all',
        },
      };

    default:
      return { ...state };
  }
}
