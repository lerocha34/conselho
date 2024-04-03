let missao = document.getElementById("missao");
let conselho = document.getElementById("conselho");
let overlay = document.getElementById("overlay");
let card = document.getElementById("card-area");
let cardImage = document.getElementById("card-image");
let cardTitle = document.getElementById("card-title");
let cardNumber = document.getElementById("card-number");
let cardAdvice = document.getElementById("card-advice");
let cardClose = document.getElementById("card-close");
let screenWidth = window.innerWidth;

function showOverlay() {
  overlay.style.display = "block";
  setTimeout(() => {
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
  }, 10);
  card.style.display = "block";
  setTimeout(() => {
    if (screenWidth <= 425) {
      card.style.width = "75vw";
      card.style.height = "95vh";
    } else {
      card.style.width = "31.25rem";
      card.style.height = "37.5rem";
    }
  }, 1);

  let sort = Math.floor(Math.random() * (21 - 0 + 1) + 0);
  switch (sort) {
    case 0:
      cardImage.src = arcanes[0].src;
      cardTitle.innerText = arcanes[0].title;
      cardNumber.innerText = arcanes[0].id;
      cardAdvice.innerText = arcanes[0].advc;
      break;
    case 1:
      cardImage.src = arcanes[1].src;
      cardTitle.innerText = arcanes[1].title;
      cardNumber.innerText = arcanes[1].id;
      cardAdvice.innerText = arcanes[1].advc;
      break;
    case 2:
      cardImage.src = arcanes[2].src;
      cardTitle.innerText = arcanes[2].title;
      cardNumber.innerText = arcanes[2].id;
      cardAdvice.innerText = arcanes[2].advc;
      break;
    case 3:
      cardImage.src = arcanes[3].src;
      cardTitle.innerText = arcanes[3].title;
      cardNumber.innerText = arcanes[3].id;
      cardAdvice.innerText = arcanes[3].advc;
      break;
    case 4:
      cardImage.src = arcanes[4].src;
      cardTitle.innerText = arcanes[4].title;
      cardNumber.innerText = arcanes[4].id;
      cardAdvice.innerText = arcanes[4].advc;
      break;
    case 5:
      cardImage.src = arcanes[5].src;
      cardTitle.innerText = arcanes[5].title;
      cardNumber.innerText = arcanes[5].id;
      cardAdvice.innerText = arcanes[5].advc;
      break;
    case 6:
      cardImage.src = arcanes[6].src;
      cardTitle.innerText = arcanes[6].title;
      cardNumber.innerText = arcanes[6].id;
      cardAdvice.innerText = arcanes[6].advc;
      break;
    case 7:
      cardImage.src = arcanes[7].src;
      cardTitle.innerText = arcanes[7].title;
      cardNumber.innerText = arcanes[7].id;
      cardAdvice.innerText = arcanes[7].advc;
      break;
    case 8:
      cardImage.src = arcanes[8].src;
      cardTitle.innerText = arcanes[8].title;
      cardNumber.innerText = arcanes[8].id;
      cardAdvice.innerText = arcanes[8].advc;
      break;
    case 9:
      cardImage.src = arcanes[9].src;
      cardTitle.innerText = arcanes[9].title;
      cardNumber.innerText = arcanes[9].id;
      cardAdvice.innerText = arcanes[9].advc;
      break;
    case 10:
      cardImage.src = arcanes[10].src;
      cardTitle.innerText = arcanes[10].title;
      cardNumber.innerText = arcanes[10].id;
      cardAdvice.innerText = arcanes[10].advc;
      break;
    case 11:
      cardImage.src = arcanes[11].src;
      cardTitle.innerText = arcanes[11].title;
      cardNumber.innerText = arcanes[11].id;
      cardAdvice.innerText = arcanes[11].advc;
      break;
    case 12:
      cardImage.src = arcanes[12].src;
      cardTitle.innerText = arcanes[12].title;
      cardNumber.innerText = arcanes[12].id;
      cardAdvice.innerText = arcanes[12].advc;
      break;
    case 13:
      cardImage.src = arcanes[13].src;
      cardTitle.innerText = arcanes[13].title;
      cardNumber.innerText = arcanes[13].id;
      cardAdvice.innerText = arcanes[13].advc;
      break;
    case 14:
      cardImage.src = arcanes[14].src;
      cardTitle.innerText = arcanes[14].title;
      cardNumber.innerText = arcanes[14].id;
      cardAdvice.innerText = arcanes[14].advc;
      break;
    case 15:
      cardImage.src = arcanes[15].src;
      cardTitle.innerText = arcanes[15].title;
      cardNumber.innerText = arcanes[15].id;
      cardAdvice.innerText = arcanes[15].advc;
      break;
    case 16:
      cardImage.src = arcanes[16].src;
      cardTitle.innerText = arcanes[16].title;
      cardNumber.innerText = arcanes[16].id;
      cardAdvice.innerText = arcanes[16].advc;
      break;
    case 17:
      cardImage.src = arcanes[17].src;
      cardTitle.innerText = arcanes[17].title;
      cardNumber.innerText = arcanes[17].id;
      cardAdvice.innerText = arcanes[17].advc;
      break;
    case 18:
      cardImage.src = arcanes[18].src;
      cardTitle.innerText = arcanes[18].title;
      cardNumber.innerText = arcanes[18].id;
      cardAdvice.innerText = arcanes[18].advc;
      break;
    case 19:
      cardImage.src = arcanes[19].src;
      cardTitle.innerText = arcanes[19].title;
      cardNumber.innerText = arcanes[19].id;
      cardAdvice.innerText = arcanes[19].advc;
      break;
    case 20:
      cardImage.src = arcanes[20].src;
      cardTitle.innerText = arcanes[20].title;
      cardNumber.innerText = arcanes[20].id;
      cardAdvice.innerText = arcanes[20].advc;
      break;
    case 21:
      cardImage.src = arcanes[21].src;
      cardTitle.innerText = arcanes[21].title;
      cardNumber.innerText = arcanes[21].id;
      cardAdvice.innerText = arcanes[21].advc;
      break;
    default:
      break;
  }
}

function offOverlay() {
  overlay.style.width = ".625rem";
  overlay.style.height = ".625rem";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 50);

  card.style.width = ".625rem";
  card.style.height = ".625rem";
  setTimeout(() => {
    card.style.display = "none";
  }, 50);
}

//missao.addEventListener("click", showOverlay);
conselho.addEventListener("click", showOverlay);
overlay.addEventListener("click", offOverlay);
cardClose.addEventListener("click", offOverlay);
