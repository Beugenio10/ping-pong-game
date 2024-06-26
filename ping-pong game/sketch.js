// especificação da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;


//velocidade da bolinha

let velocidadeXbolinha = 5
let velocidadeYbolinha = 5

// variavél raquete

let xRaquete = 5
let yRaquete = 150
let wRaquete = 10
let hRaquete = 90

// variavél oponente

let xRaqueteOponente = 585
let yRaqueteOponente = 150
let wRaqueteOponente = 10
let hRaqueteOponente = 90
let velocidadeYOponente;


//Placar do jogo

let meusPontos = 0
let pontosOponente = 0

// trilha sonora

let raquetada
let ponto

function loadSound(){
  ponto = loadSound ("ponto.mp3")
  raquetada = newAudio ("raquetada.mp3")
}
// erro do oponente

let chanceDeErrar = 0


function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(0,128,0);
  Bolinha ();
  movimentoBolinha ();
  verificaçãoWidth ();
  raquete (xRaquete, yRaquete);
  movimentoRaquete();
  colisaoBolinhaRaquete();
  raqueteOponente() ;
  movimentoRaqueteOponente();
  colisaoBolinhaRaqueteOponente();
  placar();
  marcarPontos();
}

  
function Bolinha(){
circle (xBolinha, yBolinha, diametro)
}

function movimentoBolinha (){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;}

function verificaçãoWidth(){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeXbolinha *= -1}
  
  if (yBolinha + raio > height || 
     yBolinha - raio < 0){
    velocidadeYbolinha *= -1}
}

function raquete(x,y){
  rect(x, y, wRaquete, hRaquete)
}

function raqueteOponente() {
  rect (xRaqueteOponente, yRaqueteOponente, wRaqueteOponente, hRaqueteOponente)
}

function movimentoRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentoRaqueteOponente(){
   velocidadeYOponente = yBolinha - yRaqueteOponente - hRaqueteOponente / 2 - wRaqueteOponente
yRaqueteOponente += velocidadeYOponente 
  
//if (keyIsDown (87)){ yRaqueteOponente -= 10;
                     
  
//if (keyIsDown(83)){ yRaqueteOponente += 10;
                    
}

function colisaoBolinhaRaquete(){
  if (xBolinha - raio < xRaquete + wRaquete 
     && yBolinha - raio < yRaquete + hRaquete 
     && yBolinha + raio > yRaquete){
    velocidadeXbolinha *= -1;
    raquetada.play
  }
}

function colisaoBolinhaRaqueteOponente(){
  if ( xBolinha - raio > xRaqueteOponente - wRaqueteOponente
     && yBolinha + raio < yRaqueteOponente + hRaqueteOponente
     && yBolinha - raio > yRaqueteOponente){
    velocidadeXbolinha *= -1;
  }
}

function placar(){
  textAlign (CENTER)
  textSize (20)
  fill (255,215,0)
  rect (180, 9, 40, 20)
  fill (255)
  text (meusPontos, 200, 26)
  fill (255,215,0)
  rect (380, 9, 40, 20)
  fill (255)
  text (pontosOponente, 400, 26)
}

function marcarPontos(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}