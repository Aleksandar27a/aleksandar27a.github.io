document.addEventListener('DOMContentLoaded',function(){
    const contents = document.querySelectorAll('.content')
    contents.forEach(content=>{
        content.classList.remove('show')
    })
    const toggleBtn = document.querySelectorAll('.toggle-btn')
    toggleBtn.forEach((btn,index)=>{
        btn.addEventListener('click', function(){
            contents.forEach(content=>{
                content.classList.remove('show')
            })
             contents[index].classList.add('show')
        })
    })
})

//                                              FAQ


 

 const questions = document.querySelectorAll('.question')
 const answers = document.querySelectorAll('.answer')

 questions.forEach((question,index)=>{
    question.addEventListener('click', function(){
        const indexAnswer = answers[index]
        indexAnswer.classList.toggle('show-answer')
    })
    answers[index].addEventListener('click', function(){
        this.classList.toggle('show-answer')
    })
 })




                                                    // Input

const input = document.getElementById('input')
const button = document.querySelector('.click')
const warning = document.querySelector('.warning')
const p = document.querySelector('.paragraph')
 
button.addEventListener('click', function(){
    if(input.value === ""){
        warning.style.display = 'block'
    }else if(regexInput(input.value)){
        warning.style.display = 'none'
    }else{
        warning.style.display = 'block'
        p.textContent = 'Invalid Input'

    }
})


function regexInput(e){
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(e)
}


                                                    // Hamburger menu

const openBtn = document.getElementById('open-menu-btn');
const list = document.querySelector('.list');
let openList = false;

function isOpened() {
    if (!openList) {
        list.style.display = 'flex';
        openList = true; 
    } else {
        list.style.display = 'none';
        openList = false; 
    }
}

openBtn.addEventListener('click', () => {
    isOpened();
});

 
 