import Header from './components/header'
import Profile from './profile/profile'
import Client from './components/client'
import Footer from './components/footer'
import Filters from './components/filters'
import Games from './profile/components/games'
import GameCard from './profile/components/gameCard'
import ClientStore from './store/clientstore'
import Store from './store/page'
import Browse from './store/browse'
import Discover from './store/discover'
import Wishlist from './store/wishlist'
import Cart from './store/cart'
import Pointshop from './store/pointshop'

export default function Page() {
  return (
    <>
      <Client></Client>
      <Header></Header>
      <Pointshop></Pointshop>
      <Cart></Cart>
      <Wishlist></Wishlist>
      <Discover></Discover>
      <Browse></Browse>
      <Store></Store>
      <Profile></Profile>
      <ClientStore></ClientStore>
      <Footer></Footer>
    </>
  )
}
