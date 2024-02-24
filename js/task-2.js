/**
 * Задача 2. Форматування повідомлення
 *
 * @param {string} message - Вхідний рядок.
 * @param {number} maxLength - Довжина для перевірки рядку.
 * @returns {string} - Результат. Повертає рядок із відформатованим повідомленям.
 */
function formatMessage(message, maxLength) {
  //Змінна довжина поточного рядка
  const currentLength = message.length;
  //Перевірка умови відповідності довжини рядка
  if (currentLength <= maxLength) {
    // повертання поточного рядку
    return message;
  }
  // повертання поточного рядку обмеженого максимальною ддовжиною із крапками
  return message.slice(0, maxLength) + '...';
}
// Виводимо результати викликів функції з різними параметрами
console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
