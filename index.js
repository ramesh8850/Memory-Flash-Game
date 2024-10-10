//button color

let buttonColors=["red","blue","green","yellow"]

//empty array
 let gamepattern=[]
let userClickedPattern=[]

//section-7
let start=true
let level=0
$(document).on("keypress",function(){
     if(start){
        $("#level-title").text("Level "+level)
        nextSequence()
        $(".btn").show()
        start=false
     }    
})
//random sequence
function nextSequence(){

    userClickedPattern=[]
    //levels
    level++
    $("#level-title").text("Level "+level)

   //random numbers
    let randomNumber=Math.floor(Math.random()*4);
let randomChosenColor=buttonColors[randomNumber]
gamepattern.push(randomChosenColor)

let Id="#"+randomChosenColor
$(Id).fadeOut(100).fadeIn(100)
playSound(randomChosenColor)
}

//section-4

$(".btn").on("click",function(){
    let useChosenColor=$(this).attr("id")
    userClickedPattern.push(useChosenColor)
    playSound(useChosenColor)
    animatePress("#"+useChosenColor) 
    checkAnswer(userClickedPattern.length-1)
})


//section-5

function playSound(name){
    let audio=new Audio("sounds/"+name+".mp3")
    audio.play()
}


//section-6

function animatePress(currentColor){
    $(currentColor).addClass("pressed")

    setTimeout(() => {
        $(currentColor).removeClass("pressed")
    }, 100);
}

//section-8

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamepattern[currentLevel]){
    console.log("success")
  if(userClickedPattern.length===gamepattern.length){
    setTimeout(() => {
     nextSequence()
    },1000)

   }
  }
  else{

    //section-9
     
    $("body").addClass("game-over")

    setTimeout(() => {
        $("body").removeClass("game-over")
        let audio=new Audio("sounds/wrong.mp3")
        audio.play()
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart")
    $(".btn").hide();
    startOver()
  }
}

//section-10

function startOver(){
    level=0
    gamepattern=[]
    start=true
}



