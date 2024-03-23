

// document.querySelector("a").classList.add("sound");
// document.querySelector(".sound").addEventListener("click", function () {
//     alert("clicked");
//     var audio = new Audio("./sounds/tom-2.mp3");
//     audio.play();;
// });

document.querySelector("a").classList.add("sound");
var numberOfAnchorTag=document.getElementsByTagName('a');
for(let i=0;i<numberOfAnchorTag.length;i++){
    document.querySelectorAll('a')[i].addEventListener("mouseover",function(){
        let pointer = this.innerHTML;
        switch (pointer) {
            case "Home":
                var audio =new Audio("tom-1.mp3");
                audio.play();
                break;
            case "Menu":
                var audio =new Audio("crash.mp3");
                audio.play();
                break;
            case "Login":
                var audio =new Audio("tom-3.mp3");
                audio.play();
                break;
        
            default:
                console.log(this.innerHTML);
                break;
        }
    });
}




// document.querySelector(".sound").addEventListener("click", function (event) {
//     event.preventDefault();
//     var audio1 = new Audio("./sounds/tom-1.mp3");
//     audio1.play();
// });



// document.querySelectorAll("a").forEach(function(element) {
//     element.classList.add("sound");
//     element.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent the default action (i.e., page redirection)
//         var audio1 = new Audio("./sounds/tom-1.mp3");
//         audio1.play();
//         alert("clicked");
//     });
// });


document.querySelector(".w").addEventListener("mouseover",function(){
    var audio=new Audio("snare.mp3");
    audio.play();
});
