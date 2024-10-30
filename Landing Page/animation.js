const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})




const hiddenElement = document.querySelectorAll('.hidden-first')
hiddenElement.forEach((el)=>observer.observe(el))



const hiddenObserve = new IntersectionObserver((hiddens)=>{
    hiddens.forEach((hidden) =>{
    if(hidden.isIntersecting){
        hidden.target.classList.add('unhidden')
    }else{
        hidden.target.classList.remove('unhidden')
    }
    })
})
const featureElement = document.querySelectorAll('.hidden')
featureElement.forEach((el)=>hiddenObserve.observe(el))