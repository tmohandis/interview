//Что выведет alert(typeof NaN); ?
// number

//Что выведет alert(NaN === NaN); ?
//false

// 0.1 + 0.2 == 0.3
//false

// Какой тип будет иметь переменная a, если она создается при помощи следующего кода: var a = "a,b".split(',');
// array

// Сделать так, чтобы при нажатии на элемент <а> алертом выводилось «Hello world!».
let element = document.querySelector('a');
element.addEventListener('click' , () =>
    console.log('Hello world')
);

/*Найти все элементы div с классом one, а также все элементы p с классом two. Затем добавить им всем класс three и
визуально плавно спустить вниз. (Совсем не понял формулировку последнего задания)*/
let elements = document.querySelectorAll('div.one p.two');
elements.classList.add('three');
//Выбрать видимый div с именем red, который содержит тег span.
let red = document.querySelector('div:visible[name=red] > span').parentElement;
//Привести пример замыкания.
function func(x) {
    return function(y) {
        return x + y;
    };
}

let sum  = func(1);
console.log(sum(2));
//Написать функцию, которая уменьшает или увеличивает указанное время на заданное количество минут

function changeTime(time, minutes) {
   let timeArr = time.split(':');
   if (parseInt(timeArr[0]) > 23 || parseInt(timeArr[1]) > 59)
   {
       return "Введен неправильный формат времени";
   } else {
       if (timeArr[0] === '00') timeArr[0] = '24';
           let totalMinutes = parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);
       totalMinutes = totalMinutes + minutes;
       let mins = totalMinutes % 60;
       let hours = (totalMinutes - mins) / 60;
       if (hours === 24) hours = 0;
       return hours.toString().padStart(2, '0') + ":" + mins.toString().padStart(2, '0');
   }
}

console.log(changeTime("23:59", 1));

//Написать функцию, возвращающую градус, на который указывают часовая и минутная стрелки в зависимости от времени
function clockDegree(time) {
    let timeArr = time.split(':');
    let hours = parseInt(timeArr[0]);
    let mins = parseInt(timeArr[1]);
    if (hours > 23 || mins > 59)
    {
        return "Введен неправильный формат времени";
    } else {
      if (hours > 12) hours = hours - 12;
      if (hours === 0) hours = 12;
      if (mins === 0) mins = 60;
      return hours * 30 + ':' + mins * 6;
    }
}

console.log(clockDegree("01:01"));

/*Написать простую игру «Угадай число». Программа загадывает случайное число от 0 до 100.
Игрок должен вводить предположения и получать ответы «Больше», «Меньше» или «Число угадано»*/


function game(number) {
    do {
        var enteredNumber = parseInt(prompt('Введите предполагаемое число'));
        if (enteredNumber > number) {
            console.log('Загаданное число больше введенного!')
        } else {
            if (enteredNumber === number) {
                console.log('Ура! Вы угадали!')
            } else {
                console.log('Загаданное число меньше введенного!')
            }
        }
    } while (enteredNumber !== number)
    return 'game ended';
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let number = randomInteger(1,100);
console.log(number);
game(number);