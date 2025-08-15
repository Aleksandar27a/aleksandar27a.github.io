const contents = document.querySelectorAll('.content')
const buttons = document.querySelectorAll('.toggle-btn')
const imgSlide = document.querySelectorAll('.img-slide')
const text = document.querySelectorAll('.text')


const slideData = [
    {
        'id':'1',
        'img':'./images/slider-1.png',
        'title':'Bookmark in one click',
        'text':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, reprehenderit!'

    },  {
        'id':'2',
        'img':'./images/slider-2.png',
        'title':'Intelligent Search',
        'text':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, reprehenderit!'

    },  {
        'id':'3',
        'img':'./images/slider-3.png',
        'title':'Share your bookmarks',
        'text':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, reprehenderit!'

    }
]

let data = slideData 
 
 window.addEventListener('DOMContentLoaded',()=>{
    contents[0].classList.add('showing')

    let image = document.createElement('img');
    let title = document.createElement('h2');
    let paragraph = document.createElement('p')
    image.src = data[0].img
    title.textContent = data[0].title
    paragraph.textContent = data[0].text
    imgSlide[0].appendChild(image);
    text[0].appendChild(title) 
    text[0].appendChild(paragraph) 


    buttons.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            contents.forEach((c)=>c.classList.remove('showing'))
            contents[index].classList.add('showing')
            image.src = data[index].img
            title.textContent = data[index].title
            paragraph.textContent = data[index].text
            imgSlide[index].appendChild(image)
            text[index].appendChild(title)
            text[index].appendChild(paragraph)
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




 

                                                    // Hamburger menu

const openBtn = document.getElementById('open-menu-btn');
const closeBtn = document.getElementById('close-btn')
const list = document.querySelector('.list');
 openBtn.style.display = 'block'
 closeBtn.style.display = 'none'
 
closeBtn.addEventListener('click',()=>{
    openBtn.style.display = 'block';
    list.classList.remove('active')
    closeBtn.style.display = 'none'
})
openBtn.addEventListener('click', () => {
     openBtn.style.display = 'none';
     list.classList.add('active')
     closeBtn.style.display = 'block'
});

 
 