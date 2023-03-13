function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.addEventListener('click', hideSelf);
  button.hidden = true
}
