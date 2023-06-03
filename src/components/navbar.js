function createBtn(text,id){
    //create the btn element
    let btn = document.createElement('button')
    btn.setAttribute('id', id)

    //add the text and id of btn 
    let span = document.createElement('span')
    span.innerText = text
    btn.appendChild(span)
    btn.classList.add('tab')



    btn.addEventListener('click', () => {
        // remove active class from all buttons
        document.querySelectorAll('.tab').forEach((button) => {
          button.classList.remove('active');
        });
    
        // add active class to the clicked button
        btn.classList.add('active');
      })

    return btn
}

function creatNavbar(){
    //create the navbar
    let navbar  = document.createElement('div')
    navbar.setAttribute('id','navbar')
    //create the btns
    let homebtn = createBtn('Home', 'home')
    let menubtn = createBtn('Menu', 'menu')
    let aboutbtn = createBtn('About', 'about')
    //add the btns to the navbar
   navbar.appendChild(homebtn)
   navbar.appendChild(menubtn)
   navbar.appendChild(aboutbtn)


    return navbar;
}

export default creatNavbar