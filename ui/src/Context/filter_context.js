import { createContext, useContext, useEffect, useReducer } from 'react';
import { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS } from '../Mock/featureFlags';
import { filterReducer } from '../reducers/filter_reducer';
import {
  UPDATE_FILTERS,
  FETCH_LIST,
  CLEAR_FILTER,
  LOADING,
  FILTER_LIST,
} from '../actions/actions';

const FilterContext = createContext(null);

const initialState = {
  isLoading: true,
  featureList: [],
  filteredList: [],
  featureFlagHeader: [],
  filters: {
    userInput: '',
    status: 'all',
  },
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  function updateFilters(name, value) {
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  }

  function clearFilter() {
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
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilterContext() {
  return useContext(FilterContext);
}

export { FilterContext, FilterContextProvider };
