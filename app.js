const tg = window.Telegram.WebApp;
tg.expand();

let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(item + " added to cart!");
}

document.getElementById("checkoutBtn").onclick = () => {
  const data = {
    items: cart,
    user: tg.initDataUnsafe.user
  };

  // Send data back to bot
  tg.sendData(JSON.stringify(data));
};
