"use strict"

const employee_form = document.forms['employee_form'];
const submit = employee_form.elements['submit'];

const inputArr = Array.from(employee_form);
const validInputArr = [];

inputArr.forEach((el) => {
  if (el.hasAttribute('data-required')) {
    el.setAttribute('is-valid', '0');
    validInputArr.push(el);
  }
});

// console.log(validInputArr);

employee_form.addEventListener('input', inputHandler);
submit.addEventListener('click', buttonHandler);

function inputHandler({target}) {
  if (target.hasAttribute('data-required')) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute('data-required');
  const reg = new RegExp(inputReg);

  // console.log(inputValue, reg);

  if(reg.test(inputValue)) {
    el.style.border = "2px solid rgb(0, 195, 0)";
    el.setAttribute('is-valid', '1');
  } else {
    el.style.border = "2px solid rgb(255, 0, 0)";
    el.setAttribute('is-valid', '0');
  }
}

function buttonHandler(e) {
  const isAllValid = [];
  validInputArr.forEach((el) => {
    isAllValid.push(el.getAttribute('is-valid'));
  });

  // console.log(isAllValid);
  
  const isValid = isAllValid.reduce((accum, current) => {
    return accum && current;
  })

  // console.log(isValid);
  
  console.log(Boolean(Number(isValid)));

  if(!Boolean(Number(isValid))) {
    e.preventDefault();
  }
}







// "use strict"

// document.addEventListener('DOMContentLoaded', function() {
//   const employee_form = document.getElementById('employee_form');
//   employee_form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(employee_form);

//     // let formData = new FormData(form);

//     if (error === 0) {
//       form.classList.add('_sending');
//       let response = await fetch('sendmail.php', {
//         method: 'POST',
//         body: formData
//       });
//       if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         form.reset();
//         form.classList.remove('_sending');
//       } else {
//         alert("Error, something went wrong")
//         form.classList.remove('_sending');
//       }
//     } else {
//       alert ("Fill in required fields, please")
//     }
//   }

//   function formValidate(employee_form) {
//     let error = 0;
//     let formRequired = document.querySelectorAll('._req');
    
//     for (let index = 0; index < formRequired.length; index++) {
//       const input = formRequired[index];
//       formRemoveError(input);

//       if (input.classList.contains('_email')) {
//         if (emailTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       } else if(input.value === '') {
//         formAddError(input);
//         error++;
//       }
//     }
//     return error;
//   }

//   function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }
//   function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.add('_error');
//   }
//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }

// });