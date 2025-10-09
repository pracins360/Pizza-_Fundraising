// Configuración
const startDate = new Date('2024-10-10');
const endDate = new Date('2024-10-25');
let pizzasSold = 0;
const totalPizzas = 50;

// Elementos del DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const progressElement = document.getElementById('progress');
const pizzasSoldElement = document.getElementById('pizzas-sold');

// Actualizar countdown
function updateCountdown() {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        daysElement.textContent = '0';
        hoursElement.textContent = '0';
        minutesElement.textContent = '0';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
}

// Actualizar barra de progreso
function updateProgress() {
    const progress = (pizzasSold / totalPizzas) * 100;
    progressElement.style.width = `${progress}%`;
    pizzasSoldElement.textContent = pizzasSold;
    
    // Guardar en localStorage
    localStorage.setItem('pizzasSold', pizzasSold);
}

// Compartir en WhatsApp
function shareOnWhatsApp() {
    const message = `🚨 15 DÍAS DE LOCURA 🚨

¡PIZZA HAM & CHEESE POR SOLO XCG 25!
🍕 Pizza Deliciosa
🚚 DELIVERY GRATIS
📅 Hasta el 25 de Octubre

📞 PEDIDOS:
+599 9512 0536
+599 9515 4108

¡No te pierdas esta oferta! 🍕`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
}

// Simular ventas (para demo - puedes eliminar esto)
function simulateSale() {
    // Esta función es solo para demostración
    // En producción, las ventas se registrarían manualmente
    console.log('Para registrar una venta, actualiza la variable pizzasSold en la consola');
}

// Cargar datos guardados
function loadSavedData() {
    const savedPizzas = localStorage.getItem('pizzasSold');
    if (savedPizzas) {
        pizzasSold = parseInt(savedPizzas);
        updateProgress();
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    loadSavedData();
    
    // Actualizar countdown cada minuto
    setInterval(updateCountdown, 60000);
    
    // Para testing: descomenta la línea siguiente
    // console.log('Usa pizzasSold = X; updateProgress(); para simular ventas');
});

// Hacer funciones globales para posible uso desde consola
window.pizzasSold = pizzasSold;
window.updateProgress = updateProgress;
window.shareOnWhatsApp = shareOnWhatsApp;