function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var newUser = { email: name.value, password: pw.value };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Your account has been created');
    }
}

//checking
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var newUser = { email: name.value, password: pw.value };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Your account has been created');
    }
}

//checking
function check() {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
  
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;
    var userRemember = document.getElementById('rememberMe');
  
    var user = users.find(function(user) {
      return user.email === userName && user.password === userPw;
    });
  
    if (user) {
      alert('You are logged in.');
      sessionStorage.setItem('loggedInUser', user.email); 
      window.location.href = 'mealplanner.html?user=' + user.email;
    } else {
      alert('Error on login');
    }
  }
  