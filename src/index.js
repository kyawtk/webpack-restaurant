import './styles.css'

import creatHome  from "./components/home";
import creatMenu from "./components/menu";
import creatNavbar from "./components/navbar";
import createAbout from './components/about';
let content = document.querySelector("#content")

//creating navbar and adding to the body
let navbar = creatNavbar()
document.body.prepend(navbar)

function addNavEvent(){
    let homebtn = document.getElementById('home')
    let menubtn = document.getElementById('menu')
    let aboutbtn = document.getElementById('about')
    
    homebtn.addEventListener('click', ()=>{
        console.log(creatHome())
        
        content.innerHTML = ""
        content.appendChild(creatHome())
    })
    menubtn.addEventListener('click',()=>{
        content.innerHTML = '';
        content.appendChild(creatMenu());
    } )
    aboutbtn.addEventListener('click', ()=>{
        content.innerHTML = '';
        content.appendChild(createAbout());
    } )
}


addNavEvent()
content.append(creatHome())