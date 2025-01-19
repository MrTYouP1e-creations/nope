
const cookiesAgreement = document.querySelector('cookies-agreement');

const cookiesButton = document.querySelector('cookies-button');

let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);


cookiesButton.addEventListener('click', () => {

  cookiesAgreement.classList.add('cookies-agreement-closed');

  overlay.remove()});