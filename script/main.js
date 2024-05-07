// Random Number Function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player_score=0; // Player Score
var computer_score=0; // Computer Score

const player = document.getElementById("player");
player.addEventListener("click",(e)=>{
    e.preventDefault();

    const paper= document.getElementById("paper"); // Player Paper
    const scissor= document.getElementById("scissor"); // Player Scissor
    const rock= document.getElementById("rock"); // Player Rock

    const randomNumber = getRandomNumber(1, 3); // Random From 1 To 3

    const imgpc=document.getElementById("comp"); // Player Image Choice
    const pctex=document.getElementById("pctex"); // Player TEXT Choice

    const score=document.getElementById("score"); // Show Text Of Score
    const winner=document.getElementById("winner"); // Show Who Winner

    const note =document.getElementById("note"); //Show No Option

    // Set Imagec& Text Of Computer Choice Of RPS
    if (paper.checked || rock.checked || scissor.checked){
        switch(randomNumber) {
            case 1:
                imgpc.src=".././assets/images/paper.png";
                pctex.innerText="Computer - Paper";
            break;
            case 2:
                imgpc.src=".././assets/images/scissor.png";
                pctex.innerText="Computer - Scissor";
            break;
            case 3:
                imgpc.src=".././assets/images/rock.png";
                pctex.innerText="Computer - Rock";
            break;
        }
        note.innerHTML="";
        player.value="Play Again";
    }

    // Logic Of Game | Player Set Choice
    if(paper.checked){
        if(randomNumber==1){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            computer_score++;
            player_score++;
        } else if(randomNumber==2){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            computer_score++;
        } else if(randomNumber==3){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            player_score++;
        }
    } else if (scissor.checked) {
        if(randomNumber==2){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            computer_score++;
            player_score++;
        } else if(randomNumber==3){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            computer_score++;
        } else if(randomNumber==1){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            player_score++;
        }
    } else if (rock.checked){
        if(randomNumber==3){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            computer_score++;
            player_score++;
        } else if(randomNumber==1){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            computer_score++;
        } else if(randomNumber==2){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            player_score++;
        }
    } else if(!(paper.checked) && !(rock.checked) && !(scissor.checked)){
        note.innerHTML="*Please Select The Option";
        imgpc.src=".././assets/images/Question Mark.png";
        winner.innerText="Who Will Win??";
        winner.classList="";
    }
    score.innerText=`Computer: ${computer_score} | Player: ${player_score}`;
    rock.checked=false;
    scissor.checked=false;
    paper.checked=false;
});
