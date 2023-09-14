import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Sidebar from './Components/Sidebar/Sidebar'
function App() {

  let [course, setCourse] = useState([])
  let [credit, setCredit] = useState(0)
  let [hour, setHour] = useState(0)


  const handleCourse = (card) => {
    let newArr = [...course, card]
    setCourse(newArr);


    
  }


  
  return (
    <>
      <h1 className='text-center font-bold text-3xl mb-8'>Course Registration</h1>
      <section className='flex gap-6'>
        <Cards
        handleCourse={handleCourse}
        ></Cards>
        <Sidebar
        course={course}
        ></Sidebar>
      </section>
    </>
  )
}

export default App
