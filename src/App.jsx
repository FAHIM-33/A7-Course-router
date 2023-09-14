import './App.css'
import Cards from './Components/Cards/Cards'
import Sidebar from './Components/Sidebar/Sidebar'
function App() {

  return (
    <>
      <h1 className='text-center font-bold text-3xl mb-8'>Course Registration</h1>
      <section className='flex gap-6'>
        <Cards></Cards>
        <Sidebar></Sidebar>
      </section>
    </>
  )
}

export default App
