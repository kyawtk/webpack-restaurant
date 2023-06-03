import '../styles.css'
function createAbout(){
    let about  = document.createElement('div')
    about.classList.add('about')

    let h1 = document.createElement('h1')
    h1.innerHTML = `About us`
    about.appendChild(h1)
    let aboutimg = document.createElement('div')
    aboutimg.classList.add('about-img')
    about.appendChild(aboutimg)

    let aboutinfo = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    h2.innerHTML = `Our story starts with three men.`
    p.innerHTML = `Back in 1954, a man named Ray Kroc discovered a small burger restaurant in California, and wrote the first page of our history. From humble beginnings as a small restaurant, we're proud to have become one of the world's leading food service brands with more than 36,000 restaurants in more than 100 countries.`
    aboutinfo.appendChild(h2)
    aboutinfo.appendChild(p)

    let btn = document.createElement('a')
    btn.innerText  = "Learn more"
    btn.classList.add('tab')
    btn.id = 'learnmore-btn'
    btn.setAttribute('href','https://www.mcdonalds.com/us/en-us/about-us/about-us.html')
    aboutinfo.appendChild(btn)
    about.appendChild(aboutinfo)
    return about;
}

export default createAbout