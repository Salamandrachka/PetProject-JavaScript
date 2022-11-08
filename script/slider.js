const eachPerson = document.querySelectorAll('.person')//ul person
const mainHeadshot = document.querySelector('.headshot')//ul picture  
const smallHeadshots = document.querySelectorAll('.small-headshot') //small pic
const smallSlider = document.querySelector('.small-slider')//ul small pic 
const beforeBtn = document.querySelector('.before')//prevBtn
const afterBtn = document.querySelector('.after')//nextBtn

smallSlider.addEventListener('click', choosePerson)
beforeBtn.addEventListener('click', beforeSlide)
afterBtn.addEventListener('click', afterSlide)

let index = 0;

function afterSlide(){
    showSlides(index += 1)
}
function beforeSlide(){
    showSlides(index -= 1)
}

function showSlides(n){
    let i;
    if(n >= eachPerson.length){
        index = 0;
        
    }
    if(n < 0){
        index = 3
    }
    for(i = 0; i <  smallHeadshots.length; i++){
        eachPerson[i].classList.remove('active')
    }
    for(i = 0; i <  smallHeadshots.length; i++){
        smallHeadshots[i].classList.remove('active')
    }
    eachPerson[index].classList.add('active')
    smallHeadshots[index].classList.add('active')
}

function choosePerson(elem){
    let active = document.querySelector('.active');

    if(elem. smallHeadshots !== active && elem.target.dataset.article){
        smallHeadshots.forEach((e)=>{
            e.classList.remove('active')
            findPerson(elem.target) 
        })
        const arr = Array.from(smallHeadshots)
    let currentTarget = elem.target
    index = arr.indexOf(currentTarget) 
    }
    elem.target.classList.add('active') 
          
}
function findPerson(item){
    for(let i of mainHeadshot.children){
        if(i.dataset.article === item.dataset.article){
            i.classList.add('active')
            
        }else{
            i.classList.remove('active')
            
        }
    }
}


