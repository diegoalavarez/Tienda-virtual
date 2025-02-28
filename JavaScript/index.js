let cart = [];
let total = 0;

function toggleLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}

function toggleSignupForm() {
    const signupForm = document.getElementById('signupForm');
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

function toggleIphones() {
    const iphonesDiv = document.getElementById('iphones');
    iphonesDiv.style.display = iphonesDiv.style.display === 'none' ? 'block' : 'none';
}

function toggleAirpods() {
    const airpodsDiv = document.getElementById('airpods');
    airpodsDiv.style.display = airpodsDiv.style.display === 'none' ? 'block' : 'none';
}

function toggleCases() {
    const casesDiv = document.getElementById('cases');
    casesDiv.style.display = casesDiv.style.display === 'none' ? 'block' : 'none';
}

function showIphoneDetails(name, price, features) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `<h3>${name}</h3><p>Precio: $${price.toFixed(2)}</p><p>Características: ${features}</p>`;
}

function showAirpodDetails(name, price, features) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `<h3>${name}</h3><p>Precio: $${price.toFixed(2)}</p><p>Características: ${features}</p>`;
}

function showCaseDetails(name, price, features) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `<h3>${name}</h3><p>Precio: $${price.toFixed(2)}</p><p>Características: ${features}</p>`;
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    document.getElementById('cartCount').innerText = cart.length;
    alert(`${name} ha sido añadido al carrito.`);
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
    displayCartItems();
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
    });
    document.getElementById('totalPrice').innerText = total.toFixed(2);
}

function checkout() {
    alert(`Total de la compra: $${total.toFixed(2)}. ¡Gracias por tu compra!`);
    cart = [];
    total = 0;
    document.getElementById('cartCount').innerText = 0;
    toggleCart();
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Iniciando sesión como ${username}`);
    toggleLoginForm();
}

function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    alert(`Cuenta creada para ${newUsername}`);
    toggleSignupForm();
}
