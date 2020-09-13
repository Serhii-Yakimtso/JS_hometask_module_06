/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */
console.log("сумма элементов массива 'number'");
const numbers = [5, 10, 15, 20, 25];
console.log(numbers);
console.log("");

const total = numbers.reduce(
  (acc, number) => (
    console.log("acc :", acc),
    console.log("number :", number),
    console.log(`acc + number = ${acc} + ${number} = `, acc + number),
    acc + number
  ),
  0
);
console.log(total);
console.log("");
console.log("");

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */
console.log("сумма свойств объекта 'salary'");
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
console.log(salary);

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);

console.log(Object.values(salary));
console.log(totalSalary);
console.log("");
console.log("");

/*
 * Считаем общее количество часов
 */
console.log("Считаем общее количество часов");

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

console.table(players);

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);

console.log(totalTimePlayed);
console.log("");
console.log("");

/*
 * Считаем общую сумму товаров корзины
 */
console.log("Считаем общую сумму товаров корзины");

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

console.table(cart);

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);

console.log(totalAmount);
console.log("");
console.log("");

/*
 * Собираем все теги из твитов
 */
console.log("Собираем все теги из твитов");
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.table(tweets);

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']
