// создаем массив "numbers"
const numbers = [1, 9, 6, 2, 3];

console.log("создаем массив 'numbers'");
console.log("numbers", numbers);
console.log("");

//
//
// сортируем массив "numbers"
numbers.sort();

console.log("сортируем массив 'numbers'");
console.log("numbers", numbers);
console.log("");

//
//
// сортируем "numbers" в обратном порядке
numbers.sort((curEl, nextEl) => {
  return nextEl - curEl;
});

console.log("сортируем массив 'numbers' в обратном порядке");
console.log("numbers", numbers);
console.log("");

// копия массива чтобы не сортировать оригинальный
/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */
console.log("===============================================");
console.log("копия массива чтобы не сортировать оригинальный");
console.log("===============================================");

const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
const descSortedNumbers = [...numbers].sort((a, b) => b - a);

console.log("ascSortedNumbers", ascSortedNumbers);
console.log("descSortedNumbers", descSortedNumbers);

console.log(
  "_____________________________________________________________________________________________________________"
);

console.log("========================");
console.log("сортировка сложных типов");
console.log("========================");

console.log("оригинальный объект");
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];
console.table(players);
console.log("");
console.log("");

// По игровому времени
const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.log("Сортируем по игровому времени (по убыванию)");
console.table(sortedByBestPlayers);
console.log("");
console.log("");

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);

console.log("Сортируем по игровому времени (по возростанию)");
console.table(sortedByWorstPlayers);
console.log("");
console.log("");

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName);
console.log(
  "_____________________________________________________________________________________________________________"
);

//
//
// создаем массив "letters"
const letters = ["b", "B", "a", "A"];

console.log("создаем массив 'letters'");
console.log("letters", letters);
console.log("");

//
//
// сортируем массив "letters"
letters.sort();

console.log("сортируем массив 'letters'");
console.log("letters", letters);
console.log("");

//
//
// сортируем "letters" в обратном порядке
letters.sort((curEl, nextEl) => {
  return nextEl - curEl;
});

console.log("сортируем массив 'letters' в обратном порядке");
console.log("letters", letters);
console.log("");

// копия массива чтобы не сортировать оригинальный
console.log("===============================================");
console.log("копия массива чтобы не сортировать оригинальный");
console.log("===============================================");
