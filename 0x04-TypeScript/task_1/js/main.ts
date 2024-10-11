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


// 2. Extending the Teacher class
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
