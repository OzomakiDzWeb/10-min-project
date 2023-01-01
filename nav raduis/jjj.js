const menu=document.querySelector('.menu')
const li=document.querySelectorAll('.man .li')
const bobo=document.querySelector('.bobo')
menu.addEventListener('click',()=>{
     menu.classList.toggle('click')
     if(menu.classList=='menu click'){
          li[0].style.transform='translate(50px,-50px)'
          li[1].style.transform='translate(-50px,50px)'
          li[2].style.transform='translate(-70px,0px)'
          li[3].style.transform='translate(0px,-70px)'
          li[4].style.transform='translate(-50px,-50px)'
          li[5].style.transform='translate(0px,70px)'
          li[6].style.transform='translate(50px,50px)'
          li[7].style.transform='translate(70px,0px)'
          bobo.style.display='none'
          
     }else{
          li.forEach((e)=>{
               e.style.transform='translate(0px,0px)'
               bobo.style.display='flex'
          })
     }
})
console.log(li)


