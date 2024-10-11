// Task 1. Let's build a Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Chukwuma',
  lastName: 'Nwante',
  fullTimeEmployee: false,
  location: 'Abakaliki',
  contract: false,
};

console.log(teacher3);


// Task 2. Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Chukwuma',
  lastName: 'Nwante',
  fullTimeEmployee: false,
  location: 'Abakaliki',
  numberOfReports: 17,
};

console.log(director1);


// Task 3. Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

const teacher = printTeacher("Solomon", "Nwante");
console.log(teacher);  // Output: S. Nwante


// Task 4. Writing a class
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return `Currently working`;
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}

const studentData = new StudentClass("Solomon", "Nwante");
console.log(studentData.displayName());
console.log(studentData.workOnHomework());
