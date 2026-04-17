// YouTube Subscribe Button
const subscribeBtn = document.querySelector('.subscribe-btn');

subscribeBtn.addEventListener('click', () => {
  subscribeBtn.classList.toggle('subscribed');
  
  if (subscribeBtn.classList.contains('subscribed')) {
    subscribeBtn.textContent = 'Subscribed';
  } else {
    subscribeBtn.textContent = 'Subscribe';
  }

});