import beerBurger from '../assets/beerBurger.jpg'
import taco from '../assets/taco.jpg'
import tallBurger from '../assets/tallBurger.jpg'


function creatMenuItem(name, price, imgSrc){
    let menuitem = document.createElement('div')
    menuitem.classList.add('menu-item')

    let imgcontainer = document.createElement('div')
    imgcontainer.classList.add('img-container')
    let img = document.createElement('img')
    img.src = imgSrc
    imgcontainer.appendChild(img)
    menuitem.appendChild(imgcontainer)

    let itemInfo = document.createElement('div')
    itemInfo.classList.add('menu-item-info')

    let h2 = document.createElement('h2')
    h2.textContent= name
    itemInfo.appendChild(h2)

    let itemPrice = document.createElement('h3')
    itemPrice.innerText = price
    itemPrice.id = "price"
    itemInfo.appendChild(itemPrice)

    let btn = document.createElement('button')
    btn.classList.add('tab')
    btn.innerText = 'Order now'
    itemInfo.appendChild(btn)

    menuitem.appendChild(itemInfo)
    return menuitem;
}

let menu= [
    {name: "Beer and Burgers", price: "12.34", imgSrc : beerBurger},
    {name: "Tacos and Fries", price: "8.98", imgSrc : taco},
    {name: "Triple Beef", price: "17.45", imgSrc : tallBurger},
]

function creatMenu(){

    let menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')


    menu.forEach(item =>{
        let menuItem = creatMenuItem(item.name,item.price,item.imgSrc)
        menuContainer.appendChild(menuItem)
    })
    return menuContainer
}

export default creatMenu