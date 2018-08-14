/* 9. Есть такой код: https://jsfiddle.net/x4rkcyu0/
Если кто пробовал оплачивать банковской картой в интернете,
то возможно видели окошко из цифр, которое открывается при вводе cvv-кода.
Цифры там расположены в 4 ряда и 3 столбца и каждый раз они в разных позициях.
Текущий код создаёт что-то похожее, но цифры одинаковые. Потому что
в 34-й строке мы получаем элемент массива по индексу 1, а надо,
чтобы индекс был от 0 до 9. Используя только счётчики циклов и наши константы
сделайте так, чтобы в 34-й строке передавались из numbers[] корректные элементы.
в комментариях к функции написаны примерные варианты, как должно стать.
*/

"use strict";

const div = document.getElementById("code-window");
//div.style.position = "relative";

const AMOUNT = 10, ROWS = 4, COLUMNS = 3, ELEM_WIDTH = 30, ELEM_HEIGHT = 30, SPACE = 10;

const numbers = fillArray(AMOUNT);
createElements(numbers);

/**
 * Creates group of elements with number content
 * The result DOM should has this structure
 *
 * 0 1 4
 * 9 6 8
 * 2 5 3
 *   7
 *
 * OR
 *
 * 9 2 4
 * 0 6 8
 * 7 3 5
 *   1
 *
 * @param {Array} numbers - array with numbers
 * @return {void}
 */
function createElements(numbers) {
    for (let j = 0; j < ROWS; j++) {
        for (let k = 0; k < COLUMNS; k++) {

            const elem = createElem(numbers[j * 3 + k]);
            elem.style.top = ELEM_WIDTH * j + SPACE * j + "px";
            elem.style.left = j < ROWS - 1 ?
                ELEM_HEIGHT * k + SPACE * k + SPACE + "px" :
                2 * SPACE + ELEM_HEIGHT + "px";

            div.appendChild(elem);
        }
    }
}

/**
 * Creates one element with number
 *
 * @param {Number} number - value in numbers array
 * @return {Object} created element
 */
function createElem(number) {

    const elemStyles = {
        width: ELEM_WIDTH + "px",
        height: ELEM_HEIGHT + "px",
        position: "absolute",
        textAlign: "center"
    };

    const elem = document.createElement("DIV");

    for (let style in elemStyles) {
        elem.style[style] = elemStyles[style];
    }

    const text = document.createElement("P");
    text.textContent = number;
    elem.appendChild(text);

    return elem;
}

/**
 * Creates an array with numbers and mixes it
 *
 * @param {Number} length - size of the array
 * @return {Array} - array with numbers
 */
function fillArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = i;
    }

    mix(arr);

    /**
     * Mixes elements in the array
     *
     * @param {Array} arr - array with numbers
     */
    function mix(arr) {
        for (let i = 0; i < arr.length; i++) {
            const tmp = arr[i];
            const index = Math.floor(Math.random() * arr.length);
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }

    return arr;
}
