let pswd = document.getElementById('pswd');
let seepswd = document.getElementById('see');
let checkLabel = document.getElementById('checkLabel')

function see() {
  if (seepswd.checked) {
    pswd.type = 'text';
  }
  else {
    pswd.type = 'password';
  }
}