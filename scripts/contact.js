// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single
//<p> element that reads "Thank you for your message" in size 24 font.

function onSubmit() {
    let currentContactPage = document.getElementById("contact-page");
    let newContactPage = document.createElement("p");
    newContactPage.textContent = "Thank you for your message";

    newContactPage.classList.add("thank-style");

    currentContactPage.replaceWith(newContactPage);
}

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", onSubmit);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize,
//or by updating its .classList.

