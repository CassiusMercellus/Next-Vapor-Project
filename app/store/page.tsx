import Header from '../components/header'
import Client from '../components/client'
import Footer from '../components/footer'
import ClientStore from './clientstore/page'

export default function Store() {
  return (
    <>
      <Client></Client>
      <Header></Header>
      <ClientStore></ClientStore>
      <Footer></Footer>
    </>
  )
}
