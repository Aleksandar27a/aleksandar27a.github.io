const buttons = document.querySelectorAll('.toggle-btn');
const contents = document.querySelectorAll('.content');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Ukloni 'show-content' sa svih sadržaja
        contents.forEach(content => {
            content.parentElement.classList.remove('show-content');
        });

        // Dodaj 'show-content' sadržaju koji odgovara kliknutom dugmetu
        const parentItem = this.parentElement.querySelector('.content');
        if (parentItem) {
            parentItem.parentElement.classList.add('show-content');
        }
    });
});




// Faq

const hiddenAnswer = document.querySelectorAll('.hidden-answer')
const questions = document.querySelectorAll('.question')
const spans = document.querySelectorAll('.span')




questions.forEach((question, index)=>{
    question.addEventListener('click', function(){
        hiddenAnswer.forEach((answer,answerIndex)=>{
            if(index === answerIndex){
                
                answer.classList.toggle('show-answer')
                
            }
            

        })
        spans.forEach((span,spanIndex)=>{
            if(index === spanIndex){
                span.classList.toggle('rotate')
            }
        })
    })
})


document.addEventListener('DOMContentLoaded', () =>{
    const input = document.getElementById('input')
    const noInput = document.querySelector('.no-input')

    function regexInput(str){
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        return regex.test(str)
    }

    function updateDisplay(){
        const inputs = input.value.trim()
        if(inputs === ""){
            noInput.style.display = "block"
            noInput.querySelector('p').textContent = "Your input is empty"
        }else if(!regexInput(inputs)){
            noInput.style.display = "block"
            noInput.querySelector('p').textContent = "Put valid e-mail"
        }else{
            noInput.style.display = "none"
        }
    }

    input.addEventListener('input',updateDisplay)
    updateDisplay();
    
})





 

const openButton = document.querySelector('.hidden-menu');
const closeButton = document.querySelector('.close-menu');
const lista = document.querySelector('.lists');
 
// Kada se klikne na dugme za otvaranje
openButton.addEventListener('click', () => {
    lista.style.display = "block";  
    openButton.style.display = "none"; 
    closeButton.style.display = 'flex';  
     
});

// Funkcija za zatvaranje menija
const closeBtn = () => {
    lista.style.display = "none"; 
    openButton.style.display = "block"; 
    closeButton.style.display = 'none';  
};

// Kada se klikne na dugme za zatvaranje
closeButton.addEventListener('click', closeBtn);


 
































// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.getElementById('input');
//     const noInput = document.querySelector('.no-input');

//     // Funkcija za validaciju email adrese
//     function validEmail(str) {
//         const regex = ;
//         return regex.test(str);
//     }

//     // Funkcija za ažuriranje prikaza poruke
//     function updateDisplay() {
//         const inputs = input.value.trim();  // Uklanjanje belina sa početka i kraja

//         if (inputs === "") {
//             noInput.style.display = "block";
//             noInput.querySelector('p').textContent = "Please enter an email address.";
//         } else if (!validEmail(inputs)) {
//             noInput.style.display = "block";
//             noInput.querySelector('p').textContent = "Whoops, make sure you wrote a valid email.";
//         } else {
//             noInput.style.display = "none";
//         }
//     }

//     // Dodavanje event listener-a za input događaj
//     input.addEventListener('input', updateDisplay);

//     // Pozivanje funkcije odmah prilikom učitavanja stranice
//     updateDisplay();
// });
