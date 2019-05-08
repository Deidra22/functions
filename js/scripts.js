function formatName(firstName, lastName) {
    var formattedName = lastName + ' ' + firstName;

    if (!localStorage.getItem('userFullName')) {
        localStorage.setItem('userFullName', formattedName);
    }

    return formattedName;
}

var userFirstName = prompt('Add First Name!');
var userLastName = prompt('Add Last Name');

var createUserObj = function (firstName, lastName) {
    var userObj = {
        name: formatName(firstName, lastName),
        age: null
    };
    return userObj; // add last set tof parenthesis to evalueate expression immediately after creation function expressions are usually only used once
}(userFirstName, userLastName);


// constructor
var concatinate = new Function('x', 'y', 'return x + y' );
