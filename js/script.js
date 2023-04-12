const mario  = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
var reset = document.querySelector("#reset_bt");
var pontuacao = 0;

var x = document.getElementById("t");


const jump = () => {
	mario.classList.add('jump-mario');
	setTimeout(() => {
		mario.classList.remove('jump-mario');
	}, 600);
	
} 

const loop = setInterval(() => {

	const tuboPosition = tubo.offsetLeft;
	
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /*Pega qualquer quaisquer propiedades css do objeto selecionado*/
	//console.log(marioPosition);
	if(tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80){

		tubo.style.animation = 'none';
		tubo.style.left = `${tuboPosition}px`;

		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;

		mario.src = './imagem/game-over.png';
		mario.style.width = '75px';
		mario.style.marginLeft = '50px';
		clearInterval(loop);
		// fim_de_jogo();
		  
		
	}
	
}, 10);

document.addEventListener('keydown', jump);


