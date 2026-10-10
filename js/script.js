const calories = [250, 650, 180, 720, 300, 450, 850];

function sum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

function max(numbers) {
    let result = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i];
        }
    }
    return result;
}

function filterOver(numbers, limit) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > limit) {
            result.push(numbers[i]);
        }
    }
    return result;
}

let userName = prompt("Введите своё имя");
if (userName === null || userName.trim() === "") {
    userName = "гость";
}
alert(`Добро пожаловать, ${userName.trim()}!`);

const heavy = filterOver(calories, 600);
const total = sum(calories);
const heavyTotal = sum(heavy);
const biggest = max(calories);

let lightCount = 0;
for (let i = 0; i < calories.length; i++) {
    if (calories[i] <= 300) {
        lightCount++;
    }
}
const lightShare = lightCount / calories.length;

alert(`Суммарная калорийность – ${total} ккал, из них ${heavyTotal} ккал – в высококалорийных блюдах`);

console.log("Калорийность блюд:", calories);
console.log(`Самое калорийное блюдо: ${biggest} ккал`);
console.log("Высококалорийные блюда (> 600 ккал):", heavy);
console.log(`Количество низкокалорийных блюд (≤ 300 ккал): ${lightCount}`);
console.log(`Доля низкокалорийных блюд: ${(lightShare * 100).toFixed(1)}% (${lightCount} из ${calories.length})`);

if (total > 3000) {
    console.log("Такой рацион лучше распределить на 2 дня");
}