import { useState } from 'react'
import InputBox from './Shopping-Cart/input'
import ShoppingList from './Shopping-Cart/ShoppingList';

function App() {
  return (
    <div className='Shopping-Cart'>
      <h1>ShoppingCart</h1>
      {/* <InputBox></InputBox> */}
      <ShoppingList></ShoppingList>
    </div>
  )
}

export default App;
