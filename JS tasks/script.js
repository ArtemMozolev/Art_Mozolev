// Задание 1
let task1Str = document.querySelector('#task1');
for (let i = 0; i <= 100; i++) {
	task1Str.innerText += ' ' + i;
}

// Задание 2
let task2Str = document.querySelector('#task2');
for (i = 1; i <= 101; i++) {
	if (i % 2 == 0) {
		task2Str.innerText += ' ' + i;
	}
}

// Задание 3
let task3Str = document.querySelector('#task3');
for (i = 200; i >= 0; i--) {
	task3Str.innerText += ' ' + i;
}

// Задание 4
let sum = 0;
for (i = 1; i <= 100; i++) {
	sum += i;
}
console.log('Задание 4');
console.log('Сумма чисел от 0 до 100 равна ' + sum);

// Задание 5
let powerBtn = document.querySelector('#power');
let powerField = document.querySelector('#task5');
powerBtn.onclick = function () {
	let userNum = document.querySelector('#num').value;
	userNum = parseFloat(userNum);
	let userPower = document.querySelector('#num-power').value;
	userPower = parseInt(userPower);
	let powerRes = 1;
	if (!isNaN(userNum) && !isNaN(userPower)) {
		for (let i = 1; i <= userPower; i++) {
			powerRes *= userNum;
		}
		powerField.innerText = powerRes;
	}
	else {
		alert('Введите корректные числа!');
	}
}

// Задание 6
for (i = 1; i <= 9; i++) {
	document.querySelector('#mult-table').insertAdjacentHTML('beforeend', `${i} * 7 = ${i * 7};<br>`);
}

// Задание 7
let multResult = 1;
for (i = 2; i <= 50; i++) {
	multResult *= i;
}
document.querySelector('#task7').innerText = multResult;

// Задание 8 (закомментировал это задание, так как нормальный вывод 1001 символа, где есть в том числе и арабские, нельзя сделать в строку, поэтому делал в столбик)
// for (i = 1000; i <= 2000; i++) {
// 	document.querySelector('#task8').innerHTML += `${i} = &#${i}<br>`;
// }

// Задание 9
let paragraphs = document.querySelectorAll('p');
for (i = 0; i < paragraphs.length; i++) {
	paragraphs[i].insertAdjacentHTML('afterbegin', `${i + 1}. `);
}

// Задание 10
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
let zodiac = ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы']
let userDateSum;
document.querySelector('#birth-btn').onclick = function () {
	let userDate = parseInt(document.querySelector('#birth-day').value);
	let userMonth = parseInt(document.querySelector('#month-num').value);
	if (!isNaN(userDate) && !isNaN(userMonth) && userDate >= 1 && userDate <= 31 && userMonth >= 1 && userMonth <= 12) {
		if (userDate == 29 && userMonth == 2) {
			alert(`Ваш знак зодиака: ${zodiac[11]}`);
		}
		else {
			userDateSum = userDate;
			if (userMonth > 1) {
				for (i = 0; i < userMonth - 1; i++) {
					userDateSum += monthDays[i];
				}
			}
			if (userDateSum >= 80 && userDateSum <= 110) {
				alert(`Ваш знак зодиака: ${zodiac[0]}`);
			}
			else if (userDateSum >= 111 && userDateSum <= 140) {
				alert(`Ваш знак зодиака: ${zodiac[1]}`);
			}
			else if (userDateSum >= 141 && userDateSum <= 172) {
				alert(`Ваш знак зодиака: ${zodiac[2]}`);
			}
			else if (userDateSum >= 173 && userDateSum <= 203) {
				alert(`Ваш знак зодиака: ${zodiac[3]}`);
			}
			else if (userDateSum >= 204 && userDateSum <= 235) {
				alert(`Ваш знак зодиака: ${zodiac[4]}`);
			}
			else if (userDateSum >= 236 && userDateSum <= 266) {
				alert(`Ваш знак зодиака: ${zodiac[5]}`);
			}
			else if (userDateSum >= 267 && userDateSum <= 296) {
				alert(`Ваш знак зодиака: ${zodiac[6]}`);
			}
			else if (userDateSum >= 297 && userDateSum <= 326) {
				alert(`Ваш знак зодиака: ${zodiac[7]}`);
			}
			else if (userDateSum >= 327 && userDateSum <= 355) {
				alert(`Ваш знак зодиака: ${zodiac[8]}`);
			}
			else if (userDateSum >= 1 && userDateSum <= 20 || userDateSum >= 356) {
				alert(`Ваш знак зодиака: ${zodiac[9]}`);
			}
			else if (userDateSum >= 21 && userDateSum <= 51) {
				alert(`Ваш знак зодиака: ${zodiac[10]}`);
			}
			else {
				alert(`Ваш знак зодиака: ${zodiac[11]}`);
			}
		}
	}
	else {
		alert('Введите корректные число и месяц!');
	}
}
// Задание 11
let spans = document.querySelectorAll('span');
for (i = 0; i < spans.length; i++) {
	spans[i].style.backgroundColor = 'yellow';
}

