
 var text = document.getElementById('text');
  var splitText = text.innerText.split('');

 text.innerHTML = '';
  i = 0
  setInterval(function(){
    AjoutDeLettre()}
    , 100 )

function AjoutDeLettre(){
  if(i < splitText.length){
    text.innerHTML += splitText[i];
    i++;
  }
}








$('.btn').click(function(e) {
  e.preventDefault();    
  $('.overlay').toggleClass('show');
});

