import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Sidebar from './Components/Sidebar/Sidebar'
function App() {

  let [course, setCourse] = useState([])
  let [credit, setCredit] = useState(0)
  let [price, setPrice] = useState(0)

  const handleCourse = (card) => {
    let totalTime = card.credit + credit;
    let doesExist = course.find(obj => obj.id === card.id);
    if (totalTime > 20) {
      return alert('Exceeding');
    }
    if (doesExist) {
      return alert('Already exists.')
    }
    let newArr = [...course, card]
    setCourse(newArr);
    setPrice(price + card.price)
    setCredit(credit + card.credit)

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
          credit={credit}
          price={price}
        ></Sidebar>
      </section>
    </>
  )
}

export default App
