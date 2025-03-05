import Topcategories from '../components/browse/topcategories';
import Browsesteam from '../components/browse/browsesteam';
import Header from '../../components/header'
import Client from '../../components/client'
import Footer from '../../components/footer'
import games from "@/data/games.json";

export default function Browse() {
    return (
        <>
            <Client></Client>
            <Header></Header>
            <div className="bg-gradient-to-b from-slate-900 to-cyan-950">
                <Topcategories></Topcategories>
                <Browsesteam allGames={games}></Browsesteam>
            </div>
            <Footer></Footer>
        </>
    )
}