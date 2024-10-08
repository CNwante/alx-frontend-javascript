// eslint-disable-next-line no-unused-vars
import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(studentsList, city) {
  const location = studentsList.filter((student) => student.location === city);
  return location;
}
