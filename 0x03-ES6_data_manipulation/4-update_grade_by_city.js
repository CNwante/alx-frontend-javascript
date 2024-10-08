// import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  // const studentsInCity = getStudentsByLocation(students, city);
  return studentsInCity.map((student) => {
    const studentGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
