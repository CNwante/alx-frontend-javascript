import getListStudents from './0-get_list_students';

export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const studentsList = getListStudents();
  return studentsList.map((student) => student.id);
}
