let initialPoint=20;
let highestPoint=null
let randomPoint=getRandomPoint(20)

function getRandomPoint(max){
    return parseInt(Math.random()*max)
}
console.log(randomPoint);

function guessMatch(){
    let inputPoint=document.getElementById('guessId').value ;
    console.log(inputPoint);
    if(initialPoint!==0){
        if(inputPoint>randomPoint){
            document.querySelector('.message').innerText='Please guess a low digit number to get a match !!'
            initialPoint--;
            document.querySelector('.score').innerText=initialPoint;
        }
        else if(inputPoint<randomPoint){
            document.querySelector('.message').innerText='Please guess a high digit number to get a match !!'
            initialPoint--;
            document.querySelector('.score').innerText=initialPoint;
        }
        else{
            document.querySelector('.message').innerText='Hurray!! YOU WON'
            document.querySelector('body').style.backgroundColor = "green"
            document.querySelector('.number').innerHTML=inputPoint;
            initialPoint--;
            document.querySelector('.score').innerText=initialPoint;
        }
    }
}

function reloadgame(){
    window.location.reload();
}