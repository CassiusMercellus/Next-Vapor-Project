import WishlistFilter from '../components/wishlist/wishlistfilter'
import Header from '../../components/header'
import Client from '../../components/client'
import Footer from '../../components/footer'

export default function Wishlist() {
    return (
        <>
            <Client></Client>
            <Header></Header>
            <div className=" bg-gradient-to-b from-slate-950 to-cyan-950 py-8">
                <div className="px-48">
                    <h1 className="text-4xl font-bold my-5">User's Wishlist</h1>
                    <WishlistFilter />

                </div>
                
            </div>
            <Footer></Footer>
            
        </>
    )
}