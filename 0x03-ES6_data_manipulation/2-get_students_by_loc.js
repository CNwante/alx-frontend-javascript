export default function getStudentsByLocation(studentsList, city) {
  const location = studentsList.filter((student) => student.location === city);
  return location;
}
