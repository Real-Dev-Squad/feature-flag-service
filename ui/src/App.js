import Dashboard from "./Components/Dashboard/Dashboard";
import { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS} from "./Mock/featureFlags";

function App() {
  return (
    <main 
      className='flex flex-col items-center'
    >
      <Dashboard 
        featureFlags={FEATURE_FLAGS} 
        headers={FEATURE_FLAGS_HEADERS}
      />
    </main>
  );
}

export default App;
