// Вывод текста на латинице (только строчные буквы и пробел)
document.querySelector('#lat-text').onkeypress = function (e) {
	if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 32) {
		this.value += e.key;
	}
	return false;
}

// Перемещение блока стрелками и поворот пробелом
let ball = document.querySelector('#ball');
let right = getComputedStyle(ball).marginLeft;
let up = getComputedStyle(ball).marginBottom;
let degree = 0;
right = parseInt(right);
up = parseInt(up);
document.onkeydown = function (e) {
	if (e.keyCode == 39) {
		e.preventDefault(); // Для блокировки перемещения страницы (на малых мониторах)
		if (right <= 470) {
			right += 10;
			ball.style.marginLeft = `${right}px`;
		}
	}
	if (e.keyCode == 37) {
		e.preventDefault();
		if (right >= 10) {
			right -= 10;
			ball.style.marginLeft = `${right}px`;
		}
	}
	if (e.keyCode == 38) {
		e.preventDefault();
		if (up <= 270) {
			up += 10;
			ball.style.marginBottom = `${up}px`;
		}
	}
	if (e.keyCode == 40) {
		e.preventDefault();
		if (up >= 10) {
			up -= 10;
			ball.style.marginBottom = `${up}px`;
		}
	}
	if (e.keyCode == 32) {
		// Скроллинг страницы вниз при нажатии пробела (заметно на малых мониторах) убирать
		// не стал, чтобы пробел работал в других заданиях.
		degree += 45;
		ball.style.transform = `rotate(${degree}deg)`;
	}
}

// Замена введенного символа на произвольный
function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}
document.querySelector('#symb-change').onkeypress = function (e) {
	this.value = e.key;
	this.onkeydown = function (e) {
		if (e.keyCode == 9) {
			e.preventDefault();
			this.value = String.fromCharCode(randomInteger(65, 126));
		}
	}
	return false;
}

// Сдвиг символов на одну клавишу
let srcArr = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 113, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 97, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 122];
document.querySelector('#symb-shift').onkeypress = function (e) {
	for (var i = 0; i < srcArr.length; i++) {
		if (srcArr[i] == e.keyCode) {
			this.value += String.fromCharCode(srcArr[i + 1]);
			break;
		}
	}
	if (i == srcArr.length) {
		this.value += e.key;
	}
	return false;
}