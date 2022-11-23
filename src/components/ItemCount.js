import React, { useState } from 'react'



function ItemCount() {

    let stock = 5
    
    const [count, setCount] = useState(0)

    const clickHandlerUp = () => {
        if (count >= stock) {
          return
        }
        setCount( count + 1)

        
        // count = count + 1 
    }
    const clickHandlerDown = () => {
        if (count == 0) {
            return  }
        setCount( count - 1)
        // count = count + 1 
    }

  return (
    <div className='card bg-black p-1 flex flex-row text-center space-x-2 bg-white'>
        <button onClick={clickHandlerUp} className='btn btn-dark '>+</button>
        <button className='btn btn-dark hover'>Add<strong className='text-xl p-2'>{count}</strong> to Cart </button>
        <button onClick={clickHandlerDown} className='btn btn-dark'>-</button>
       
        </div>
  )
}

export default ItemCount

