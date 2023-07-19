function testButtonClick(){
    var side = document.getElementById("sides").value;
    
    if(side > 1){ 
        var r = getRandom(side);
        document.getElementById("result").innerHTML = r;
    }
    else{
        alert("The number of sides must be larger than 1!");
    }
}

function getRandom(a){

    var r = Math.floor(Math.random()*a+1);
    return r;
}