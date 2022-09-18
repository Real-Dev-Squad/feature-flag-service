import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import { USER } from '../../test/Fixtures/user';

export default function Layout(props){
    return(
        <>
        <Header user={USER} />
            <main className='flex flex-row my-4'>
                <LeftNav />
                <section> 
                    {props.children}
                </section>
            </main>
        <Footer />
        </>
    )
}