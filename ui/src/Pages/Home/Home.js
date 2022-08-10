import Dashboard from "../../Components/Dashboard/Dashboard";
import Layout from "../../Components/Layout/Layout";
import { FEATURE_FLAGS, FEATURE_FLAGS_HEADERS} from "../../Mock/featureFlags";

export default function Home(){
    return(
        <Layout>
            <Dashboard 
            featureFlags={FEATURE_FLAGS} 
            headers={FEATURE_FLAGS_HEADERS}
            />
      </Layout>
    )
}



