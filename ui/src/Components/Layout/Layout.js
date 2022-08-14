import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import { USER } from '../../test/Fixtures/user';

export default function Layout(props){
    return(
        <>
        <Header user={USER} data-testid="h"/>
            <main className='flex flex-row my-4'>
                <LeftNav data-testid="ln"/>
                <section> 
                    {props.children}
                </section>
            </main>
        <Footer data-testid="f"/>
        </>
    )
}