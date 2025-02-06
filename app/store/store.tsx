import Header from '../components/header'
import Client from '../components/client'
import Footer from '../components/footer'
import Filters from '../components/filters'
import ClientStore from './pages/clientstore'
import Storepage from './pages/page'
import Browse from './pages/browse'
import Discover from './pages/discover'
import Wishlist from './pages/wishlist'
import Cart from './pages/cart'
import Pointshop from './pages/pointshop'
import Libraryheader from '../components/libraryheader'

export default function Store() {
  return (
    <>
      <ClientStore></ClientStore>
    </>
  )
}
