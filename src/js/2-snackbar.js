
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector('.form');


function createPromise(delay, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(delay); 
      } else {
        reject(delay); 
      }
    }, delay);
  });
}


form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const delay = Number(form.elements.delay.value); 
  const state = form.elements.state.value; 

  
  const shouldResolve = state === 'fulfilled';

  
  createPromise(delay, shouldResolve)
    .then((result) => {
      iziToast.show({
        title: 'Success',
          message: `✅ Fulfilled promise in ${result}ms`,
         color: 'green', 
        position: 'topRight', 
        timeout: 2000, 
      });
    })
    .catch((error) => {
      iziToast.show({
        title: 'Error',
          message: `❌ Rejected promise in ${error}ms`,
           color: 'red', 
        position: 'topRight', 
        timeout: 2000, 
        
      });
    });

  
  form.reset();
});

