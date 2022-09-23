localStorage.removeItem("videoplayer-current-time");

const LOCALSTORAGE_KEY="feedback-form-state"

// const refs={

//     inputMail: document.querySelector('input[name="email"]'),
//     inputMessage: document.querySelector('textarea[name="message"]'),
//     form: document.querySelector('.feedback-form'),
//     LOCALSTORAGE_KEY:"feedback-form-state",
// }
// refs.inputMail.addEventListener('input', onInputChange);
// refs.inputMessage.addEventListener('input', onInputChange);
// refs.form.addEventListener('submit', onFormSubmit)


function onFormSubmit(e){
    e.preventDefault();
    const {
      elements: { email, message },
    } = e.currentTarget;
    // if (!email.value || !message.value) {
    //     return window.alert('Please input data!');
    //   }
      const userData = { email: email.value, message: message.value };

      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
    console.log(userData);

      e.currentTarget.reset();
      localStorage.removeItem("feedback-form-state");
}




const formInput =document.querySelector('.feedback-form')
const formSubmit =document.querySelector('.feedback-form')

formInput.addEventListener('input', onInputfillLocalStorage)
formSubmit.addEventListener('submit', onFormSubmit)


function onInputfillLocalStorage(e){

    e.preventDefault();
    
    const {
      elements: { email, message },
    } = e.currentTarget;
  
    console.log(email.value, message.value);

      const userData = { email: email.value, message: message.value };

      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
    console.log(userData);

      //e.currentTarget.reset();
}