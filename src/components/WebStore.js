import React, { useState } from 'react'



const WebStore = () => {

    const prodDB = [

        { id: 1, type: "telescope", prodName: "Telescopio Orion", size: "Big", price: 1000, dprice: 780, img: "img/1.jpg", text: "The Orion SkyQuest XT6 classNameic Dobsonian Telescope Kit will open up the night sky for you and your entire family to discover. With excellent light grasp, point-and-view ease of use, and an array of super helpful included accessories, the SkyQuest XT6 classNameic Dobsonian is truly one of the best beginner telescope values on the market today. We've even included some extra accessories in this kit to further enhance your viewing experience." },
        { id: 2, type: "filter", prodName: "Filtro lunar", size: "Pequeño", price: 56, dprice: 46, img: "img/2.jpg", text: "Filtro especial para observacion Lunar" },
        { id: 3, type: "filter", prodName: "Filtro Solar", size: "Pequeño", price: 70, dprice: 59, text: "Filtro especial para observacion Solar" }
    ]

    const productListId = prodDB.map((element) => element.id)
    const productListProdname = prodDB.map((element) => element.prodName)
    const productListSize = prodDB.map((element) => element.size)
    const productListPrice = prodDB.map((element) => element.price)
    const productListDprice = prodDB.map((element) => element.dprice)
    const productListText = prodDB.map((element) => element.text)
    const productListImg = prodDB.map((element) => element.img)
    console.log(productListId);
    console.log(productListProdname);
    console.log(productListPrice);

    
}
export default WebStore 