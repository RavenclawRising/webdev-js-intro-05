"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two mutable variables (shiftValue and popValue)
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = todos.join(', ');
}

function updateAnswerTwo() {
    const secondItem = todos[1];
    answerTwoEl.textContent = secondItem;
}

function removeLastValue() {
    popValue = todos.pop();
    console.log("Removed item:", popValue);
}

function removeFirstValue() {
    shiftValue = todos.shift();
    console.log("Removed item:", shiftValue);
}

function addShiftAndPopValues() {
    todos.push(popValue, shiftValue);
}

function updateAnswerThree() {
    answerThreeEl.textContent = `Last item removed: ${shiftValue}`;
}

function updateAnswerFour() {
    answerFourEl.textContent = `Updated todos array: ${todos.join(', ')}`;
}

function reverseTodoList() {
    todos.reverse();
    console.log("Reversed todos array:", todos);
}

function updateAnswerFive() {
    answerFiveEl.textContent = `Removed last item: ${popValue}`;
}

function updateAnswerSix() {
    answerSixEl.textContent = `Array has been reversed: ${todos.join(', ')}`;
}

function render() {
    removeFirstValue();
    removeLastValue();
    addShiftAndPopValues();
    updateAnswerOne();
    updateAnswerTwo();
    updateAnswerThree();
    updateAnswerFour();
    updateAnswerFive();
    reverseTodoList();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    render();
});
