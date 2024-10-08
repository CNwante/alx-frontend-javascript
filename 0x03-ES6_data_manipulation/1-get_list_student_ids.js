export default function getListStudentIds(studetsList) {
  if (!Array.isArray(studetsList)) {
    return [];
  }
  return studetsList.map((student) => student.id);
}
