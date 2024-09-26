
const body = document.querySelector("body")
const nav = document.querySelector("nav")
const hamburger = document.querySelector("nav ul li details summary")
const familycardbutton = document.querySelector("aside section div button")
const familycard = document.querySelector("aside section")

let hamburgeroff = true
let togglefamilycard = false

function toggleFixedHeader() {
    const scrollHeight = 100
    
    if (window.scrollY >= scrollHeight) {
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

function popup(){
    if( togglefamilycard === false){
        familycard.classList.add("popup")
        body.classList.add("static")
        togglefamilycard = true
    } else{
        familycard.classList.remove("popup")
        body.classList.remove("static")
        togglefamilycard = false

    }
}


window.addEventListener("scroll", toggleFixedHeader);
hamburger.addEventListener("click", changesvg)
familycardbutton.addEventListener("click", popup)


