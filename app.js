let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let new_game = document.querySelector("#newgame");
let msg_container = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg"); 

let turnO = true;

const winpattern =[[0,1,2],[0,3,6],[0,4,8],
                    [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];



//Reseting Game Condition
const resetgame= ()=>{
    turn0=true;
    enable();
    msg_container.classList.add("hide");
}


//Enabaling Each Boxes
const enable =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
}


//Added Event Listner for each Click On Box
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="red"
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    })
})

//Disabling Each valuing in boc after filling it
const disable =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const showwinner=(winner)=>{
    msg.innerText = `Congrats the Winner is ${winner}`;
    msg_container.classList.remove("hide");
}

const drawgame =()=>{
    msg.innerText=`The Match is Draw`;
    msg_container.classList.remove("hide");
}

let draw=0;

//Function for checking the Winner
const checkwinner =()=>{
    
    for(let pattern of winpattern){
    let pos1= boxes[pattern[0]].innerText;
    let pos2= boxes[pattern[1]].innerText;
    let pos3= boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                disable();
                showwinner(pos1);
            }
            
            if(draw>=9){
                drawgame();
                console.log(draw);
                draw=0;
            }else{
                draw++;
            }

            console.log(draw);
            
        }
    } 
}

new_game.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

