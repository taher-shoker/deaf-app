
var nameInput = document.getElementById('name'),
    phoneInput = document.getElementById('phone');


function login() {

    var name = nameInput.value,
        phone = phoneInput.value;
    var x = JSON.parse(localStorage.getItem("user"))
    if (name == x[0] && phone === x[1]) {
        window.location.replace('home.html')
    } else {


    }


}

$('#login').on('click', function (e) {
    e.preventDefault()
    login()

})



