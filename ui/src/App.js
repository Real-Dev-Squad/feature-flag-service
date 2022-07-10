import Dashboard from "./Components/Dashboard/Dashboard";
import { FEATURE_FLAGS } from "./Tests/Fixtures/featureFlags";

function App() {
  return (
    <main 
      className='flex flex-col items-center'
    >
      <Dashboard 
        featureFlags={FEATURE_FLAGS} 
        headers={['featureFlag', 'repository']}
      />
    </main>
  );
}

export default App;
