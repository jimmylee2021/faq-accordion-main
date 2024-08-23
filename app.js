let faqs = document.querySelectorAll(".faq")
let icons = document.querySelectorAll("#demo")

function Icon() {
    
}

faqs.forEach(faq=> {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active')
    })
})