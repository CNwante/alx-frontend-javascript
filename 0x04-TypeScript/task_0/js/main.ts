(() => {
  interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: 'Solomon',
    lastName: 'Nwante',
    age: 29,
    location: 'Ebonyi State',
  };

  const student2: Student = {
    firstName: 'Solomon',
    lastName: 'Chuks',
    age: 30,
    location: 'Abakaliki',
  };

  const studentsList: Student[] = [student1, student2];

  const table = document.createElement('table');
  const body = document.querySelector('body');

  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  body?.appendChild(table);
})();
