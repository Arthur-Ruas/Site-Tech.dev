const observer = new IntersectionObserver((entries) =>{

    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            entry.target.classList.add("showLado");
            entry.target.classList.add("showOutroLado");
        }
        
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsSide = document.querySelectorAll(".hiddenLado");
const hiddenElementsSide2 = document.querySelectorAll(".hiddenOutroLado");
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsSide.forEach((el) => observer.observe(el));
hiddenElementsSide2.forEach((el) => observer.observe(el));