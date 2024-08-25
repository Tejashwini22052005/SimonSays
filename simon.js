let gameSequence=[];
let userSequence=[];
let btns=["red","orange","blue","purple"];
let h3=document.querySelector("h3");
let start=false;
let level=0;
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game startted");
        start=true;
        levelUp();
    }
});
function gameFlash(box){
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash");
    },250);
}
function userFlash(box){
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash");
    },250);
}
function levelUp(){
    userSequence=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(gameSequence[idx]===userSequence[idx]){
        if(gameSequence.length===userSequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userSequence.push(usercolor);
    checkAns(userSequence.length-1);
}
let allBox=document.querySelectorAll(".box");
for(box of allBox){
    box.addEventListener("click",btnPress);
}
function reset(){
    start=false;
    userSequence=[];
    gameSequence=[];
    level=0;

}
