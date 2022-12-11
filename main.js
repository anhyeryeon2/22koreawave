const backtotop = document.getElementById('backtotop');

const checkScroll = () => {
 


  let pageYOffset = window.pageYOffset;

  if(pageYOffset !== 0 ){
    backtotop.classList.add('show');
  }
  else{
     backtotop.classList.remove('show');  
  }
}
const  moverBacktotop=()=>{
  if(window.pageYOffset >0){
    window.scrollTo({top:0, behavior:"smooth"})
  }

}
window.addEventListener('scroll',checkScroll);
backtotop.addEventListener('click',moverBacktotop);


//현재시간 
setInterval(displayNow,1000);
function displayNow(){
  let now = new Date();
  let currentTime=now.toLocaleTimeString();
  document.querySelector("#current").innerHTML =currentTime
}



