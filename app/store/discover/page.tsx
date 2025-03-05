import Gamediscover from '../components/discover/gamediscover'
import Header from '../../components/header'
import Client from '../../components/client'
import Footer from '../../components/footer'
import games from "@/data/games.json";



export default function Discover() {

    const shuffledGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 7);



    return (
        <>
            <Client></Client>
            <Header></Header>
            <div className="px-48 bg-gradient-to-b from-cyan-950 to-blue-950 py-8">
                <div className="text-white py-14">
                    <h1 className="text-4xl font-bold">User's Discovery Feed</h1>
                    <p className="text-lg">Recommendations just for you based on the games you or your friends want and play.</p>
                </div>
                <div className="flex flex-col gap-10">
                    {shuffledGames.map((game, index) => (
                        <Gamediscover key={index} game={game} />
                    ))}
                </div>
                
            </div>
            <Footer></Footer>
        </>
    )
}