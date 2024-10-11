// Task 5. Advanced types Part 1
interface WorkInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends WorkInterface {
  workDirectorTasks(): string;
}

interface TeacherInterface extends WorkInterface {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher(); // Return an instance of Teacher
  } else {
    return new Director(); // Return an instance of Director
  }
}

// Testing the function
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee('$500')); // Director instance
