let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX==true){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;
        

        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }

    });
});

const gamedraw=()=>{
    msg.innerText='Game was Draw!';
    msgcontainer.classList.remove("hide");
    disableBoxes();
    
}

const resetgame=()=>{
    turnX=true;
    enablebutton();
    msgcontainer.classList.add("hide");
    count=0;
}


const enablebutton=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disablebutton=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};

const showwinner=(winner)=>{
    msg.innerText=`Congratulations!! WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebutton();
};

const checkwinner=()=>{
    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("WINNER!!!!!");
                showwinner(pos1);
                return true;
            }
        }
    }
};


newbtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);