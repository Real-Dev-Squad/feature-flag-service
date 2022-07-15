import { FOOTER } from '../../Constant/constant';

export default function Footer(){
    return(
        <footer className="my-8 w-screen flex justify-center text-xs">
            <span className="ml-2">{FOOTER.COPYRIGHT}</span>
            <a href="#" className="ml-2 hover:underline">{FOOTER.RDS_WEBSITE}</a>
            <a href="#" className="ml-2 hover:underline">{FOOTER.DISCORD_SERVER}</a> 
        </footer>
    )
}