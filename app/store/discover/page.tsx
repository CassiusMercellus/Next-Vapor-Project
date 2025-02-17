import Gamediscover from '../components/discover/gamediscover'


export default function Discover() {
    return (
        <>
            <div className="px-48 bg-gradient-to-b from-cyan-950 to-blue-950 py-8">
                <div className="text-white py-14">
                    <h1 className="text-4xl font-bold">User's Discovery Feed</h1>
                    <p className="text-lg">Recommendations just for you based on the games you or your friends want and play.</p>
                </div>
                <div className="flex flex-col gap-10">
                    <Gamediscover></Gamediscover>
                    <Gamediscover></Gamediscover>
                    <Gamediscover></Gamediscover>
                    <Gamediscover></Gamediscover>
                    <Gamediscover></Gamediscover>
                    <Gamediscover></Gamediscover>


                </div>
                
            </div>
            
        </>
    )
}