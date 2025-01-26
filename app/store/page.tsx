
import GameMain from './components/storepage/gamemain';
import Expansion from './components/storepage/expansions';
import About from './components/storepage/about';
import Requirements from './components/storepage/requirements'
import Similar from './components/storepage/similar';
import Reviews from './components/storepage/reviews';
import GameFeatures from './components/storepage/gameFeatures';
import Languages from './components/storepage/languages';
import Links from './components/storepage/links';
import Achievements from './components/storepage/achievements';
import Pointshop from './components/storepage/pointshop';


export default function Store() {
    return (
        <>
            <div className="px-48 bg-gradient-to-b from-slate-950 to-slate-900 py-8">
                <GameMain></GameMain>
                <div className="flex gap-3">
                    <div className="w-2/3">
                        <Expansion></Expansion>
                        <About></About>
                        <Requirements></Requirements>
                        <Similar></Similar>
                    </div>
                    <div className="w-1/3">
                        <GameFeatures></GameFeatures>
                        <Languages></Languages>
                        <Achievements></Achievements>
                        <Pointshop></Pointshop>
                        <Links></Links>
                    </div>
                </div>
                <Reviews></Reviews>
            </div>
        </>
    )
}