let missao = document.getElementById("missao");
let conselho = document.getElementById('conselho');
let overlay = document.getElementById("overlay");
let card = document.getElementById('card-area');

function showOverlay (){
   overlay.style.display="block";
    setTimeout(()=>{
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
},10)
card.style.display="block"
 setTimeout(()=>{
    card.style.width = "500px";
    card.style.height = "600px";
},1)
}
function offOverlay(){
    overlay.style.width = "10px";
    overlay.style.height = "10px";
    setTimeout(() => {
        overlay.style.display = "none"
    }, 50);

    card.style.width = "10px";
    card.style.height = "10px";
    setTimeout(() => {
        card.style.display = "none"
    }, 50);
}

missao.addEventListener('click',showOverlay);
conselho.addEventListener('click',showOverlay);
overlay.addEventListener('click', offOverlay);
