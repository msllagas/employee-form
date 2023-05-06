
const fileUpload = document.getElementById('fileupload');
const fileChosen = document.getElementById('filechosen');

fileUpload.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name;
  fileChosen.style.padding = '8px'
})