// Задание 12
document.querySelector('body').insertAdjacentHTML('beforeend', `<div>Количество параграфов на данной странице: ${paragraphs.length}</div>`);

// Задание 13
let statusArr = [1, 0, 0, 0, 0, 0];
let statusArrPar = document.querySelector('#task13');
for (i = 0; i < statusArr.length; i++) {
	statusArrPar.innerText += ` ${statusArr[i]}`;
}
let statusCounter = 0;
document.querySelector('#statusChng').onclick = function () {
	if (statusCounter < 5) {
		statusArr[statusCounter] = 0;
		statusArr[statusCounter + 1] = 1;
		statusArrPar.innerText = '';
		for (i = 0; i < statusArr.length; i++) {
			statusArrPar.innerText += ` ${statusArr[i]}`;
		}
		statusCounter++;
	}
}

// Задание 14 и 15
function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}
let randomArr1 = [randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100), randomInteger(-100, 100)];
let randomArr1Field = document.querySelector('#task14');
let randomArr1Res = document.querySelector('#task14-res');
let randomArr1Res2 = document.querySelector('#task14-res2');
let negativeQty = 0;
for (i = 0; i < randomArr1.length; i++) {
	randomArr1Field.innerText += ` ${randomArr1[i]}`;
	if (randomArr1[i] < 0) {
		negativeQty++;
		randomArr1Res2.innerText += ` ${randomArr1[i]}`;
	}
}
randomArr1Res.innerText += ` ${negativeQty}`;

// Задание 16
document.querySelector('#show-array').onclick = function () {
	let arrElemQty = parseInt(document.querySelector('#arr-elem-qty').value);
	let arrayField = document.querySelector('#task16');
	let oneArray = [];
	let str = '';
	if (!isNaN(arrElemQty)) {
		for (i = 0; i < arrElemQty; i++) {
			oneArray[i] = 1;
			str += oneArray[i] + ' ';
		}
		arrayField.innerText = str;
	}
	else alert('Введите корректное целое число!');
}

// Задание 17 и 19
document.querySelector('#show-random-array').onclick = function () {
	let randArrElemQty = parseInt(document.querySelector('#rand-arr-elem-qty').value);
	let randArrayField = document.querySelector('#task17');
	let maxValueField = document.querySelector('#max-value');
	let maxValue = -Infinity;
	let randArray = [];
	let randStr = '';
	if (!isNaN(randArrElemQty)) {
		for (i = 0; i < randArrElemQty; i++) {
			randArray[i] = randomInteger(0, 100);
			randStr += randArray[i] + ' ';
			if (randArray[i] > maxValue) {
				maxValue = randArray[i];
			}
		}
		randArrayField.innerText = randStr;
		maxValueField.innerHTML = ' ' + maxValue;
	}
	else alert('Введите корректное целое число!');
}

// Задание 18
let strNumArray = [23, 96, 'some', 'string', 24, 'hello', 14, 'boy'];
let srcArrayField = document.querySelector('#task18-1');
let resArrayField = document.querySelector('#task18-2');
let srcStrNumString = '';
let resStrNumString = '';
for (i = 0; i < strNumArray.length; i++) {
	srcStrNumString += strNumArray[i] + ' ';
	if (typeof strNumArray[i] === 'number') {
		resStrNumString += strNumArray[i] + ' ';
	}
}
srcArrayField.innerHTML = srcStrNumString;
resArrayField.innerHTML = resStrNumString;

// Задание 20
document.querySelector('#show-stat-array').onclick = function () {
	// Создаем исходный массив со случайными значениями
	let statArrElemQty = parseInt(document.querySelector('#stat-arr-qty').value);
	let statArrayField = document.querySelector('#task20');
	let statSrcArray = [];
	let statStr = '';
	let statResArray = [];
	if (!isNaN(statArrElemQty)) {
		for (i = 0; i < statArrElemQty; i++) {
			statSrcArray[i] = randomInteger(0, 100);
			statStr += statSrcArray[i] + ' ';
		}
		statArrayField.innerText = statStr;
	}
	else alert('Введите корректное целое число!');

	// Теперь ищем в нем повторы
	for (i = 0; i < statSrcArray.length; i++) {
		if (statResArray[statSrcArray[i]] !== undefined) continue;
		statResArray[statSrcArray[i]] = 1;
		for (j = i + 1; j < statSrcArray.length; j++) {
			if (statSrcArray[j] == statSrcArray[i]) {
				statResArray[statSrcArray[i]]++;
			}
		}
	}
	let res = '';
	for (i = 0; i < statResArray.length; i++) {
		if (statResArray[i] !== undefined) {
			res += `${i} - ${statResArray[i]} <br>`
		}
	}
	document.querySelector('#task20-2').innerHTML = res;
}