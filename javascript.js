let user = 0;
let computer = 0;
//let arrayVal = ['rock','paper','scissor'];
//console.log('start');
function winnerResult(userInput,compResult){
    const winnerUpdate = document.getElementById('result');
	winnerUpdate.textContent =`You won! ${userInput} beats ${compResult}`;
	//const addParaElement = document.querySelector('p');
	//const text = document.createTextNode(`You won! computer selected ${compResult}`)
	//addParaElement.innerText= `You won! computer selected ${compResult}`;
	// addParaElement.setAttribute("id","win");
	// //addIdElement.value = "win";
	// //addParaElement.append(addIdElement);
	// addParaElement.appendChild(text);
	// console.log(addParaElement);
	// document.body.append(addParaElement);
}
function loserResult(userInput,compResult){
	const loserUpdate = document.getElementById('result');
	loserUpdate.textContent =`You lost! ${compResult} beats ${userInput}`;

// 	const addParaElement = document.querySelector('p');
// 	const text = document.createTextNode(`You lost! computer selected ${compResult}`)
// 	addParaElement.setAttribute("id","lost");
// 	addParaElement.appendChild(text);
// 	console.log(addParaElement);
// 	document.body.append(addParaElement);

}
function drawResult(userInput,compResult){
	const drawUpdate = document.getElementById('result');
	drawUpdate.textContent =`Its a draw both selected ${userInput}`;
}
function clickEvent(userInput) {
	let computerInput = arrayVal[Math.floor(Math.random()*arrayVal.length)];
	//console.log(user,computer);
	// const addParaElement = document.createElement('p');
	// document.body.append(addParaElement);

	if(userInput == computerInput){
		drawResult(userInput,computerInput);
		return ;
	}
	if(userInput == 'rock')
	{
		//computerInput == "scissor" ? ++computer:++user;
		if(computerInput == 'paper'){
			++computer;
			loserResult(userInput,computerInput);
			return;
		}
		else{
			++user;
			computerInput = 'scissor';
			winnerResult(userInput,computerInput);
			return;
		}
	}
	if(userInput == 'paper')
	{
		//computerInput == 'rock' ? ++user: ++computer;
		if(computerInput == 'rock'){
			++computer;
			loserResult(userInput,computerInput);
			return ;
		}
		else{
			++user;
			computerInput = 'scissor';
			winnerResult(userInput,computerInput);
			return ;
		}
	}
	if(userInput == 'scissor')
	{
		//computerInput == 'paper' ? ++computer : ++user;
		if(computerInput == 'rock'){
			++computer;
			loserResult(userInput,computerInput);
			return ;
		}
		else{
			++user;
			computerInput = 'paper';
			winnerResult(userInput,computerInput);
			return ;
		}
    }
}
const changeScores = () =>
{
	const userScore= document.getElementById('userVal');
	userScore.textContent = user.toString();
	const compScore = document.getElementById('computerVal');
	compScore.textContent = computer.toString();
};
function checkValue() {
	if(user == 5 || computer == 5) 
	{
		const removeElement = document.getElementById('mainButton');
		removeElement.remove();
		const finalScore = document.getElementById('scores');
		finalScore.textContent = "Final score";
		const addPara = document.createElement('p');
		addPara.textContent = "game over, pls reload to play again";
		document.body.append(addPara);

	}
} 
const button = document.getElementById('rock');
button.addEventListener('click',() => 
	{
		clickEvent('rock');
		changeScores();
		checkValue();
	});
const button1 = document.getElementById('paper');
button1.addEventListener('click',() => 
	{
		clickEvent('paper');
		changeScores();
		checkValue();
	});
const button2 = document.getElementById('scissor');
button2.addEventListener('click',() => 
	{
		clickEvent('scissor');
		changeScores();
		checkValue()
	});
//  button.addEventListener('click', () => {
// 	let firedButton = this.val();
// 	clickEvent(firedButton);
// })
 // const button = document.getElementsByClassName('scoreButton');
 // button[0].addEventListener("click", clickEvent,);
//button[0].onclick = clickEvent(arrayVal[0]);
//changeScores();
// while(user != 5 && computer != 5)
//arrayVal.forEach(i => clickEvent(i));
//console.log(user,computer);