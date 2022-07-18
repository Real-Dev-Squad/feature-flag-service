import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Filters from './Components/Filters/Filters';
import Search from './Components/Search/Search';
import { useFilter } from './Context/FilterContext';
import { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS } from './Mock/featureFlags';

function App() {
  const { filteredList, isLoading, featureFlagHeader, clearFilters } =
    useFilter();

  if (isLoading) {
    // We can add spinner here - TODO
    return <span>Loading...</span>;
  }

  return (
    <main className='flex flex-col items-center'>
      <section className='flex md justify-center items-center '>
        <Search />
        <Filters />
        <button
          className='bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-2.5 border border-red-400 hover:border-transparent rounded '
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </section>
      <Dashboard featureFlags={filteredList} headers={featureFlagHeader} />
      <Footer />
    </main>
  );
}

export default App;
