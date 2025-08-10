let pswd = document.getElementById('pswd');
let seepswd = document.getElementById('see');
let checkLabel = document.getElementById('checkLabel')

function see() {
  if (seepswd.checked) {
    pswd.type = 'text';
    checkLabel.style.display = 'none';
  }
  else {
    pswd.type = 'password';
    checkLabel.style.display = 'inline'
    
  }
}