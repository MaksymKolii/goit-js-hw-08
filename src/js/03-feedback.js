import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
const refs = {
  //input: document.querySelector('.feedback-form input'),
  form: document.querySelector('.feedback-form'),
  //textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onTextInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

let userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

//* первый метод для которого нужны слушатели на textarea и input
// populatedInputData(userData);

//* Второй метод для которого нужен только слкшатель на formе
populatedInputDataNew(userData);

function onTextInput(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (
    !e.currentTarget.elements.email.value ||
    !e.currentTarget.elements.message.value
  ) {
    return alert('Please input data!');
  }
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(userData);
  userData = {};
}

// function populatedInputData(data) {
//   if (data) {
//     refs.input.value = data['email'] || '';
//     refs.textarea.value = data['message'] || '';
//   }
// }

/* 
1) Из localStorage методом Object.entries(data)-- получаем массив масивов  со значением ключ, значение [name, value]
2)  проходимся forEach по массиву [ ["email","rr@kkk.com"], ["message","yfvyuv"] ] и вставляем в нашу ссылку на 
элемент формы [name].value значение(value) из Форыча
*/
function populatedInputDataNew(data) {
  if (data) {
    Object.entries(data).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}
