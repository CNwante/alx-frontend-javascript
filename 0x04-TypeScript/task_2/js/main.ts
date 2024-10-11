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


// Task 6. Creating functions specific to employees
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }

}

// Test the implementation
executeWork(createEmployee(200)); // Should print: Getting to work
executeWork(createEmployee(1000)); // Should print: Getting to director tasks


// Task 7. String literal types
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

console.log(teachClass('Math'));      // Outputs: Teaching Math
console.log(teachClass('History'));   // Outputs: Teaching History
