
import Nabvar from './components/Navbar'


import MainSection from './Pages/MainSection';

import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';





function App() {


  return (
    <>

      <div className='bg-[#F5F5F5]'>


      <Navbar/>
       
        <MainSection/>
        <Footer/>


    <ToastContainer position='top-center' />

       

      </div>


    </>
  )
}

export default App












