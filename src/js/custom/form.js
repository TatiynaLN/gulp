// ;(function () {

//     let formDown;
//     let inputPhone;
//     let inputName;
//     let inputEmail;
//     let inputMessage;
//     let submitBtn;
    

//     if(document.querySelector('.main-form--down')) {
//         formDown = document.querySelector('.main-form--down');
//         inputName = formDown.querySelector('.main-form__user-name');
//         inputPhone = formDown.querySelector('.main-form__user-phone');
//         inputEmail = formDown.querySelector('.main-form__user-email');
//         inputMessage = formDown.querySelector('.main-form__user-message');
//         submitBtn = document.querySelector('.btn-send--submit');
//         submitBtn.disabled = true;
//         inputMask(inputPhone);
//         // validName(inputName, submitBtn);
//         // validMail(inputEmail, submitBtn);
//         // validPhone(inputPhone, submitBtn);
//         // validMessage(inputMessage, submitBtn);
//         // formSend(inputName, inputPhone, inputEmail, inputMessage, submitBtn);
//         submitBtn.addEventListener('submit', (e) => {
//             e.preventDefault();
//             formSend(inputName, inputPhone, inputEmail, inputMessage, submitBtn);
//         });
//     }

//     // if(document.querySelector('.main-form--upper')) {
//     //     let formDown = document.querySelector('.main-form--upper');
//     //     let inputPhone = formDown.querySelector('.main-form__user-phone');
//     //     let inputName = formDown.querySelector('.main-form__user-name');
//     //     let inputEmail = formDown.querySelector('.main-form__user-email');
//     //     let inputMessage = formDown.querySelector('.main-form__user-message');
//     //     let submitBtn = document.querySelector('.btn-send');
//     //     inputMask(inputPhone);
//     //     validName(inputName, submitBtn);
//     //     validMail(inputEmail, submitBtn);
//     //     validPhone(inputPhone, submitBtn);
//     //     validMessage(inputMessage, submitBtn);
//     //     // formSend(submitBtn);
//     // }

//     function inputMask(input) {
//         function setMask(event) {
//             let pressedKey;
//             event.keyCode && (pressedKey === event.keyCode); 
//             input.setSelectionRange(input.value.length, input.value.length);      
//             let maskType = '+7 (___) ___-__-__',
//                 i = 0,
//                 replaceValue = maskType.replace(/\D/g, ''),
//                 prevValue = this.value.replace(/\D/g, ''),
//                 currentValue = maskType.replace(/[_\d]/g, (a) => {
//                     return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
//                 });          
//             i = currentValue.indexOf('_');
//             if (i != -1) {
//                 i < 5 && (i = 3);
//                 currentValue = currentValue.slice(0, i);
//             }      
//             let reg = maskType.substr(0, this.value.length).replace(/_+/g,
//                 function(a) {
//                     return '\\d{1,' + a.length + '}';
//                 }).replace(/[+()]/g, '\\$&');
//             reg = new RegExp('^' + reg + '$');
//             if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
//                 this.value = currentValue;
//             } else if (event.type === 'blur' && this.value.length < 5) {
//                 this.value = '';
//             }
//             input.setSelectionRange(input.value.length, input.value.length);
//         }
            
//         input.addEventListener('input', setMask, false);
//         input.addEventListener('focus', setMask, false);
//         input.addEventListener('blur', setMask, false);
//         input.addEventListener('keydown', setMask, false);
//     }

//     function validName(input, submit) {
//         // let output = document.querySelector('.name-warning-message');
//         let name = input.value;
//         let valid;
//         if(name == '') {
//             // output.classList.add('email-warning-message--invalid');
//             // submit.disabled = true;
//             valid = false;
//             console.log(valid);
//         } else {
//             // output.classList.remove('email-warning-message--invalid');
//             // submit.disabled = false;
//             valid = true;
//             console.log(valid);
//         }
//         return valid;
//     }

//     function validMail(input, submit) {
//         let regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
//         // let output = document.querySelector('.email-warning-message');
//         let mail = input.value;
//         let valid = regExp.test(mail);
//         if (!valid || mail == '') {
//             // output.classList.add('email-warning-message--invalid');
//             // submit.disabled = true;
//             valid = false;
//             console.log(valid);
//         } else {
//             // output.classList.remove('email-warning-message--invalid');
//             // submit.disabled = false;
//             valid = true;
//             console.log(valid);
//         }
//         return valid;
//     }

//     function validPhone(input, submit) {
//         let regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
//         // let output = document.querySelector('.phone-warning-message');
//         let phone = input.value;
//         let valid = regExp.test(phone);
//         if (!valid || phone == '') {
//             // output.classList.add('phone-warning-message--invalid');
//             // submit.disabled = true;
//             valid = false;
//             console.log(valid);
//         } else {
//             // output.classList.remove('phone-warning-message--invalid');
//             // submit.disabled = false;
//             valid = false;
//             console.log(valid);
//         }
//         return valid;
//     }
    
//     function validMessage(input, submit) {
//         // let output = document.querySelector('.comment-warning-message');
//         let message = input.value;
//         let valid;
//         if(message == '') {
//             // output.classList.add('comment-warning-message--invalid');
//             // submit.disabled = true;
//             valid = false;
//             console.log(valid);
//         } else {
//             // output.classList.remove('comment-warning-message--invalid');
//             // submit.disabled = false;
//             valid = true;
//             console.log(valid);
//         }
//         return valid;
//     }

//     function formSend(name, phone, email, message, submit) {
        
//         if(!validName(name, submit) || !validPhone(phone, submit) || !validMail(email, submit) || !validMessage(message, submit)) {
//             submit.disabled = true;
//             console.log(submit.disabled);
//         } else {
//             submit.disabled = false;
//             setTimeout(() => {
//                 formDown.reset();
//             }, 2000);
//         }
//     }

// })();