// 
const nameInput = document.querySelector("#name")! as HTMLInputElement;
const ageInput = document.querySelector("#age")! as HTMLInputElement;
const userform = document.querySelector(".user-form") as HTMLFormElement;
const output = document.querySelector("#output")! as HTMLElement;

userform.addEventListener("submit", e => {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    output.innerHTML = `<p>${name} : ${age}</p>`;
})
