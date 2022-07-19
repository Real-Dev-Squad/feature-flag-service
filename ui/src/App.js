import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
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
      <Footer />
    </main>
  );
}

export default App;
