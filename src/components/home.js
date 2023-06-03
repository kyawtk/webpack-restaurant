import burger from '../assets/burger.png'

function creatHome(){
    let burgerimg = document.createElement('img')
    burgerimg.src = burger;

    let showcase = document.createElement('div')
    showcase.classList.add('showcase')

    let imgcontainer = document.createElement('div')
    imgcontainer.classList.add('img-container')
    imgcontainer.appendChild(burgerimg)
    showcase.appendChild(imgcontainer)

    let main = document.createElement('div')
    main.classList.add('main')

    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    h1.innerHTML = `Taste the mouth watering <span class='cheese-color'> Cheesy Meaty</span>burger`
    p.innerHTML = "Made from the richese and creamies full cream milk, can't wait to take a bite."
    main.appendChild(h1)
    main.appendChild(p)
    showcase.appendChild(main)

    console.log('comeing fromh home')
    return showcase
}



export default creatHome