// 
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const userform = document.querySelector(".user-form");
const output = document.querySelector("#output");
userform.addEventListener("submit", e => {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    output.innerHTML = `<p>${name} : ${age}</p>`;
});
export {};
