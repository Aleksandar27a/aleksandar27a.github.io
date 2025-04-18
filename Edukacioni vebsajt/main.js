// promena boje navigacije kad skrolujes

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// prikazivanje/sakrivanje faq odgovora

const pitanja = document.querySelectorAll('.faq')
pitanja.forEach(pitanje =>{
    pitanje.addEventListener('click',()=>{
        pitanje.classList.toggle('open')
        const ikonica = pitanje.querySelector('.faq__icon i')
        if(ikonica.className=== 'fa-solid fa-plus'){
            ikonica.className = "fa-solid fa-minus"
        }else{
            ikonica.className = "fa-solid fa-plus"
        }
    })
})

const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
})
const closeNav = () =>{
        menu.style.display = "none";
        closeBtn.style.display = "none";
        openBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)