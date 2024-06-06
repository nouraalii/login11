document.addEventListener('DOMContentLoaded', function() {
  
  var name = localStorage.getItem('name');

  var welcome = document.createElement('h2');
  welcome.setAttribute('class','container form-div mt-5 p-5 text-center')
  welcome.textContent = 'Welcome ' + name;
  document.body.appendChild(welcome);
});