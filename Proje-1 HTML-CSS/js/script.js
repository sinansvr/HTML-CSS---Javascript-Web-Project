// responsive nav menu

const navMenu=()=>{
    const navbarToggler=document.querySelector(".navbar-toggler");
    const navList = document.querySelector(".nav-list");

    navbarToggler.addEventListener("click",()=>{
        navList.classList.toggle("nav-active");
        navbarToggler.classList.toggle("toggle");
    })


}

navMenu();

// services slider

// Bu kod, web sayfasındaki hizmetler slayt gösterisini yönetmek için JavaScript kodudur.
// Bu kodun çalışması için HTML kodunda "services-slider" adlı bir div, "arrow-left" ve "arrow-right" adlı iki id'li element vardır.
// Kod, "click" olay dinleyicisini kullanarak, kullanıcının "arrow-left" veya "arrow-right" elementlerine tıkladığını algılar. Eğer kullanıcı "arrow-left" elementine tıklarsa, servicesAll.lastElementChild öğesini servicesAll.insertAdjacentElement("afterbegin", lastChild) metodu kullanarak, servicesAll'ın başına ekler. Eğer kullanıcı "arrow-right" elementine tıklarsa, servicesAll.firstElementChild öğesini servicesAll.insertAdjacentElement("beforeend", firstChild) metodu kullanarak, servicesAll'ın sonuna ekler. Bu işlemler slayt gösterisini sağa veya sola kaydırır.


const servicesChange=()=>{
    let firstChild, lastChild;
    const arrowLeft=document.querySelector("#arrow-left");
    const arrowRight=document.querySelector("#arrow-right");
    const servicesAll = document.querySelector("#services-slider");

    document.addEventListener("click", (event)=>{
        if (event.target===arrowLeft){
            lastChild=servicesAll.lastElementChild;
            servicesAll.insertAdjacentElement("afterbegin",lastChild)
        }else if(event.target===arrowRight){
            firstChild=servicesAll.firstElementChild;
            servicesAll.insertAdjacentElement("beforeend",firstChild)
        }
    })

   
}

servicesChange();
// scroll reveal animations

ScrollReveal().reveal(".ani-left",{
    origin:"left",
    distance:"10rem",
    duration:1000,
    easing:"ease-in"
});

ScrollReveal().reveal(".ani-right",{
    origin:"right",
    distance:"10rem",
    duration:1000,
    easing:"ease-in"
});

ScrollReveal().reveal(".ani-bottom",{
    origin:"bottom",
    distance:"10rem",
    duration:1000,
    easing:"ease-in"
});

ScrollReveal().reveal(".ani-fade-up",{
    opacity:0,
    easing:"ease-in"
});

ScrollReveal().reveal(".ani-delay",{
    delay:500
});

ScrollReveal().reveal(".ani-delay-2",{
    delay:1000
});

