// var nameInput=document.querySelector('#name');
// var emailInput=document.querySelector('#email');
// var passwordInput=document.querySelector('#password');
// var submitBtn=document.querySelector('#submitBtn');
// var loginBtn=document.querySelector('#loginBtn');
// var errorMsg=document.querySelector('.errorMsg');
// var successMsg=document.querySelector('.successMsg');


// var infoList=[];



// // ------------------sign up-------------------------

// submitBtn.addEventListener('click',function(e){
//     addUser();
// })

// function addUser() {
//     var user = {
//         name: nameInput.value,
//         email: emailInput.value,
//         password: passwordInput.value,
//     };
//     if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
//         errorMsg.classList.remove('d-none');
//         successMsg.classList.add('d-none');
//         successMsg.nextElementSibling.classList.add('d-none');
//     } else {
//         if (localStorage.getItem('infoList')) {
//             var infoList = JSON.parse(localStorage.getItem('infoList'));
//             var emailExists = false;
//             for (var i = 0; i < infoList.length; i++) {
//                 if (infoList[i].email === emailInput.value) {
//                     emailExists = true;
//                     break;
//                 }
//             }
//             if (emailExists) {
//                 errorMsg.classList.add('d-none');
//                 successMsg.nextElementSibling.classList.remove('d-none');
//                 successMsg.classList.add('d-none');
//             } else {
//                 infoList.push(user);
//                 localStorage.setItem('infoList', JSON.stringify(infoList));
//                 console.log(infoList);
//                 errorMsg.classList.add('d-none');
//                 successMsg.classList.remove('d-none');
//                 successMsg.nextElementSibling.classList.add('d-none');
//                 submitBtn.setAttribute('href','login.html')
//             }
//         }
//     }
// }
 
    var nameInput = document.querySelector('#name');
    var emailInput = document.querySelector('#email');
    var passwordInput = document.querySelector('#password');
    var submitBtn = document.querySelector('#submitBtn');
    var errorMsg = document.querySelector('.errorMsg');
    var successMsg = document.querySelector('.successMsg');


    submitBtn.addEventListener('click', function (e) {
        addUser();
    });

    function addUser() {
        var user = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };

        if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
            showErrorMsg();
            return;
        }

        var infoList = JSON.parse(localStorage.getItem('infoList')) || [];

        if (emailExists(infoList, user.email)) {
            showEmailExistsMsg();
            return;
        }

        infoList.push(user);
        localStorage.setItem('infoList', JSON.stringify(infoList));
        showSuccessMsg();
        sendToLogin();
    }

    // function getInfoList() {
    //     return JSON.parse(localStorage.getItem('infoList')) || [];
    // }

    function emailExists(infoList, email) {
        for (var i = 0; i < infoList.length; i++) {
            if (infoList[i].email === email) {
                return true;
            }
        }
        return false;
    }

    function showErrorMsg() {
        errorMsg.classList.remove('d-none');
        successMsg.classList.add('d-none');
        successMsg.nextElementSibling.classList.add('d-none');
    }

    function showEmailExistsMsg() {
        errorMsg.classList.add('d-none');
        successMsg.nextElementSibling.classList.remove('d-none');
        successMsg.classList.add('d-none');
    }

    function showSuccessMsg() {
        errorMsg.classList.add('d-none');
        successMsg.classList.remove('d-none');
        successMsg.nextElementSibling.classList.add('d-none');
    }

    function sendToLogin() {
        window.location.href = 'login.html'; 
    }
