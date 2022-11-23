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
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Tamaño: L </p>Price: <br></br>Final Price: X USD
                <p> Product Number: </p>
                <p>texto</p>
                <img className="p-3 imageOfTheDay card-img-top img-fluid rounded-start text-bg-dark" src='https://placeimg.com/300/250/tech'></img>
                <div className="row container-fluid text-center p-5 space-x-4 flex">
                  <ItemCount />
                </div></div></div></div></div></div>


    </>)
}

export default ItemListContainer