import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Login from '../Modal/Login'

const Home = () => {

  const [openModal,setModal] = useState<boolean>(false);

  const toggleModal = ()=>{setModal(!openModal)}

  return (
    <>
    <Navbar toggleModal = {toggleModal} />
    <Login toggleModal = {toggleModal} status={openModal} />
    </>
  )
}

export default Home