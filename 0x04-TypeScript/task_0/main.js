var student1 = {
    firstName: 'Solomon',
    lastName: 'Nwante',
    age: 29,
    location: 'Ebonyi State',
};
var student2 = {
    firstName: 'Solomon',
    lastName: 'Chuks',
    age: 30,
    location: 'Abakaliki',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var body = document.querySelector('body');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
body === null || body === void 0 ? void 0 : body.appendChild(table);
