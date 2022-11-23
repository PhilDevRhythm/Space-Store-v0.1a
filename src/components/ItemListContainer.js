import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {

  return (



    <>
      <div>
        <div className="row p-5">
          <div className='columns-2 md:flex flex space-x-8 text-center'>
            <div className="card w-200 bg-neutral shadow-x p-5">
              {/* <img src={} style="width:100%;max-width:300px" className="p-3 imageOfTheDay card-img-top img-fluid rounded-start text-bg-dark"></img> */}
              <div className="card-body text-center">
                <h5 className="card-title text-white">Product Name</h5>
                <p className="text-white">Product Number: </p>
                <img className="p-3 imageOfTheDay card-img-top img-fluid rounded-start text-bg-dark" src='https://placeimg.com/300/250/tech'></img>
                <p className="text-white">Price:</p>
                <p className="text-white">Final Price: USD </p>
                <p className="text-white">Full text</p>
                <p className="card-text text-white">Size: L </p>
                <div className="row container-fluid text-center p-5 space-x-4 flex text-white">
                  <ItemCount />
                </div></div></div></div></div></div>


    </>)
}

export default ItemListContainer