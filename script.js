const body = document.body;
var color = '';
var selector = "rb";
for(var i = 1; i <= 81; i++){
    let box = document.createElement('div');
    box.classList.add('checker');
    body.appendChild(box);
 
    if (i%2 !== 0){
        color = "red";
    }else{
        color = "black";
    }
    box.style.backgroundColor = color;
    var perc = "11.1%";   
    box.style.width = perc;
    box.style.height = "11.1vw";
    box.style.paddingBottem = perc;
    box.style.float = "left";
}
console.log(body);
randomColors();

function randomColors(){
    const randomize = document.querySelectorAll('.checker');
    [].forEach.call(randomize, (e)=>{
        e.style.backgroundColor = "#" + Math.floor(Math.random()*16777215);
       });
}
