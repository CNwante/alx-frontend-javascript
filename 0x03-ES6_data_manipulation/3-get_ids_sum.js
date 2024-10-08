import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const Ids = getListStudentIds(students);
  const sum = Ids.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}
