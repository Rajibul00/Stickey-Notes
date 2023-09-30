let container = document.querySelector('.container');
let inputdiv= document.querySelector('.inputdiv');
let inputBox = document.querySelector('textarea');
let bgc = ['red','blue,','green','brown','black','orange','aqua','pink','violet'];



function createnote(){

    inputdiv.style.transform ='scale(1)';
    document.querySelector('textarea').focus()
    
    }
let okfnc=()=>{
 if(inputBox.value!=''){
    let div = document.createElement('div');
div.className = 'colorfuldivs';
for(i=0;i<bgc.length;i++){
    let bgc2 = Math.floor(Math.random()*bgc.length);
    div.style.backgroundColor = bgc[bgc2]
}
for(i=-5;i<=5;i++){
    let bgc3 = Math.floor(Math.random()*6);
    div.style.transform = `rotate(${bgc3}deg)`;
}


    container.appendChild(div);
    div.innerText = inputBox.value;
    inputBox.value = ''
    inputdiv.style.transform = 'scale(0)';

 }

}
let deletefnc=()=>{
    inputdiv.style.transform  ='scale(0)';
}
document.addEventListener('keydown',function(val){
    if(val.key =='Enter'){
        okfnc()
    }
})
