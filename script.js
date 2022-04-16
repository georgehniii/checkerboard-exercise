const body = document.body;
var color = '';
var selector = "rb";
for(var i = 1; i <= 81; i++){
    let box = document.createElement('div');
    box.classList.add('checker');
    body.appendChild(box);
    
    if (i%2 !== 0){
        color = "red"
    }else{
        color = "black";
    }
    box.style.backgroundColor = color;
    //box.style.opacity = "0.5";
    var perc = "11.1%";   
    box.style.width = perc;
    box.style.height = "11.1vw";
    box.style.paddingBottem = perc;
    box.style.float = "left";
}
//randomColors();
gradient();
//var aud = new Audio('audio_file.wav');
//body.appendChild(aud);
//aud.play();
//setInterval(flashing,550);


function randomColors(){
    const randomize = document.querySelectorAll('.checker');
    [].forEach.call(randomize, (e)=>{
        e.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
       });
}

function gradient(){
    const grad = document.querySelectorAll('.checker');
    var r = 250;
    var g = 0;
    var b = 0;
    var howGrad = 250/grad.length;
    for(var i = 0; i < grad.length; i++){
        if(i%2 !== 0){
            var col = `rgb(${r},${g},${b})`;
            grad[i].style.backgroundColor = col;
            r-=howGrad;
        }else{
            var rr = r;
            r = 0;
            b+=howGrad;
            g+=howGrad;
            var col = `rgb(${r},${g},${b})`;
            grad[i].style.backgroundColor = col;
            r=rr;
        }
    }
    //body.style.background ='linear-gradient(135deg, blue, yellow)';
    
}

function flashing(){
    setTimeout(gradient, 250);
    setTimeout(randomColors, 500);
}

function audio(){
    var audio = new Audio('audio_file.wav');
    return audio.play();
}
