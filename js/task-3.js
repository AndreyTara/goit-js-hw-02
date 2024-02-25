/**
 *  Перевірка спаму
 *
 * @param {number} message -Вхідний рядок.
 * @returns {boolean} - Результат відповідність наявності слів у рядку "spam" і "sale". Повертає false або true.
 */

function checkForSpam(message) {
  //змінна "spam"
  const textSpam = 'spam';
  //змінна "sale"
  const textSale = 'sale';
  //змінна для приведення рядка message до малих літер
  const messageLow = message.toLowerCase();
  //перевірка у message на наявність тексту "sale"
  const checkSpam = messageLow.includes(textSpam);
  //перевірка у message на наявність тексту "sale"
  const checkSale = messageLow.includes(textSale);
  // Генеруємо повідомлення наявність заборонених слів(false/true)
  return checkSpam || checkSale;
}

// Виводимо результати викликів функції з різними параметрами
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
