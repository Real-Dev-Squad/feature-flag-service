import Layout from "../../Components/Layout/Layout";
import { Link} from "react-router-dom";

export default function NotFound(){
    return(
        <Layout>
            <h1>Not found. Go back to <Link to="/">Home</Link></h1>
        </Layout>
    )
}