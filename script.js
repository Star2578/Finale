let question = document.querySelector("h2");
let input = document.querySelector("input");
let submit = document.getElementById("button-submit");
let response = document.querySelector("p");

question.innerHTML = "What is the longest river?";

submit.addEventListener("click", printInput)
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submit.click();
    }
});

function printInput() {
    let text = input.value;

    //test
    console.log(text);
}