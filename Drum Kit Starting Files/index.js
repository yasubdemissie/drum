
var numberOfDrum = document.querySelectorAll(".drum").length;


for (var x = 0; x < numberOfDrum; x++) {

    document.querySelectorAll(".drum")[x].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeAudio(buttonInnerHTML);
        theButtonPressed(buttonInnerHTML); 
    
    });
    
}

document.addEventListener("keydown", function(event) {
    let letter = event.key;
    makeAudio(letter);
    theButtonPressed(letter);

});

function makeAudio(nam) {
    switch (nam) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default:
            console.log("You pressed a wrong keyboard key",nam);
            break;
    
       }
}

function theButtonPressed (theButton) {
    let buttonPressed = document.querySelector("."+theButton);
    buttonPressed.classList.add("pressed");
    setTimeout(function () {buttonPressed.classList.remove("pressed");}, 80);
}