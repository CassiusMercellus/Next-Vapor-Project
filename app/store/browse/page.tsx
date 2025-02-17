import Topcategories from '../components/browse/topcategories';
import Browsesteam from '../components/browse/browsesteam';

export default function Browse() {
    return (
        <>
            <div className="bg-gradient-to-b from-slate-900 to-cyan-950">
                <Topcategories></Topcategories>
                <Browsesteam></Browsesteam>
            </div>
        </>
    )
}