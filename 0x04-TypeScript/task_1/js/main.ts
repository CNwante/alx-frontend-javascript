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
