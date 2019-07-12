import React, { useState } from 'react'
import Transition from './react-transition'

const App = () => {
  let [count, setCount] = useState(1)
  const next = () => setCount(count = count === 3 ? 1 : count + 1)

  return (
    <section className='container'>
      <div>
        <Transition classNames='fade' timeout={500} key="1">
          <Transition.Box in={count === 1}>
            <div className='block block--pink'>1</div>
          </Transition.Box>
          <Transition.Box in={count === 2}>
            <div className='block block--orange'>2</div>
          </Transition.Box>
          <Transition.Box in={count === 3}>
            <div className='block block--lightgreen'>3</div>
          </Transition.Box>
        </Transition>
      </div>
      <button onClick={next}>Next {count}</button>
    </section>
  )
}

export default App
