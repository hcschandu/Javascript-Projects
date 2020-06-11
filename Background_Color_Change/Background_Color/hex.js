const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// # _ _ _ _ _
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += hexList[gertRandomNumber()]
    }
    color.textContent= hexColor;
    document.body.style.backgroundColor = hexColor;
});

function gertRandomNumber(){
    return Math.floor( Math.random() * hexList.length );
}