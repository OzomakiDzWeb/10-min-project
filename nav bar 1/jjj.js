const slider=document.querySelector('.countainer')
const countainer=document.querySelectorAll('.slide')
document.getElementById('left').addEventListener('mousemove',function(){
     topref()
})
document.getElementById('right').addEventListener('click',function(){
     tonext()
})
let curent=0;
let pref=4;
let next=1;
const topref=()=>{
     if(curent>0){
          toslid(curent-1)
     }else{
          toslid(countainer.length-1)
     }
}
const tonext=()=>{
     if(curent<4){
          toslid(curent+1)
     }else{
          toslid(0)
     }  
}
const toslid=(nember)=>{
     curent=nember
     pref=curent-1
     next=curent+1
     for(let i=0;i<countainer.length;i++){
          countainer[i].classList.remove('active')
          countainer[i].classList.remove('pref')
          countainer[i].classList.remove('next')
     }
     if(next==5){
          next=0
     }
     if(pref==-1){
          pref=4
     }
    countainer[curent].classList.add('active') 
    countainer[pref].classList.add('pref') 
    countainer[next].classList.add('next') 
}