var score=0;
function yes(){
if(score<5){
    score=score+1;
        console.log(score);
    }

}
function result(){
    if(score==1){
        document.getElementById("div2").innerHTML="<div><h1>99% match with FEVER</h1></div>";
    }

    if(score==2){
        document.getElementById("div2").innerHTML="<div><h1>99% match with common cold</h1></div>";
    }
    if(score==3){
        document.getElementById("div2").innerHTML="<div><h1>99% match with flu</h1></div>";
    }
    if(score==4){
        document.getElementById("div2").innerHTML="<div><h1>99% match with viral</h1></div>";
    }
    if(score==5){
        document.getElementById("div2").innerHTML="<div><h1>99% match with covid</h1></div>";
    }
}