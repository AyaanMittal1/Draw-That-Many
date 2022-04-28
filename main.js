x = 0;
y = 0;
to_number=0;
draw_apple = "";
screen_height=0;
screen_width=0;
apple="";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage("apple.png");
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 function make(){

 }
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number=Number(content);
 if(Number.isInteger(to_number)){
   document.getElementById("status").innerHTML="Started drawing Apples";
   draw_apple="set";
 }
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  createCanvas(screen_width-150,screen_height-150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    for(var i=0; i<to_number; i++){
      x=random(1,1050);
      y=random(1,500);
      tint(random(1,255), random(1,255), random(1,255));
      image(apple,x,y,50,50);
    }
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
