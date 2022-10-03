const clickBtn = () => {
    console.log(`${focusInput.value} ${inputValue.value}`);
};
const btnClick = document.querySelector("#btnToClick");
btnClick.addEventListener("click", (e) => clickBtn());

const focusInput = document.querySelector(".focus");
const focusFunction = () => {
    console.log(focusInput.value);
}
focusInput.addEventListener("focus", (e) => focusFunction());

const inputValue = document.querySelector(".value");
const functionInput = () => {
    console.log(inputValue.value);
}
inputValue.addEventListener("input", (e) => functionInput());