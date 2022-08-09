import Dashboard from "./Components/Dashboard/Dashboard";
import Layout from "./Components/Layout/Layout";
import { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS} from "./Mock/featureFlags";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Dashboard 
          featureFlags={FEATURE_FLAGS} 
          headers={FEATURE_FLAGS_HEADERS}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
