import Header from './components/header'
import Profile from './profile/profile'
import Client from './components/client'
import Footer from './components/footer'
import Filters from './components/filters'
import Games from './profile/components/games'
import GameCard from './profile/components/gameCard'
import Libraryheader from './components/libraryheader'
import Store from './store/store'
import Library from './library/library'
import Download from './download/download'

export default function Page() {
  return (
    <>
      <Client></Client>
      <Download></Download>
      <Library></Library>
      <Store></Store>
      <Profile></Profile>
      <Footer></Footer>
    </>
  )
}
