export default function getStudentIdsSum(students) {
  return students.reduce((accum, { id }) => accum + id, 0);
}
