
var nameInput      = document.getElementById('name'),
    roomInput      = document.getElementById('room'),
    imageInput     =document.getElementById('emp-image');

var employees=[];
function add() {

var name = nameInput.value,
    room = roomInput.value,
    image= imageInput.value;
employees.push(name,room,image);

localStorage.setItem('employees',JSON.stringify(employees))
window.location.replace('employeeLists.html')
}
$('input[type="file"]').change(function(e){

    var fileName = e.target.files[0].name;
})



$('#add').on('click', function (e) {
    add()
e.preventDefault()


})
