import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
  inputData: document.querySelector('.feedback-form'),
  form: document.querySelector('.feedback-form'),
};

refs.inputData.addEventListener('input', throttle(onInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

populatedInputData();

function onInputChange(e) {
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log(email.value, message.value);

//   const userData = { email: email.value, message: message.value };
  const userData = { email: email.value, message: message.value };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
  console.log(userData);
  console.log(localStorage);
}

function onFormSubmit(e) {
  e.preventDefault();
  //console.log('Sending form');
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populatedInputData() {
  const savedInputData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedInputData) {
    refs.inputData.email.value = savedInputData.email;
    refs.inputData.message.value = savedInputData.message;
  }
}

//2=====================================================================================

// import throttle from 'lodash.throttle';
// localStorage.removeItem('videoplayer-current-time');

// const LOCALSTORAGE_KEY = 'feedback-form-state';

// const inputData = document.querySelector('.feedback-form');
// const form = document.querySelector('.feedback-form');

// inputData.addEventListener('input', throttle(onTextInput, 500));
// form.addEventListener('submit', onFormSubmit);


// populatedInputData();
// const userData ={};

// function onTextInput(e) {

//   userData[e.target.name] = e.target.value;

//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
//   console.log(userData);
//   console.log(localStorage);
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// }

// function populatedInputData() {
//   const savedInputData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

//   if (savedInputData) {
//     inputData.email.value = savedInputData.email;
//     // console.log('savedInputData.email', savedInputData.email);
//     inputData.message.value = savedInputData.message;
//     // console.log('savedInputData.message', savedInputData.message);
    
//   }
// }