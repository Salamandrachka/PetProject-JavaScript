const tabs = document.querySelector('.tabs-our-service-list');//ul
const tabsContent = document.querySelector('.our-service-list-content'); //ul2

tabs.addEventListener('click', (e) => {
    console.log(e);
    const liTabs = e.target.closest('li');
    const liTabsContent = e.target.closest('li');
    let active = document.querySelector('.active');
   if (active){
    active.classList.remove('active');
    findText(e.target);
   } 
   liTabs.classList.add('active');
   console.log('active');
});

function findText(item){
    for (let i of tabsContent.children){
        if(i.dataset.article === item.dataset.article ){
            i.classList.add('active');
            i.classList.remove('disable');

        }else{
            i.classList.remove('active');
            i.classList.add('disable');
        }
    }
}


const tabsAmazing = document.querySelector('.amazing-tabs');//ul
const tabsContentSecond = document.querySelector('.amazing-content');//ul content
const liTabs = document.querySelectorAll('.amazing-list');
const liTabsContent =  document.querySelectorAll('.card');//li content
const btnLoader = document.querySelector('.btn-amazing')//btn
const loader = document.querySelector('.loader')


tabsAmazing.addEventListener('click', findTab);//li tab
btnLoader.addEventListener('click', workLoader);//workBtn

let arr =Array.from(liTabsContent)
let flag = 12


function findTab(elem){
    let active = document.querySelector('.active');
   if(elem.liTabs !== active){
    liTabs.forEach((e)=>{
        e.classList.remove('active')
        findTextSecond(elem.target)
    })
}
    elem.target.classList.add('active')
   console.log('active');
}

function workLoader(){
    flag = 24
    loader.classList.add('active')
    btnLoader.remove(btnLoader)
    setTimeout(function(){ liTabsContent.forEach((i)=>{
        i.classList.add('active')
        i.classList.remove('disable')
    })
    liTabs.forEach((elem)=>{
        if(elem.dataset.article === 'all'){
            elem.classList.add('active')
        }else{
            elem.classList.remove('active')
        }
        
    })
    loader.classList.remove('active')
    loader.classList.add('disable')
    }, 3000)
}


function remake(){
    if(flag === 12){
        
        arr.splice(12);

    }else if(flag === 24){

        arr= liTabsContent;

    }

    return arr;
}


function findTextSecond(item){
    remake();
    for (let i of arr){
        if(i.dataset.article === item.dataset.article ){
            i.classList.add('active');
            i.classList.remove('disable');
        }
        else if(item.dataset.article === 'all'){
            i.classList.add('active')
            i.classList.remove('disable')
        
        }
        else{
            i.classList.remove('active');
            i.classList.add('disable');
        }
    }
}





