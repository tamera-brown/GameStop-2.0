console.log("load");
let totalCost = 0;
let cartGame = 0;
function AddtoCart() {
    var x = document.getElementById("cart");
    if (x.style.display === "none") {
        x.style.display = "block";
    }

    console.log(event.target);
    let name = event.target.getAttribute("data-name");
    console.log(name);
    let price = parseInt(event.target.getAttribute("data-price"));
    console.log(price);
    let game = {
        Name: name,
        price: price
    }
    console.log(game);
    totalCost += price;
    createList(game);
};

function createList(game) {
    cartGame++; 
    let root = document.getElementById("CustomerCart")

    // Shopping List Game 
    let li = document.createElement("p");
    li.setAttribute("class", "gameList");
    li.setAttribute("id", "cartGame" + cartGame)
    li.textContent = `${game.Name}  $${game.price}`
    root.appendChild(li);

    // remove Game Button 
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "removeButton");
    button.setAttribute("id", "cartGame" + cartGame);
    button.setAttribute("data-name", game.Name);
    button.setAttribute("data-price", game.price);
    button.setAttribute("onclick", "removeGame()");
    button.textContent = "X";
    li.appendChild(button);

    // Total Cost
    let x = document.getElementById("totalCost");
    li.setAttribute("class", "totalCost")
    x.textContent = "Total Cost: $" + totalCost;
}

function removeGame () {
    console.log(event.target);

    // Remove Price
    removePrice = event.target.getAttribute("data-price");
    let x = document.getElementById("totalCost");
    totalCost = totalCost-removePrice;
    x.textContent = "Total Cost: $" + totalCost;

    // Remove Button and Game
    let elementID = event.target.getAttribute("id")
    let element = document.getElementById(elementID);
    element.parentNode.removeChild(element);
}