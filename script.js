// Reveal Animation
function reveal(){
    let reveals=document.querySelectorAll(".reveal");
    reveals.forEach(element=>{
        let windowHeight=window.innerHeight;
        let elementTop=element.getBoundingClientRect().top;
        let visible=100;
        if(elementTop<windowHeight-visible){
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll",reveal);
reveal();

// Counter Animation
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
    counter.innerText="0";
    const updateCounter=()=>{
        const target=+counter.getAttribute("data-target");
        const current=+counter.innerText;
        const increment=target/200;
        if(current<target){
            counter.innerText=`${Math.ceil(current+increment)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerText=target;
        }
    };
    updateCounter();
});

// Load Download Count
let savedCount = localStorage.getItem("downloads");
if(savedCount){
    document.getElementById("downloadCount").innerText = savedCount;
}
