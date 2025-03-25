let email_phone_input_ = document.querySelector('#email-input_');
let email_button_ = document.querySelector('#email-button_');
let phone_button_ = document.querySelector('#phone-button_');
//change placeholder
function changePlaceholder_ () {
    if (email_button_.checked){
        email_phone_input_.setAttribute ('placeholder', 'Email');
    } if (phone_button_.checked){
        email_phone_input_.setAttribute ('placeholder', 'Number');
    }
}
email_button_.addEventListener ('click', changePlaceholder_);
phone_button_.addEventListener ('click', changePlaceholder_);