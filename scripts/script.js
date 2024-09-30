
const body = document.querySelector("body")
const nav = document.querySelector("nav")
const hamburger = document.querySelector("nav ul li details summary")
const cameraIcon = document.querySelector("header div:nth-of-type(3) svg:nth-of-type(2)")
const meatballDiv = document.querySelector("body > div:first-of-type")

let meatballjingle = new Audio("audio/meatball_parade.mp3")

let hamburgeroff = true
let togglefamilycard = false
let meatballfilter = false

function toggleFixedHeader() {
    const scrollHeight = 300
    
    if (window.scrollY >= scrollHeight) { /*bron: MDN window.scrollY */
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
}

function changesvg(){
    if(hamburgeroff === true){
        hamburger.innerHTML = `<svg viewBox="0 0 24 24" focusable="false" width="24" height="24" aria-hidden="true" class="hnf-svg-icon hnf-btn__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="m12 13.4142 4.9497 4.9497 1.4142-1.4142L13.4142 12l4.9497-4.9498-1.4142-1.4142L12 10.5857 7.0502 5.636 5.636 7.0502 10.5857 12 5.636 16.9497l1.4142 1.4142L12 13.4142z"></path></svg>`
        hamburgeroff = false
    } else{
        hamburger.innerHTML = `<svg viewBox="0 0 24 24" focusable="false" width="24" height="24" aria-hidden="true" class="hnf-svg-icon hnf-btn__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8H4V6h16v2zm0 5H4v-2h16v2zm0 5H4v-2h16v2z"></path></svg>`
        hamburgeroff = true
    } 

}

function meatballs(){
    if(meatballfilter === false){
        meatballDiv.classList.toggle("hidden")
        meatballjingle.play()
        meatballfilter = true
    } else{
        meatballDiv.classList.toggle("hidden")
        meatballfilter = false
        meatballjingle.pause()
    }
    meatballjingle.loop = true
}

window.addEventListener("scroll", toggleFixedHeader);
hamburger.addEventListener("click", changesvg)
cameraIcon.addEventListener("click", meatballs)
meatballDiv.addEventListener("click", meatballs)

const images = document.querySelectorAll("body main > *") /* bron: https://www.youtube.com/watch?v=2IbRtjez6ag */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("test", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    }),
        {
            threshold: 1,
        }

})


images.forEach(image =>{
    observer.observe(image)
})



const pricetag = document.querySelector("main section:nth-of-type(6) ul li button:nth-of-type(2)")
const winkelwagen = document.querySelector("header div nav ul li:nth-of-type(3) svg")
const wagennummer = document.querySelector("header nav ul li:nth-of-type(3) p")


function microInteractie(){
    
    wagennummer.classList.remove("hidden")
    let currentNumber = parseInt(wagennummer.textContent)
    wagennummer.textContent = currentNumber + 1
    winkelwagen.classList.remove("jiggle")
    setTimeout(() => {
        winkelwagen.classList.add("jiggle")
    }, 1)

}

pricetag.addEventListener("click", microInteractie)