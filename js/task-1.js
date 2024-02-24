/**
 * Здійснює купівлю дроїдів.
 *
 * @param {number} quantity - Кількість замовлених дроїдів.
 * @param {number} pricePerDroid - Ціна одного дроїда.
 * @param {number} customerCredits - Cума коштів на рахунку клієнта.
 * @returns {string} - Результат транзакції. Повертає рядок з описом результату операції.
 */

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  //Змінна із повідомленням про нестачу кредитів
  const insufficientFunds = 'Insufficient funds!';
  //Змінна про розрахунок вартості замовлених дроїдів
  const totalPrice = quantity * pricePerDroid;
  // умова виконуэсть при нестачі кредитів
  if (customerCredits < totalPrice) {
    // Генеруємо повідомлення про нестачу кредитів
    return insufficientFunds;
  }
  // Генеруємо повідомлення про замовлення
  return `"You ordered ${quantity} droids worth ${totalPrice} credits!"`;
}

// Виводимо результати викликів функції з різними параметрами
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
