import {
  UPDATE_FILTERS,
  FETCH_LIST,
  CLEAR_FILTER,
  LOADING,
  FILTER_LIST,
} from '../actions/actions';

export function filterReducer(state, action) {
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
      let { userInput, status } = state.filters;

      let tempList = [...featureList];

      if (userInput) {
        tempList = tempList.filter(
          (value) =>
            value.createdBy.toLowerCase().includes(userInput.toLowerCase()) ||
            value.featureFlag.toLowerCase().includes(userInput.toLowerCase()) ||
            value.repository.toLowerCase().includes(userInput.toLowerCase())
        );
      }
      if (status !== 'all') {
        tempList = tempList.filter((value) => String(value.enabled) === status);
        console.log(tempList, 'status', status);
      }
      return { ...state, filteredList: tempList };

    case CLEAR_FILTER:
      return {
        ...state,
        filters: {
          userInput: '',
          status: 'all',
        },
      };
    default:
      return { ...state };
  }
}
