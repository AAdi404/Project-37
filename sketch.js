var canvas,backgroundImage;
var gameState=0;
var contestantCount;
var allContestants;
var answer;
var database;
var bg1,bg2,bg3;
var question,contestant,quiz;
function preload(){
bg1=loadImage("background1.png");
bg2=loadImage("background2.png");
}
function setup(){
canvas=createCanvas(850,400);
database=firebase.database();
quiz=new Quiz();
quiz.getState();
quiz.start();
}
function draw(){
background(bg1);
if(contestantCount===4){
quiz.update(1);
}
if(gameState===1){
clear();
quiz.play();
}
}