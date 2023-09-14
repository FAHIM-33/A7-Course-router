import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Sidebar from './Components/Sidebar/Sidebar'
function App() {

function toasting(text){
  let elem = document.getElementById('toast')
  elem.innerText = text;
  elem.classList.add('toasted')
  setTimeout(() => {
    elem.classList.remove('toasted')
  }, 1400);
}

  let [course, setCourse] = useState([])
  let [credit, setCredit] = useState(0)
  let [price, setPrice] = useState(0)

  const handleCourse = (card) => {
    let totalTime = card.credit + credit;
    let doesExist = course.find(obj => obj.id === card.id);
    if (totalTime > 20) {
      return toasting('Not enough credit.');
    }
    if (doesExist) {
      return toasting('Course already added.')
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
