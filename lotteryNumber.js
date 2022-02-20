let input = document.querySelector("#ticketNumber");
let submitButton = document.querySelector(".submitButton");
let resetButton = document.querySelector(".resetButton");

let number1 = document.querySelector(".numbers1");
let number2 = document.querySelector(".numbers2");
let number3 = document.querySelector(".numbers3");
let number4 = document.querySelector(".numbers4");
let number5 = document.querySelector(".numbers5");
let number6 = document.querySelector(".numbers6");
let number7 = document.querySelector(".numbers7");
let number8 = document.querySelector(".numbers8");

let joker1 = document.querySelector(".joker1");
let joker2 = document.querySelector(".joker2");
let joker3 = document.querySelector(".joker3");
let joker4 = document.querySelector(".joker4");
let joker5 = document.querySelector(".joker5");
let joker6 = document.querySelector(".joker6");
let joker7 = document.querySelector(".joker7");
let joker8 = document.querySelector(".joker8");

let superstar1 = document.querySelector(".superstar1");
let superstar2 = document.querySelector(".superstar2");
let superstar3 = document.querySelector(".superstar3");
let superstar4 = document.querySelector(".superstar4");
let superstar5 = document.querySelector(".superstar5");
let superstar6 = document.querySelector(".superstar6");
let superstar7 = document.querySelector(".superstar7");
let superstar8 = document.querySelector(".superstar8");





function random_number () {

    var altılı =[];
   
    for(var i=0; i<6;i++){
        let a = Math.floor(Math.random() * 90)+1;
        a = String(a).padStart(2,"0");

        if(altılı.indexOf(a) == -1){
            altılı.push(a);
        }else{ i--; }                
     }
    altılı.sort(function(a, b){return a - b});

    while(true){
        let b = Math.floor(Math.random() * 90)+1;
        b = String(b).padStart(2,"0");
        if(altılı.indexOf(b) == -1){
            altılı.push(b);
            break;
        }
    }
    let supstar = Math.floor(Math.random() * 90)+1;
    supstar = String(supstar).padStart(2,"0");
    altılı.push(supstar)
    return altılı;    

}


submitButton.addEventListener("click", () => {
    checkInput(input.value)  
})

resetButton.addEventListener("click", () =>{
    location.reload();
})


function checkInput (numb) {
    numb = Number(numb);
    if(numb>8){
        alert("NUMBER SHOULD BE BETWEEN 1 AND 8")
    }else{

        for(var b=0;b<numb;b++){

    
            if(b==0){
                random_number();
                number1.innerText = random_number().slice(0,6).join("-");
                joker1.innerText = "| "+random_number().slice(6,7)+" |";
                superstar1.innerText = "| "+random_number().slice(7,8)+" |";
            }else if(b==1){
                random_number();
                number2.innerText = random_number().slice(0,6).join("-");
                joker2.innerText = "| "+random_number().slice(6,7)+" |";
                superstar2.innerText = "| "+random_number().slice(7,8)+" |";
            }else if(b==2){
                number3.innerText = random_number().slice(0,6).join("-");
                joker3.innerText = "| "+random_number().slice(6,7)+" |";
                superstar3.innerText = "| "+random_number().slice(7,8)+" |";
            }else if(b==3){
                random_number();
                number4.innerText = random_number().slice(0,6).join("-");
                joker4.innerText = "| "+random_number().slice(6,7)+" |";
                superstar4.innerText = "| "+random_number().slice(7,8)+" |";
            }else if(b==4){
                number5.innerText = random_number().slice(0,6).join("-");
                joker5.innerText = "| "+random_number().slice(6,7)+" |";
                superstar5.innerText = "| "+random_number().slice(7,8)+" |";
            }else if(b==5){
                random_number();
                number6.innerText = random_number().slice(0,6).join("-");
                joker6.innerText = "| "+random_number().slice(6,7)+" |";
                superstar6.innerText = "| "+random_number().slice(7,8)+" |";
            }else if(b==6){
                number7.innerText = random_number().slice(0,6).join("-");
                joker7.innerText = "| "+random_number().slice(6,7)+" |";
                superstar7.innerText = "| "+random_number().slice(7,8)+" |";
            }else if(b==7){
                number8.innerText = random_number().slice(0,6).join("-");
                joker8.innerText = "| "+random_number().slice(6,7)+" |";
                superstar8.innerText = "| "+random_number().slice(7,8)+" |";
            }
        }
    }
    
}