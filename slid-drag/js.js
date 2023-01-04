const countiner=document.querySelector('.countiner')
const cards=document.querySelector('.cards')
let presDown=false,
cursorXspace;

countiner.addEventListener('mousedown',(e)=>{
  presDown = true;
  countiner.style.cursor='grabbing'
  cursorXspace = e.offsetX - cards.offsetLeft
  
})
 

countiner.addEventListener('mousemove',(e)=>{
  if(!presDown) return;
  e.preventDefault();
  cards.style.left=`${e.offsetX - cursorXspace }px`
console.log(e.offsetX)
 responsif();
})
function responsif (){
  const count_boun=countiner.getBoundingClientRect()
  const card_boun=cards.getBoundingClientRect()
  if(parseInt(cards.style.left)>0){
    cards.style.left=0
  }else if(card_boun.right < count_boun.right){
    cards.style.left= `-${card_boun.width - count_boun.width}px`
  }
}
window.addEventListener('mouseup',(e)=>{
presDown=false;
countiner.style.cursor='grab'

})