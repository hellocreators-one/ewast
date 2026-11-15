'use strict';

const creditDialog = document.querySelector('#credit-dialog');
let secretClicks = 0;
document.querySelector('#secret').addEventListener('click', () => {
  secretClicks++;
  if (secretClicks === 7) {
    secretClicks = 0;
    creditDialog.showModal();
  }
});
document.querySelector('#credit-close').addEventListener('click', () => creditDialog.close());
