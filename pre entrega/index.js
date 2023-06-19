// Obtener el formulario
const form = document.getElementById('productForm');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    // Obtener los valores ingresados por el usuario
    const product1 = parseFloat(document.getElementById('product1').value);
    const product2 = parseFloat(document.getElementById('product2').value);
    const product3 = parseFloat(document.getElementById('product3').value);
    
    // Calcular el costo total utilizando una función
    const totalCost = calculateTotalCost(product1, product2, product3);
    
    // Mostrar el resultado del costo total
    const resultElement = document.getElementById('totalCost');
    resultElement.textContent = `$${totalCost.toFixed(2)}`;
});

// Función para calcular el costo total
function calculateTotalCost(product1, product2, product3) {
    const taxRate = 0.1; // Tasa de impuesto del 10%
    const discount = 0.2; // Descuento del 20%
    
    // Calcular el subtotal de los productos
    const subtotal = product1 + product2 + product3;
    
    // Calcular el impuesto
    const tax = subtotal * taxRate;
    
    // Calcular el descuento
    const discountedAmount = subtotal * discount;
    
    // Calcular el costo total
    const totalCost = subtotal + tax - discountedAmount;
    
    return totalCost;
}

    
