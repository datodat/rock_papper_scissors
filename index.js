const rulesDiv = document.getElementById('rules-div');
const rulesOpen = document.getElementById('rules-open');
const rulesClose = document.getElementById('rules-close');

let rulesOpened = false;

rulesOpen.addEventListener('click', () => {
  if(rulesOpened){
    return;
  }else{
    rulesDiv.style.display = 'block';
    rulesOpened = true;
  }
})

rulesClose.addEventListener('click', () => {
  if(rulesOpened){
    rulesDiv.style.display = 'none';
    rulesOpened = false;
  }else{
    return;
  }
})