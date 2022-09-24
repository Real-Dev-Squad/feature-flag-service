import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { USER } from '../../test/Fixtures/user';

export default function Layout(props){
    return(
        <>
        <Header user={USER} />
            <main className='flex flex-row my-4'>
                <Navigation />
                <section> 
                    {props.children}
                </section>
            </main>
        <Footer />
        </>
    )
}