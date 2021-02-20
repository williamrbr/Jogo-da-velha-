const player1 = "x";
const player2 = "o";
var playTime = player1;
var gameOver = false;


atualizaMostrador();
inicializarEspacos();


function atualizaMostrador(){
  if (gameOver)  {return;}

  if (playTime == player1){

  var player = document.querySelectorAll("div#mostrador img")[0];
  player.setAttribute("src", "imagens/x.png");
  }else{

    var player = document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute("src", "imagens/bola.png");

  }
 }
 function inicializaEspacos(){

var espacos = document.getElementsByClassName("espacos")
for (var i = 0; i < espacos.length; i ++){

espacos [i].addEventListener("click", function(){
if (gameOver) {return;} 
if(this.getElementsByClassName("img").length ==0){


  if (playTime == player1){

    this.innerHtml = ""
  }
}

}

}

 }