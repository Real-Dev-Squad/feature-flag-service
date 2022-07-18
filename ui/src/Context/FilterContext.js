import { createContext, useContext, useEffect, useReducer } from 'react';
import { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS } from '../Mock/featureFlags';
import { FilterReducer } from '../reducers/FilterReducer';
import {
  UPDATE_FILTERS,
  FETCH_LIST,
  CLEAR_FILTER,
  LOADING,
  FILTER_LIST,
} from '../Actions/filters.action';

const FilterContext = createContext(null);

const initialState = {
  isLoading: true,
  featureList: [],
  filteredList: [],
  featureFlagHeader: [],
  filters: {
    userSearchInput: '',
    featureStatus: 'all',
  },
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  function updateFilters(name, value) {
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  }

  function clearFilters() {
    dispatch({ type: CLEAR_FILTER });
  }

  useEffect(() => {
    //  Todo - we can handle our API call here
    dispatch({ type: LOADING });
    dispatch({
      type: FETCH_LIST,
      payload: { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS },
    });
  }, []);

  useEffect(() => {
    dispatch({ type: FILTER_LIST });
  }, [state.filters]);

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter() {
  return useContext(FilterContext);
}

export { FilterContext, FilterContextProvider };
