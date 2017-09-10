const element = document.querySelector('input.toggle');
let clickEvent, keydownEvent;

function clickListener () {
  element.checked = true;
  element.disabled = true;
  event.currentTarget.removeEventListener(event.type, clickListener);
  keydownEvent.removeEventListener('keydown', keydownListener);
}

function keydownListener () {
  element.checked = true;
  element.disabled = true;
  event.currentTarget.removeEventListener(event.type, keydownListener);
  clickEvent.removeEventListener('click', clickListener);
}

clickEvent = element.addEventListener('click', clickListener);
keydownEvent = document.addEventListener('keydown', keydownListener);
