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

function testRandomNum(a){
    console.log("-----test "+a+"-----");

    if(!isNaN(a)){
        if(a > 1){
            for(let i=0; i<a; i++){
                var testNum = getRandom(a);
                if(testNum > a){
                    console.log("getRandom function has a bug.");
                    break;
                }
            }
            console.log("The test is passed!");
        }
        else{
            throw new Error("The input is not a valid number.");
        }
    }
    else{
        throw new Error("The input is not a number.");
    }
}

var t1 = 'Not a number';
var t2 = 1;
var t3 = 0;
var t4 = -1;
var t5 = -100;
var t6 = 3;
var t7 = 20;
var t8 = 100;
var t9 = 1000;

testRandomNum(t9);

