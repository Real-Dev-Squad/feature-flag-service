import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';

export default function Layout(props){
    return(
        <>
        <Header />
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