// let p = document.getElementById("pElement")

// p.addEventListener("click", nnn)


// function nnn(){
//     p.innerText = "Click on me!"
// }

// var clickCount = 0;
// function clickHandler(evt){
// clickCount++;
// console.log(evt);
// var str = "Thanks for clicking " + clickCount;
// this.innerText = str;
// }

// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);


// function bodyClick(evt){
//     console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
//     }
    


// window.onclick = bodyClick;


// function mouseClicked() {
//     console.log(mouseX, mouseY);
//     }


function keydown(evt) {
console.log("You printed " + evt.key);

}

window.onkeydown = keydown;


