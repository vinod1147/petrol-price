var price = document.querySelector(".price");

let priceOfPetrol = 1;

setInterval(() => {
    if (priceOfPetrol < 102.58) {
        priceOfPetrol++;
        price.innerText = priceOfPetrol;
    }
}, 100);