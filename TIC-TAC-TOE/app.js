let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let winnerMsg=document.querySelector("#winner")
let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
   
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
        box.innerText="X";
        turn0=false;
        checkWinner();
        }
        else{
          box.innerText="O";  
          turn0=true;
          checkWinner();
        }
        box.disabled = true; 
        
    });
    reset.addEventListener("click",()=>{
        box.innerText="";
        winner.innerText="";
        box.disabled = false; 
    })
});

function checkWinner() {
  for (let pattern of winpatterns) {
    let [a, b, c] = pattern;
    if (
      boxes[a].innerText !== "" &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      showWinner(boxes[a].innerText);
      disableAll();
      return;
    }
  }
}
function showWinner(winner) {
  winnerMsg.innerText = `🎉 Winner: ${winner}`;
}
function disableAll() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}
