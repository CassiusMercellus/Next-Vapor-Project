import Header from './components/header'
import Profile from './profile/page'
import Client from './components/client'
import Footer from './components/footer'
import Filters from './components/filters'
import Games from './profile/components/games'
import GameCard from './profile/components/gameCard'
import Libraryheader from './components/libraryheader'
import Store from './store/page'
import Library from './library/page'
import Download from './download/page'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Client></Client>
      <Header></Header>
      <Footer></Footer>
    </>
  )
}
