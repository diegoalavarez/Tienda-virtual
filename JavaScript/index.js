let cart = []; // Array para almacenar los productos en el carrito
let total = 0; // Variable para almacenar el total del carrito

// Función para mostrar/ocultar iPhones
function toggleIphones() {
    const iphonesDiv = document.getElementById('iphones');
    iphonesDiv.style.display = iphonesDiv.style.display === 'none' ? 'block' : 'none'; // Alterna la visibilidad de los iPhones
}

// Función para mostrar/ocultar AirPods
function toggleAirpods() {
    const airpodsDiv = document.getElementById('airpods');
    airpodsDiv.style.display = airpodsDiv.style.display === 'none' ? 'block' : 'none'; // Alterna la visibilidad de los AirPods
}

// Función para mostrar/ocultar Cases
function toggleCases() {
    const casesDiv = document.getElementById('cases');
    casesDiv.style.display = casesDiv.style.display === 'none' ? 'block' : 'none'; // Alterna la visibilidad de los Cases
}

// Función para agregar un producto al carrito
function addToCart(name, price, image) {
    cart.push({ name, price, image }); // Agrega el producto al carrito
    total += price; // Suma el precio al total
    document.getElementById('cartCount').innerText = cart.length; // Actualiza el contador del carrito
    alert(`${name} ha sido añadido al carrito.`); // Muestra un mensaje de confirmación
    displayCartItems(); // Muestra los elementos del carrito
}

// Función para mostrar detalles de un producto
function showDetails(name, price, features, image) {
    const detailsCard = document.getElementById('detailsCard'); // Obtiene el contenedor de detalles
    const detailsContent = document.getElementById('detailsContent'); // Obtiene el contenido de detalles
    detailsContent.innerHTML = `
        <img src="${image}" alt="${name}" style="width: 200px;"/> <!-- Imagen del producto -->
        <h3>${name}</h3>
        <p>Precio: $${price.toFixed(2)}</p>
        <p>Características: ${features}</p>
    `; // Muestra las características del producto seleccionado
    detailsCard.style.display = 'block'; // Muestra la tarjeta de detalles
}
function closeDetails() {
    document.getElementById('detailsCard').style.display = 'none';
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none'; // Alterna la visibilidad del carrito
    displayCartItems(); // Muestra los elementos del carrito
}

// Función para mostrar los elementos del carrito
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems'); // Obtiene el contenedor de elementos del carrito
    cartItemsDiv.innerHTML = ''; // Limpia el contenedor

    cart.forEach(item => {
        // Agrega cada producto del carrito al contenedor
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}"/> <!-- Imagen del producto en el carrito -->
                <span>${item.name} - $${item.price.toFixed(2)}</span> <!-- Nombre y precio del producto -->
            </div>
        `;
    });

    document.getElementById('totalPrice').innerText = total.toFixed(2); // Muestra el total del carrito
}

// Función para proceder a la compra (puede ser implementada más adelante)
function checkout() {
    alert('Procediendo a la compra...'); // Mensaje de alerta para proceder a la compra
    cart = []; // Reinicia el carrito a vacío
    total = 0; // Reinicia el total a 0
    document.getElementById('cartCount').innerText = cart.length; // Actualiza el contador del carrito
    displayCartItems(); // Actualiza la visualización del carrito
}


let currentIndex = 0; // Índice de la diapositiva actual
const totalSlides = document.querySelectorAll('.carousel-item').length; // Total de diapositivas

function showSlides() {
    const offset = -currentIndex * 20; // Calcular el desplazamiento (20% por cada imagen)
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`; // Aplicar el desplazamiento
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementar el índice y volver al inicio si es necesario
    showSlides(); // Mostrar la diapositiva actual
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrementar el índice y volver al final si es necesario
    showSlides(); // Mostrar la diapositiva actual
}

// Iniciar el carrusel automáticamente (opcional)
setInterval(nextSlide, 3000); // Cambiar cada 5 segundos

// Función para mostrar/ocultar la lista de iPhones
function toggleIphones() {
    const iphones = document.getElementById('iphones');
    iphones.style.display = iphones.style.display === 'none' ? 'block' : 'none';
}