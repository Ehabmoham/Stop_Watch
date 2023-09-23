let hourElement = document.querySelector('.hour .num');  
let minuteElement = document.querySelector('.minutes .num');  
let seconedElement = document.querySelector('.seconeds .num');  
let startBtn =  document.querySelector('.btns .start');
let stopBtn =  document.querySelector('.btns .stop');
let resetBtn =  document.querySelector('.btns .reset');

window.onload = resetNums();

function resetNums(){
    hourElement.textContent=  '00';
    minuteElement.textContent=  '00';
    seconedElement.textContent=  '00';
};


startBtn.addEventListener('click' , ()=>{

    let interval = setInterval(()=>{

        seconedElement.textContent =  Number(seconedElement.innerHTML) < 10 ? '0' + (Number(seconedElement.innerHTML) + 1) : Number(seconedElement.innerHTML) + 1;
        if(Number(seconedElement.innerHTML) < 10){
            console.log(Number(seconedElement.innerHTML))
        }

        if(Number(seconedElement.innerHTML) === 60){

            minuteElement.textContent =  Number(minuteElement.innerHTML) < 10 ? `0${Number(minuteElement.innerHTML) + 1}`: Number(minuteElement.innerHTML) + 1;
            seconedElement.innerHTML =  Number(seconedElement.innerHTML) - 60 ;

            if(Number(minuteElement.innerHTML) === 60){

                hourElement.textContent =  Number(hourElement.innerHTML) < 10 ? `0${Number(hourElement.innerHTML) + 1}`: Number(hourElement.innerHTML) + 1;
                minuteElement.innerHTML = Number(minuteElement.innerHTML) - 60;
            };
        };

    }, 1000);



    stopBtn.addEventListener('click'  , function(){
        clearInterval(interval);
    });

    resetBtn.addEventListener('click'  , function(){
        clearInterval(interval);
        resetNums();
    });
});