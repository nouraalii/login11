  var emailInput = document.querySelector('#email');
  var passwordInput = document.querySelector('#password');
  var loginBtn = document.querySelector('#loginBtn');
  var errorMsg = document.querySelector('.errorMsg');
  var successMsg = document.querySelector('.successMsg');
  var correcttMsg = document.querySelector('.correcttMsg');

  loginBtn.addEventListener('click', function () {
      loginUser();
  });

  function loginUser() {
      if (emailInput.value==''|| passwordInput.value=='') {
          showErrorMsg();
          return;
      }

      var infoList = JSON.parse(localStorage.getItem('infoList')) || [];

      var user = existansUser(infoList);

      if (user) {
          localStorage.setItem('name', user.name);
          sendToHome();
      } else {
          showLoginErrorMsg();
      }
  }

  // function getInfoList() {
  //     return JSON.parse(localStorage.getItem('infoList')) || [];
  // }

  function existansUser(infoList) {
    for (var i = 0; i < infoList.length; i++) {
        if (infoList[i].email === emailInput.value && infoList[i].password === passwordInput.value) {
            return infoList[i];
        }
    }
    showLoginErrorMsg();
}

  function showErrorMsg() {
      errorMsg.classList.remove('d-none');
      successMsg.classList.add('d-none');
      correcttMsg.classList.add('d-none');
  }

  function showLoginErrorMsg() {
      correcttMsg.classList.remove('d-none');
      successMsg.classList.add('d-none');
      errorMsg.classList.add('d-none');
  }

  function sendToHome() {
      correcttMsg.classList.add('d-none');
      window.location.href = 'home.html';
  }

