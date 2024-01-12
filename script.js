let time = '00';
let sec = '00';
const styleSheets = document.styleSheets;
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let save = document.querySelector('.save');
let restart = document.querySelector('.resat');
let timeIn = document.querySelector('.second');
let secIn = document.querySelector('.houre');
let lists = document.querySelector('.lists');
let filter = document.querySelector('.filter');
let column = document.querySelector('.column');
let columnReverse = document.querySelector('.column-reverse');
const clearAll = document.querySelector('.clear-all');




const styleSheetsArray = Array.from(styleSheets);
const filterstyle = styleSheetsArray.find((style) =>{
  if(style?.href){
    const pathName = new URL(style.href).pathname.split('/').pop();
    if(pathName === 'style.css'){
      return style;
    }
  }  
})

filter.addEventListener('click',()=>{
lists.classList.toggle('column')


if (filter.textContent == 'latest'){
    filter.textContent = 'oldest';
    
  }
  else{
    filter.textContent = 'latest';

  }

    
})

// console.log(filterstyle.cssRules)


let interval;

start.addEventListener('click',()=>{
    interval = setInterval(startTime,10);
    save.classList.remove('dis');
    stop.classList.remove('dis');
    restart.classList.remove('dis');
    start.classList.add('dis');

  })

stop.addEventListener('click',()=>{
clearInterval(interval);
stop.classList.add('dis');
start.classList.remove('dis');
})

save.addEventListener('click',()=>{
  closeBtn = document.createElement("span");
  closeBtn.classList.add('closebtn');
  closeBtn.innerHTML  = 'x'
  listcreated = document.createElement('li');
  p = document.createElement('p');
  listcreated.classList.add('list')
  p.innerHTML = `${secIn.innerHTML} : ${timeIn.innerHTML}`;
  listcreated.append(p)
  lists.append(listcreated);
  listcreated.append(closeBtn);

  
  var count = lists.childElementCount;  
  if(count >= 2){
      clearAll.style.display = 'flex';
    }
    else{
      clearAll.style.display = 'none';
    
    }
})

clearAll.addEventListener('click',()=>{
  lists.innerHTML = '';
  clearAll.style.display = 'none'
})

lists.addEventListener('click',removelist)
function removelist(e){
  if(e.target.classList.contains('closebtn')){
var li = e.target.parentElement;
lists.removeChild(li)
var count = lists.childElementCount;  
if(count >= 2){
    clearAll.style.display = 'flex';
  }
  else{
    clearAll.style.display = 'none';
  
  }
  }
}

restart.addEventListener('click',()=>{
  clearInterval(interval);
  sec = '00';
    time = '00';
    secIn.innerHTML = sec;
    timeIn.innerHTML = time;

    })


function startTime(){
    time++;
    if (time <= 9){
        timeIn.innerHTML = '0' + time; 
    }
    if(time > 9){
        timeIn.innerHTML = time;
    }
    if(time > 99){
        sec++;
      secIn.innerHTML = '0' + sec;
        time = 0;
      timeIn.innerHTML = '0' + 0;
    }
    if(sec > 9){
      secIn.innerHTML = sec;
    }
}
