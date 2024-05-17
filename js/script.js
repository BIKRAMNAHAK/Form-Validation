
      
function validateForm() {
    var srl_no = document.getElementById('srl_no').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var mobile = document.getElementById('mobile').value;

    if (!srl_no || !fname || !lname ||!email || !pass || !mobile) {
        alert("All fields are required!");
        return false;
    }

    newRow();
    return false; // Prevent form submission
}

var n = 1;

function newRow() {
    var table = document.getElementById('show').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var srl_no = document.getElementById('srl_no').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var mobile = document.getElementById('mobile').value;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    // var cell5 = newRow.insertCell(5);

    cell1.innerHTML = srl_no;
    cell2.innerHTML = fname + " " + lname;
    cell3.innerHTML = email; // Assuming no email field in the form
    cell4.innerHTML = pass;
    cell5.innerHTML = mobile;

    n++;
    clearForm();
}

function clearForm() {
    document.getElementById('srl_no').value = "";
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('mobile').value = "";
}        