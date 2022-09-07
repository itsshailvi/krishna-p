import React, { useState } from 'react'

function Home() {
  const [click, setClick] = useState(false)
  // const onClickHandler = () =>{
  //   setClick(true)
  // }
  return (
    <div>
      <h1>Home</h1>
      <button onClick= {()=> setClick(true) }>Click Me</button>
      {click && <h3>button Clicked</h3>}
    </div>
  )
}

export default Home