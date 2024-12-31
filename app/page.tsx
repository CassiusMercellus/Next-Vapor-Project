import Header from './components/header'
import Profile from './profile/profile'
import Client from './components/client'
import Footer from './components/footer'
import Filters from './components/filters'
import Games from './profile/components/games'
import GameCard from './profile/components/gameCard'

export default function Page() {
  return (
    <>
      <Client></Client>
      <Header></Header>
      <Profile></Profile>
      
      <Footer></Footer>
    </>
  )
}
