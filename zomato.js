const accordian=document.querySelectorAll('.accordian');
accordian.forEach(accordian =>{
    const icone=accordian.querySelector('.icone');
    const answer=accordian.querySelector('.answer');

    accordian.addEventListener('click',()=>{
      if(icone.classList.contains('active')){
        icone.classList.remove('active');
        answer.style.maxHeight=null;

      }else{
        icone.classList.add('active');
        answer.style.maxHeight=answer.scrollHeight + 'px';
      }

    })

});

let iconLeft=document.querySelector(".icon");
let iconRight=document.querySelector(".icon1");
let iconLeftBrand=document.querySelector(".brandicon");
let iconRightBrand=document.querySelector(".brandicon1");
let container=document.querySelector(".food-container");
let containerBrand=document.querySelector(".brand-container")

let slidLeft=()=>{
container.scrollLeft-=170;

}

let slidRight=()=>{  
container.scrollLeft+=170;

}
iconLeft.addEventListener("click",slidLeft);
iconRight.addEventListener("click",slidRight)

iconLeftBrand.addEventListener("click",()=>{
  containerBrand.scrollLeft-=165;
})
iconRightBrand.addEventListener("click",()=>{
  containerBrand.scrollLeft+=165;

})

