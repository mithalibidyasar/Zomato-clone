let email_phone_input = document.querySelector('#email-input');
let email_button = document.querySelector('#email-button');
let phone_button = document.querySelector('#phone-button');
//change placeholder
function changePlaceholder () {
    if (email_button.checked){
        email_phone_input.setAttribute ('placeholder', 'Email');
    } if (phone_button.checked){
        email_phone_input.setAttribute ('placeholder', 'Number');
    }
}
email_button.addEventListener ('click', changePlaceholder);
phone_button.addEventListener ('click', changePlaceholder);